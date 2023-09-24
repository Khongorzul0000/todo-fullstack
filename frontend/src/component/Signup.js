import styles from "../styles/Signup.module.css";
import { HiOutlineMail } from "react-icons/hi";
import { AiOutlineUser } from "react-icons/ai";
import { BiLockAlt } from "react-icons/bi";
import { useState } from "react";
import axios from "axios";

export const Signup = () => {
  const [data, setData] = useState({
    username:'', 
    email:'',
    password:''
  })
  const navigate = useNavigate()

  const Submit = async (e) =>{
    e.preventDefault()
    const {username, email, password} = data
    try{
      const {data} = await axios.post('http://localhost:5000/createuser', {
        username, email, password
      })
      if(data.error){
        toast.error(data.error)
      }else{
        toast.success('Login successfully. Welcome!')
        navigate("/login")
      }
    }catch(error){
      console.log(error)
    }
  }

  return (
    <>
      <div className={styles.back}>
        <div className={styles.wrapper}>
          <div className={styles.block}>
            <div className={styles.top}>
              <span className={styles.account}>
                Have an account?
                <a href="login" className={styles.href}>
                  Login
                </a>
              </span>
              <header>Sign Up</header>
            </div>
            <div className={styles.bottom}>
              <div>
                <input
                  placeholder="User name"
                  className={styles.input_field}
                  onChange={(e) => setData({...data, username: e.target.value})}
                ></input>
                <AiOutlineUser className={styles.icon} />
              </div>
              <div>
                <input
                  placeholder="Email"
                  className={styles.input_field}
                  onChange={(e) => setData({...data, email: e.target.value})}
                ></input>
                <HiOutlineMail className={styles.icon} />
              </div>
              <div>
                <input
                  placeholder="Password"
                  className={styles.input_field}
                  onChange={(e) => setData({...data, password: e.target.value})}
                  type="password"
                ></input>
                <BiLockAlt className={styles.icon} />
              </div>
              <div>
                <button className={styles.submit} onClick={Submit}>Register</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
