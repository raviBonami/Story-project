
import React,{useContext} from 'react'
import {useNavigate} from 'react-router-dom'
import { ContextOne } from '../../App'

function StoryOne() {
    const back = useContext(ContextOne)
    console.log(back)
    const story = {
        id: 1,
        title:"Story 1",
        content:`Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur 
        omnis non, nobis, iste soluta similique tempora voluptatibus accusantium c
        onsequatur beatae laudantium esse. Fugit quis ab, culpa error incidunt minus quo?`
    }
    let navigate = useNavigate();
    const clickHandle = () => {
        
    }
    console.log("working")

  return (
    <div>
        <h1>{`${story.id}. ${story.title}`}</h1>
        <p>{story.content}</p>
        <button onClick={() => navigate("/")} >Back to stories</button>
    </div>
  )
}

export default StoryOne