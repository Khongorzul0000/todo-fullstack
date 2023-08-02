import styles from "../styles/Login.module.css";
import { HiOutlineMail } from "react-icons/hi";
import { AiOutlineUser } from "react-icons/ai";
import { BiLockAlt } from "react-icons/bi";

export const Login = () => {
  return (
    <>
      <div className={styles.back}>
        <div className={styles.block}>
          <div className={styles.top}>
            <span className={styles.account}>
              Don't have an account?
              <a href="#" className={styles.href}>Sign Up</a>
            </span>
            <header>Log In</header>
          </div>
          <div className={styles.bottom}>
            <div>
              <input placeholder="Email" className={styles.input_field}></input>
              <HiOutlineMail className={styles.icon} />
            </div>
            <div>
              <input
                placeholder="Password"
                className={styles.input_field}
                type="password"
              ></input>
              <BiLockAlt className={styles.icon} />
            </div>
            <div>
              <button className={styles.submit}>Sign In</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
