import { Link } from "react-router-dom";
const NotFound = () => {
    return ( 
        <>
          <h1>Sorry The Page Not Found....</h1>
          <Link to='/'>Go to Home</Link>
        </>
     );
}
 
export default NotFound;