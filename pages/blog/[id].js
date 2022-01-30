//import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import '@firebase/firestore'
import fire from '../../config/fire-conf';
import Link from 'next/link';
//import firebase from 'firebase/app';
import 'firebase/firestore';
//import { query as fireQuery } from '@firebase/firestore';

const Blog = (props) => {
  return (
    <div>
      <h2>{props.title}</h2>
      <p>
        {props.content}
      </p>
      <Link href="/">
        <a>Back</a>
      </Link>
    </div>
  )
}
export const getServerSideProps = async ({ query }) => {
  const content = {}
  await fire.firestore()
    .collection('blog')
    .doc(query.id)
    .get()
    .then(result => {
      content['title'] = result.data().title;
      content['content'] = result.data().content;
    });
return {
    props: {
      title: content.title,
      content: content.content,
    }
  }
}
export default Blog