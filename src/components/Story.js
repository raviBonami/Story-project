
import React from 'react'
import {getStories} from './SrcStory'
import {useNavigate} from "react-router-dom"


function Story() {
  const nav = useNavigate()
  const stories = getStories();
  console.log(stories)
    
  return (
   <div>
    <h1>All stories</h1>
    {stories.map((story) => (
      <div key={story.id}>
      <h1>{story.id}. {story.title}</h1>
      <p>{story.content}</p>
      </div>
    ))}
    <button onClick={() => nav('/')} >Back to Home</button>
   </div>
  )
}

export default Story