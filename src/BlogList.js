import {Link} from 'react-router-dom';
const BlogList = (props) => {
    const blogs = props.blogs
    return (
        <>
        {blogs.map((blog)=>(
            <div  className="blog-preview" key={blog.id}>
                <Link to={`/blogs/${blog.id}`}>
                <h3>{blog.title}</h3>
                <p>Written by {blog.author}</p>
                </Link>
            </div>
         ))}
       </> 
        
     );
}
 
export default BlogList;