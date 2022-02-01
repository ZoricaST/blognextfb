// pages/index.js

import { useState, useEffect } from 'react';
import Head from 'next/head';
import CreatePost from '../components/CreatePost';
import Link from 'next/link';
import fire from '../config/fire-conf';
import "firebase/compat/auth";
import styles from '../styles/Home.module.css'

import 'firebase/compat/firestore';



const Home = () => {
  const [blogs, setBlogs] = useState([]);
  const [notification, setNotification] = useState('');
  const [loggedIn, setLoggedIn] = useState(false);
  fire.auth()
    .onAuthStateChanged((user) => {
      if (user) {
        setLoggedIn(true)
      } else {
        setLoggedIn(false)
      }
    })
  useEffect(() => {
    fire.firestore()
      .collection('blog')
      .onSnapshot(snap => {
        const blogs = snap.docs.map(doc => ({
          id: doc.id,
          ...doc.data()
        }));
        setBlogs(blogs);
      });
  }, []);
  const handleLogout = () => {
    fire.auth()
      .signOut()
      .then(() => {
        setNotification('Logged out')
        setTimeout(() => {
          setNotification('')
        }, 2000)
      });
  }
  return (
    <div >
      <Head>
        <title>Blog App</title>
      </Head>

      <h1 className={styles.title}>Blog</h1>
      {notification}
      {!loggedIn 
      ?
        <div className={styles.dugmici}>
          <Link href="/users/register">
            <a className={styles.button2}>Register</a>
          </Link> | 
          <Link href="/users/login">
            <a className={styles.button1}> Login</a>
          </Link>
        </div>
      :
        <button className={styles.button1} onClick={handleLogout}>Logout</button>
      }
    <div >
    <ul >
        {blogs.map(blog =>
          <li key={blog.id}>
            <Link href="/blog/[id]" as={'/blog/' + blog.id }>
              <a itemProp="hello"><h2>{blog.title}</h2></a>
            </Link>
          </li>
        )}
      </ul>
      {loggedIn && <CreatePost />}
      </div>
    </div>
  )
}
export default Home;