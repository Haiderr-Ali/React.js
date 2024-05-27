import React, { useEffect, useState } from 'react'


function Github() {
   
     const [data,setData] = useState([])
     useEffect (()=>{
          fetch('https://api.github.com/users/Haiderr-Ali')
          .then(response => response.json())
          .then(data=>{
             console.log(data);
             setData(data)
          })
     },[])
  return (
    <div className='text-center m-4 bg-gray-700 
    p-4 text-3xl text-white ' >
      My Github Followers: {data.followers} <br />
      My Github Bio : {data.bio}
      
      <img src={data.avatar_url} alt="Hiader-Ali Image" width={300} /> 
    </div>
  )
}

export default Github


