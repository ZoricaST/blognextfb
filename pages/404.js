import { useEffect } from 'react';
import { useRouter } from 'next/dist/client/router';
import Link from 'next/link'

const NotFound = () => {
    const router = useRouter();

useEffect(()=>{
setTimeout(()=>{
router.push('/');
}, 3000)
},[])
return ( 
<div className="not-found">
<h1>Ooooooooooooooops...</h1>
<h2>That page cannot be found.</h2>
<p>Do back to the <Link href='/'><a>Homepage</a></Link> </p>
</div> 
);
}
export default NotFound;