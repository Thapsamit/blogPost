import { useState,useEffect } from "react"
const useFetch = (urlEndPoint)=>{
    const[data,setData] = useState(null)
    const[loading,setLoading] = useState(true)
    const[isError,setError] = useState(false)

    useEffect(() => {
        fetch(urlEndPoint)
        .then((res)=>{
            if(!res.ok)
            {
              throw Error('Could Not fetch Resources!!')
            }
            return res.json()
        })
        .then((data)=>{
            setData(data)
            setLoading(false)
            
        })
        .catch((err)=>{
            setLoading(false)
            setError(true)
        })
    }, [urlEndPoint])
   return {data,loading,isError}
}
export default useFetch