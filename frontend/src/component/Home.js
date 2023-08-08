import axios from "axios";
import { useState, useEffect } from "react";
import styles from "../styles/Home.module.css";
import { FaSmileWink, FaSmileBeam } from "react-icons/fa";
import { RxCross2 } from "react-icons/rx";
import { AiOutlineEdit, AiOutlineDelete } from "react-icons/ai";
import {Navbar} from "../component/Navbar"

export const Home = () => {
  const [value, setValue] = useState("");
  const [done, setDone] = useState([]);
  const [undone, setUndone] = useState([]);
  const [id, setId] = useState([]);
  const [show, setShow] = useState(true);
  const [isUpdating, setIsUpdating] = useState(false);

  const addTodo = () => {
    if (!value) return;
    axios
      .post("http://localhost:5000/add", {
        todo: value,
      })
      .then((res) => {
        console.log("created", res.data);
        axios.get("http://localhost:5000/undone").then((data) => {
          setUndone(data.data);
        });
      });
  };

  const Delete = (_id) => {
    console.log(_id);
    axios
      .delete("http://localhost:5000/delete/" + _id)
      .then((res) => {
        console.log("deleted", res.data);
        axios.get("http://localhost:5000/done").then((data) => {
          setDone(data.data);
        });
        axios.get("http://localhost:5000/undone").then((data) => {
          setUndone(data.data);
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const Update = () => {
    if (!value) console.log(id);
    axios
      .patch("http://localhost:5000/update/" + id, {
        todo: value,
      })
      .then((res) => {
        console.log("updated", res.data);
        setIsUpdating(false);
        axios.get("http://localhost:5000/undone").then((data) => {
          setUndone(data.data);
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const toggleDone = (_id) => {
    axios.patch("http://localhost:5000/checked/" + _id).then((res) => {
      console.log("change", res.data.isDone);
      axios.get("http://localhost:5000/done").then((data) => {
        setDone(data.data);
      });
      axios.get("http://localhost:5000/undone").then((data) => {
        setUndone(data.data);
      });
    });
  };

  const UpdateMood = (_id, value) => {
    setIsUpdating(true);
    setValue(value);
    setId(_id);
  };

  const Task = () => {
    if (1 < 2) {
      setShow(true);
    }
  };

  const Completed = () => {
    if (1 < 2) {
      setShow(false);
    }
  };

  useEffect(() => {
    axios.get("http://localhost:5000/done").then((data) => {
      setDone(data.data);
    });
    axios.get("http://localhost:5000/undone").then((data) => {
      setUndone(data.data);
    });
  }, []);

  const count = undone.length;
  const count1 = done.length;
  const all = count + count1;

  return (
    <div className={styles.flex}>
      <Navbar/>
      <div className={styles.container}>
        <div className={styles.block}>
          <div className={styles.add_section}>
            <h1 className={styles.big_title}>Todo-List</h1>
            <div className={styles.flex_crs}>
              <div className={styles.npt_cross}>
                <input
                  placeholder="What do you have planned ?"
                  className={styles.add_npt}
                  value={value}
                  onChange={(e) => setValue(e.target.value)}
                ></input>
                <div className={styles.cross} onClick={() => setValue("")}>
                  <RxCross2 />
                </div>
              </div>
              <button
                className={styles.add_btn}
                onClick={isUpdating ? Update : addTodo}
              >
                {isUpdating ? "Update task" : "Add task"}
              </button>
            </div>
          </div>
          <main>
            <div className={styles.title}>
              <u className={styles.mid_title} onClick={Task}>
                To Do / {count}
              </u>
              <p className={styles.mid_title}>All / {all}</p>
              <u className={styles.mid_title} onClick={Completed}>
                Completed / {count1}
              </u>
            </div>
            <div>
              {show && (
                <>
                  {undone &&
                    undone.map((text, index) => {
                      return (
                        <div className={styles.task_block}>
                          <div className={styles.done_section}>
                            <input
                              type="checkbox"
                              className={styles.wait}
                              defaultChecked={text.isDone}
                              onChange={() => toggleDone(text._id, text.isDone)}
                            />
                            <div className={styles.ner1}>
                              <div className={styles.text_npt}>
                                <input
                                  className={styles.input_value}
                                  value={text.todo}
                                  style={{
                                    textDecorationLine: text.isCompleted
                                      ? "line-through"
                                      : undefined,
                                  }}
                                ></input>
                                <div className={styles.date}>
                                  {text.createdDate.slice(0, 10)}
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className={styles.btns}>
                            <button
                              className={styles.edit}
                              onClick={() => {
                                UpdateMood(text._id, text.todo);
                              }}
                            >
                              edit
                            </button>
                            <button
                              className={styles.delete}
                              onClick={() => {
                                Delete(text._id);
                              }}
                            >
                              delete
                            </button>
                          </div>
                          <div className={styles.icons}>
                            <AiOutlineEdit
                              className={styles.same}
                              onClick={() => {
                                UpdateMood(text._id, text.todo);
                              }}
                            />
                            <AiOutlineDelete
                              className={styles.same}
                              onClick={() => {
                                Delete(text._id);
                              }}
                            />
                          </div>
                        </div>
                      );
                    })}
                  {undone && undone.length === 0 && (
                    <div className={styles.none_flex}>
                      <div className={styles.none_card}>
                        Have no task to do{" "}
                        <FaSmileBeam className={styles.smile} />
                      </div>
                    </div>
                  )}
                </>
              )}
              {!show && (
                <>
                  {done &&
                    done.map((text, index) => {
                      return (
                        <div className={styles.task_block}>
                          <div className={styles.done_section}>
                            <input
                              type="checkbox"
                              className={styles.wait}
                              defaultChecked={text.isDone}
                              onChange={() => toggleDone(text._id, text.isDone)}
                              style={{
                                backgroundColor: "white",
                              }}
                            />
                            <div className={styles.ner1}>
                              <div className={styles.text_npt}>
                                <input
                                  className={styles.input_value}
                                  value={text.todo}
                                  style={{
                                    textDecorationLine: "line-through",
                                  }}
                                ></input>
                              </div>
                            </div>
                          </div>
                          <div className={styles.btns}>
                            <button
                              className={styles.delete}
                              onClick={() => {
                                Delete(text._id);
                              }}
                            >
                              delete
                            </button>
                          </div>
                          <div className={styles.icons}>
                            <AiOutlineDelete
                              className={styles.same}
                              onClick={() => {
                                Delete(text._id);
                              }}
                            />
                          </div>
                        </div>
                      );
                    })}
                  {done && done.length === 0 && (
                    <div className={styles.none_flex}>
                      <div className={styles.none_card}>
                        Have no completed tasks{" "}
                        <FaSmileWink className={styles.smile} />
                      </div>
                    </div>
                  )}
                </>
              )}
            </div>
          </main>
        </div>
      </div>
    </div>
  );
};
