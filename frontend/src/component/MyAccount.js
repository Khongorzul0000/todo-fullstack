import styles from "../styles/MyAccount.module.css";
import { useState } from "react";
export const MyAccount = () => {
  const [isDash, setIsDash] = useState(true);
  const [infor, setInfor] = useState(false);
  const [infor2, setInfor2] = useState(false);
  const [comments, setComments] = useState([]);
  const [name, setName] = useState("");
  const [mail, setMail] = useState("");
  const [pic, setPic] = useState("");

  const Save = () => {
    if ((!name, !pic, !mail)) return;
    const Change = { name: name, mail: mail, pic: pic };
    setComments([...comments, Change]);
  };

  const Volunteer = [
    { name: "Conservation" },
    { name: "Farm work" },
    { name: "Climate change" },
    { name: "Animal rescue and care" },
    { name: "Wildlife conservation" },
    { name: "Teaching" },
    { name: "Working with children and youth" },
    { name: "Community development" },
    { name: "Volunteering work with the elderly" },
  ];

  const DashBoard = () => {
    setIsDash(true);
    if (1 < 2) {
      setInfor2(false);
      setInfor(false);
    }
  };
  const Change = () => {
    setInfor(true);
    if (1 < 2) {
      setInfor2(false);
      setIsDash(false);
    }
  };

  const Information = () => {
    setInfor2(true);
    if (1 < 2) {
      setIsDash(false);
      setInfor(false);
    }
  };

  return (
    <>
      <div className={styles.my_flex}>
        <div className={styles.my_container}>
          <div className={styles.image_flex}>
            <div className={styles.block}>
              <img
                src="https://www.dorkaholics.com/wp-content/uploads/2021/02/Solo-Levelling-Chapter-111-Delayed.jpeg"
                className={styles.back_img}
              ></img>
              <img className={styles.user_img} src={pic}></img>
              <p className={styles.user_name}>Khongorzul</p>
            </div>
          </div>
          <div className={styles.hr}></div>
          <div className={styles.my_column}>
            <div className={styles.my_first}>
              <div className={styles.my_card} onClick={DashBoard}>
                Xяналтын самбар
              </div>
              <div className={styles.my_card} onClick={Change}>
                Өөрчлөлт хийх
              </div>
              <div className={styles.my_card} onClick={Information}>
                Нарийн мэдээлэл
              </div>
            </div>
            {isDash && (
              <div className={styles.my_second}>
                <div className={styles.dashboard}>
                  Сайн уу sara (Бүртгэлээс гарах)
                  <div style={{ display: "flex" }}>
                    <p className={styles.rating}>Rate me -</p>
                  </div>
                </div>
                <p className={styles.dash_text}>
                Бүртгэлийнхээ хяналтын самбараас та сүүлийн захиалгаа харах боломжтой.
                  өөрийн тээвэрлэлт, төлбөрийн хаягийг удирдаж, засварлах
                  нууц үг болон дансны дэлгэрэнгүй мэдээлэл.
                </p>
                <div className={styles.btn_flex}>
                  <button className={styles.btn}>Xяналтын самбар</button>
                  <button className={styles.btn}>Ажил постлох</button>
                  <button className={styles.btn}>Влог постлох</button>
                </div>
              </div>
            )}
            {infor && (
              <div className={styles.edit_second}>
                <p className={styles.display}>Hэр</p>
                <input
                  className={styles.name_input}
                  placeholder="Hэр"
                  onChange={(e) => setName(e.target.value)}
                ></input>
                <p className={styles.email}>Эмайл</p>
                <input
                  className={styles.name_input}
                  placeholder="Эмайл"
                  onChange={(e) => setMail(e.target.value)}
                ></input>
                <p className={styles.email}>Profile pic</p>
                <div className={styles.change_pro}>
                  <div>
                    <img src={pic} className={styles.pro_size}></img>
                  </div>
                  <input
                    className={styles.pro_input}
                    placeholder="Profile зурагны линк"
                    onChange={(e) => setPic(e.target.value)}
                  ></input>
                </div>
                <button className={styles.button} onClick={Save}>
                  Өөрчлөлт хадгалах{" "}
                </button>
              </div>
            )}
            {infor2 && (
              <div className={styles.line}>
                <div className={styles.infor_second}>
                  <div className={styles.infor_block1}>
                    <div className={styles.margin_infor}>
                      <div className={styles.infor}>Миний бүтэн нэр</div>
                      <input
                        placeholder="-бүтэн нэр"
                        className={styles.infor_input}
                        disabled
                        value={name}
                      ></input>
                    </div>
                    <div className={styles.margin_infor}>
                      <div className={styles.infor}>Миний эмайл</div>
                      <input
                        placeholder="-эмайл"
                        disabled
                        value={mail}
                        className={styles.infor_input}
                      ></input>
                    </div>
                    <div className={styles.margin_infor}>
                      <div className={styles.infor}>Байршил</div>
                      <input
                        placeholder="-Байршил"
                        className={styles.infor_input}
                        disabled
                        value="Mongolia"
                      ></input>
                    </div>
                    <div className={styles.margin_infor}>
                      <div className={styles.infor}>Миний дугаар</div>
                      <input
                        placeholder="-дугаар"
                        className={styles.infor_input}
                        disabled
                        value="9000000"
                      ></input>
                    </div>
                    <div className={styles.margin_infor}>
                      <div className={styles.infor}>Миний facebook</div>
                      <input
                        placeholder="-facebook"
                        className={styles.infor_input}
                        disabled
                        value="khongroo"
                      ></input>
                      <p className={styles.leave}>
                      Хүсвэл орхиж болно
                      </p>
                    </div>
                  </div>
                  <div className={styles.infor_block2}>
                    <div className={styles.volunteer}>
                      Volunteers i have done
                    </div>
                    <div className={styles.volunteer_block}>
                      {Volunteer.map((vole, index) => {
                        return (
                          <>
                            <li className={styles.volun_title}>{vole.name}</li>
                          </>
                        );
                      })}
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};