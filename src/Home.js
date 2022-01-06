
import useFetch from './useFetch';

import BlogList from './BlogList';
const Home = () => {
    const {data:blogs,loading,isError} = useFetch('http://localhost:8000/blogs')
    return ( 
        <div className="home">
            {isError && <p>Could Not fetch </p>}
            {loading && <p> Loading...</p>}
            {blogs && <BlogList blogs = {blogs}/>}
        </div>
     );
}
 
export default Home;