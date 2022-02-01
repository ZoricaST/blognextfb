import Link from 'next/link'

const Navbar = () => {
    return ( 
    <nav>
    <div className="logo">
    <img src="/zo.png"/>
    <h1>Next Blog</h1>
    </div> 
    <Link href="/">
    <a>Blog</a>
    </Link>
    <Link href="/about">
    <a>About</a>
    </Link>
    <Link href="/contact">
    <a>Contact</a>
    </Link>
    </nav>
    );
    }
    export default Navbar;