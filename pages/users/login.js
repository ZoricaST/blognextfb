// pages/users/login.js
import { useState } from 'react';
import fire from '../../config/fire-conf';
import { useRouter } from 'next/router'
import "firebase/compat/auth";
import styles from '../../styles/register.module.css'


  const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [notify, setNotification] = useState('');
  const router = useRouter();

  const handleLogin = (e) => {
    e.preventDefault();

    fire.auth()
      .signInWithEmailAndPassword(username, password)
      .catch((err) => {

        console.log(err.code, err.message)
        setNotification(err.message)

        setTimeout(() => {
          setNotification('')
        }, 2000)
      })

    setUsername('')
    setPassword('')
    router.push("/")
  }

  return (
    <div className={styles.divform}>
      <h1 >Login</h1>
      {notify}
      <form onSubmit={handleLogin}>
      <label >Email: </label> <br />
      <input className={styles.inputs} type="text" value={username} onChange={({target}) => setUsername(target.value)} />
        <br /> <br />
       
        <label >Password: </label> <br />
        <input className={styles.inputs} type="password" value={password} onChange={({target}) => setPassword(target.value)} />
        <br />
        <button className={styles.btn} type="submit">Login</button>
      </form>
    </div>
  )

}

export default Login