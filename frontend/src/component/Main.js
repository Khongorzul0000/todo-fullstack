import axios from "axios";
import { useState, useEffect } from "react";
import styles from "../styles/Main.module.css";
import { FiHome } from "react-icons/fi";
import { HiOutlinePlus } from "react-icons/hi";
import { AiFillDelete } from "react-icons/ai";
import { CiEdit } from "react-icons/ci";
import { RiCheckboxCircleFill } from "react-icons/ri";
import { RiCheckboxBlankCircleLine } from "react-icons/ri";

export const Main = () => {
  const [value, setValue] = useState("");
  const [list, setList] = useState([{ _id: "anyid" }]);
  const [id, setId] = useState([]);

  const addTodo = () => {
    if (!value) return;
    axios
      .post("http://localhost:5000/add", {
        todo: value,
      })
      .then((res) => {
        console.log("created", res.data);
        axios.get("http://localhost:5000/lists").then((data) => {
          setList(data.data);
          console.log(res.data._id);
        });
      });
  };

  const Delete = (_id) => {
    console.log(_id);
    axios
      .delete("http://localhost:5000/delete/" + _id)
      .then((res) => {
        console.log("deleted", res.data);
        axios.get("http://localhost:5000/lists").then((data) => {
          setList(data.data);
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const Update = (_id) => {};

  const handleCheck = (index) => {
    const tasksClone = [...list];
    tasksClone[index].isCompleted = !tasksClone[index].isCompleted;
    setList(tasksClone);
  };

  useEffect(() => {
    axios.get("http://localhost:5000/lists").then((data) => {
      console.log(data);
      setList(data.data);
    });
  }, []);

  return (
    <div className={styles.back}>
      <div className={styles.left_bar}></div>
      <div className={styles.main}>
        <div className={styles.title_block}>
          <FiHome className={styles.home} />
          <h1 className={styles.title}>Tasks</h1>
        </div>
        <div className={styles.scroll}>
          {list.map((har, index) => {
            return (
              <>
                <div className={styles.list}>
                  <div className={styles.card}>
                    <div onClick={() => handleCheck(index)}>
                      <div>
                        {har.isCompleted ? (
                          <RiCheckboxCircleFill className={styles.done} />
                        ) : (
                          <RiCheckboxBlankCircleLine className={styles.done} />
                        )}
                      </div>
                    </div>
                    <p
                      style={{
                        textDecorationLine: har.isCompleted
                          ? "line-through"
                          : undefined,
                      }}
                      onClick={() => handleCheck(index)}
                      className={styles.text}
                    >
                      {har.todo}
                    </p>
                    <button
                      onClick={() => {
                        Delete(har._id);
                      }}
                    >
                      <AiFillDelete />
                    </button>
                    <button
                      onClick={() => {
                        Update(har._id);
                      }}
                    >
                      <CiEdit />
                    </button>
                  </div>
                </div>
              </>
            );
          })}
        </div>
        <div className={styles.pos}>
          <div className={styles.add}>
            <div className={styles.plus} onClick={addTodo}>
              <HiOutlinePlus />
            </div>
            <input
              className={styles.add_input}
              placeholder="add a task"
              value={value}
              onChange={(e) => setValue(e.target.value)}
            ></input>
          </div>
        </div>
      </div>
    </div>
  );
};
