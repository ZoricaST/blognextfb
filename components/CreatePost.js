import React, { useState } from 'react';
import fire from '../config/fire-conf';
import firebase from 'firebase/compat/app';
import styles from '../styles/Home.module.css'

import 'firebase/compat/firestore';

const CreatePost = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [notification, setNotification] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();

    fire.firestore()
      .collection('blog')
      .add({
        title: title,
        content: content,
      });

    setTitle('');
    setContent('');

    setNotification('Blogpost created');
    setTimeout(() => {
      setNotification('')
    }, 2000)
  }
  return (
    <div>
      <h2>Add Blog</h2>

      {notification}

      <form onSubmit={handleSubmit}>
        <div>
          Title<br />
          <input type="text" value={title} onChange={({target}) => setTitle(target.value)} />
        </div>
        <div>
          Content<br />
          <textarea value={content} onChange={({target}) => setContent(target.value)} />
        </div>
        <button className={styles.btn} type="submit">Save</button>
      </form>
    </div>
  )
}

export default CreatePost;