import styles from "../styles/Signup.module.css";
import { HiOutlineMail } from "react-icons/hi";
import { AiOutlineUser } from "react-icons/ai";
import { BiLockAlt } from "react-icons/bi";

export const Signup = () => {
  return (
    <>
      <div className={styles.back}>
        <div className={styles.block}>
          <div className={styles.top}>
            <span className={styles.account}>
              Have an account?
              <a href="#" className={styles.href}>Login</a>
            </span>
            <header>Sign Up</header>
          </div>
          <div className={styles.bottom}>
            <div>
              <input
                placeholder="User name"
                className={styles.input_field}
              ></input>
              <AiOutlineUser className={styles.icon} />
            </div>
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
              <button className={styles.submit}>Register</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
