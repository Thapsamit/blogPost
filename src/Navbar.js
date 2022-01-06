import { Link } from "react-router-dom"

const Navbar = () => {
    return ( 
        <nav className="navbar">
            <h2 className='logo'>Blogs.</h2>
            <div className="menu">
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link className="btn" to = "/create">Write a Blog</Link></li>
                </ul>
            </div>
        </nav>
     );
}
 
export default Navbar;