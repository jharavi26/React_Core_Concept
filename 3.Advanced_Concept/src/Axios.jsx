import React, { useEffect, useState } from 'react';
import axios from 'axios';

function AxiosAPI() {
  const [data, setData] = useState([]);
  useEffect(()=>{
    axios.get("https://jsonplaceholder.typicode.com/posts")
    .then((response)=>{
      console.log(response);
      setData(response.data)
    })

  }, [])
  return (
    <div>
      <h1>Axios Concept</h1>
      {
        data.map((data)=>{
          return(
            <div>{data.id}</div>
          )
        })
      }
      
    </div>
  )
}

export default AxiosAPI;

