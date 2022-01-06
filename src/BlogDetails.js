import { useParams,useHistory } from "react-router-dom";
import useFetch from './useFetch';

const BlogDetails = () => {
    const {id}  = useParams();
    const{data:blog,loading,isError} = useFetch(`http://localhost:8000/blogs/${id}`)
    const history = useHistory()
    const handleDelete=()=>{
        fetch(`http://localhost:8000/blogs/${id}`,{
            method:'DELETE'
        }).then(()=>{
            history.push('/')
        })
    }
    return ( 
        <>
         <div className="content">
             {loading && <p>Loading...</p>}
             {isError && <p>{isError}</p>}
             { blog && (
                 <>
                  <h2 className="title">{blog.title}</h2>
                    <small>written by {blog.author}</small>
                    <p>{blog.body}</p>
                    <button onClick={handleDelete} className="btn" style={{marginTop:'20px',border:'none',fontFamily:"poppins",cursor:"pointer"}}>Delete</button>
                 </>
                 )}
               
            
         </div>
        </>
     );
}
 
export default BlogDetails;