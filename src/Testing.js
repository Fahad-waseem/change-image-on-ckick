import axios from 'axios';
import React, {  useState } from 'react'

export default function Testing() {
    const [post, setPost] = useState([]);
    
    useEffect(() => {
        axios.get("https://jsonplaceholder.typicode.com/users").then((data) => {
          console.log(data);
          setPost(data?.data);
        });
      }, []);
  return (
    <div>
        Users
      {post.map((item, i) => {
        return (
          <div key={i}>
            <p>{item?.name}</p>
          </div>
        );
      })}
    </div>
  )
}
