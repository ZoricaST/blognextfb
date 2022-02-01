import { useState } from 'react'; 
import fire from '../../config/fire-conf';
import { useRouter } from 'next/router';
import styles from '../../styles/register.module.css'

import "firebase/compat/auth";

const Register = () => {

  const router = useRouter();

  const [userName, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [passConf, setPassConf] = useState('');

  const [notify, setNotification] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();

    if (password !== passConf) {
      setNotification('Password and password confirmation does not match')

      setTimeout(() => {
        setNotification('')
      }, 2000)

      setPassword('');
      setPassConf('');
      return null;

    }

    fire.auth()
      .createUserWithEmailAndPassword(userName, password)
      .catch((err) => {
        console.log(err.code, err.message)
      });

    router.push("/")
  }

  return (
    <div className={styles.divform}>
      <h1 className={styles.title}>Create new user</h1>

      {notify}
      <form  onSubmit={handleLogin}>
      <label >Email: </label> <br />
        <input className={styles.inputs} type="text" value={userName} onChange={({target}) => setUsername(target.value)} /> 
        <br /> <br />
        <label >Password: </label> <br />
      <input className={styles.inputs} type="password" value={password} onChange={({target}) => setPassword(target.value)} /> 
        <br /><br />
        <label > Password conf: </label> <br />
       <input className={styles.inputs}type="password" value={passConf} onChange={({target}) => setPassConf(target.value)} /> 
        <br />
        <button className={styles.btn} type="submit">Register</button>
      </form>
    </div>
  )
}

export default Register