import React, { useEffect } from 'react'
import { useState } from 'react';
import { useLoaderData } from 'react-router-dom';

const Github = () => {
  const data = useLoaderData()
  console.log(data)
  // const [data, setdata] = useState([]);
  // useEffect(()=>{
  //   fetch('https://api.github.com/users/hiteshchoudhary')
  //   .then (response => response.json())
  //   .then(data => {
  //     console.log(data);
  //     setdata(data)})
  // }, [])
  return (
    <>
      <div id='githubfollowers'>
        <h1>Github Followers: {data.followers}</h1>
      </div>
      <div id="hero-section">
            <div id="heroimg">
                <img src={data.avatar_url} alt="GithubPicture"/>
            </div>
            <div id="herocontentAbout">
                <h1>React development is carried out by passionate Developers</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat ad natus numquam at repellendus ut libero accusantium, nihil sequi porro amet, consequuntur nobis cupiditate laboriosam aliquid? Autem ea explicabo nemo!</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat ad natus numquam at repellendus ut libero accusantium, nihil sequi porro amet!</p>
            </div>
        </div>
    </>
  )
}

export default Github;

export const githubinfoloader = async() =>{
  const response = await fetch('https://api.github.com/users/hiteshchoudhary')
  return response.json()
}
