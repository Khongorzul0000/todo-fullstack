import axios from "axios";
import { useState, useEffect } from "react";
import styles from "../styles/Home.module.css";
import { RiCheckboxCircleFill } from "react-icons/ri";
import { RiCheckboxBlankCircleLine } from "react-icons/ri";

export const Home = () => {
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

  const count = list.length;

  return (
    <div className={styles.flex}>
      <div className={styles.container}>
        <div className={styles.block}>
          <div className={styles.add_section}>
            <h1 className={styles.big_title}>Todo-List</h1>
            <input
              placeholder="What do you have planned ?"
              className={styles.add_npt}
              value={value}
              onChange={(e) => setValue(e.target.value)}
            ></input>
            <button className={styles.add_btn} onClick={addTodo}>
              add task
            </button>
          </div>
          <main>
            <h3 className={styles.mid_title}>Tasks / {count}</h3>
            <div>
              {list.map((har, index) => {
                return (
                  <div className={styles.task_block}>
                    <div
                      className={styles.done_section}
                      onClick={() => handleCheck(index)}
                    >
                      {har.isCompleted ? (
                        <RiCheckboxCircleFill className={styles.done} />
                      ) : (
                        <RiCheckboxBlankCircleLine className={styles.done} />
                      )}
                      <div>
                        <input
                          value={har.todo}
                          className={styles.input_value}
                          style={{
                            textDecorationLine: har.isCompleted
                              ? "line-through"
                              : undefined,
                          }}
                          onClick={() => handleCheck(index)}
                        ></input>
                      </div>
                    </div>
                    <div className={styles.btns}>
                      <button
                        className={styles.edit}
                        onClick={() => {
                          Update(har._id);
                        }}
                      >
                        edit
                      </button>
                      <button
                        className={styles.delete}
                        onClick={() => {
                          Delete(har._id);
                        }}
                      >
                        delete
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>
          </main>
        </div>
      </div>
    </div>
  );
};
