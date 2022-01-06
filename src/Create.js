import { useState } from "react";
import { useHistory } from "react-router";

const Create = () => {
    const[title,setTitle] = useState('')
    const[body,setBody] = useState('')
    const[author,setAuthor] = useState('Amit')
    const[isPending,setPending] = useState(false)
    const history = useHistory()
    const handleSubmit=(e)=>{
      e.preventDefault()
      const blog = {title,body,author}
      setPending(true)
      fetch("http://localhost:8000/blogs",{
          method:"POST",
          headers:{"Content-Type":"application/json"},
          body:JSON.stringify(blog)
      }).then(()=>{
          console.log("New blog Added..")
          setPending(false)
          history.push('/')
      })
    }
     return ( 
        <>
          <div className="content">
              <form onSubmit={handleSubmit}>
                  <h3>Write A Blog</h3>
                  
                  <label htmlFor="title">Title</label>
                  <div>
                  <input required type="text" value={title} 
                   onChange={(e)=>{setTitle(e.target.value)}}/>
                  </div>
               
                  <label htmlFor="body">Body</label>
                  <div>
                  <textarea required cols="30" rows="10"
                  value={body}
                  onChange={(e)=>{setBody(e.target.value)}}
                  ></textarea>
                  </div> 
                  <select value={author} onChange={(e)=>{setAuthor(e.target.value)}}>
                      <option value="Amit">Amit</option>
                      <option value="Ajay">Ajay</option>
                  </select>
                  <div>
                      {!isPending&&<button className='btn' style={{marginTop:'20px',border:'none',fontFamily:"poppins",cursor:"pointer"}}>Add Blog</button>}
                      {isPending&&<button className='btn' style={{marginTop:'20px',border:'none',fontFamily:"poppins",cursor:"pointer"}}>Adding Blog...</button>}
                      
                  </div>
                  <p>{title}</p>
                  <p>{body}</p>
                  <p>Blog writing by - {author}</p>
              </form>
          </div>
        </>
     );
}
 
export default Create;
