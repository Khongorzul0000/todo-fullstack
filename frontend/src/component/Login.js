import styles from "../styles/Login.module.css";
import { HiOutlineMail } from "react-icons/hi";
import { BiLockAlt } from "react-icons/bi";
import { useState } from "react";
import {useNavigate} from "react-router-dom"
import {toast} from "react-hot-toast"
import axios from "axios";

export const Login = () => {
  const navigate = useNavigate()
  const [data, setData] = useState({
    email:'',
    password:''
  })

  
  const Login = async (e) =>{
    e.preventDefault()
    const {email, password} = data
    try{
      const {data} = await axios.post('http://localhost:5000/login', {
        email,
        password
      })
      if(data.error){
        toast.error(data.error)
      }else{
        setData({})
        toast.success('Login successfully. Welcome!')
        navigate("/")
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
                Don't have an account?
                <a href="signup" className={styles.href}>
                  Sign Up
                </a>
              </span>
              <header>Log In</header>
            </div>
            <div className={styles.bottom}>
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
                  type="password"
                  onChange={(e) => setData({...data, password: e.target.value})}
                ></input>
                <BiLockAlt className={styles.icon} />
              </div>
              <div>
                <button className={styles.submit} onClick={Login}>Sign In</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
