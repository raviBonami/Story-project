
import React from 'react'
import {useParams, useNavigate} from 'react-router-dom'
import {getStories} from './SrcStory'
import NotFound from './NotFound';

function StoryCard() {
    const params = useParams();
    const nav = useNavigate()

    const stories = getStories();
    console.log(params);
    // console.log(stories)
    // console.log(props)
    
  
    if(params.id >= 1 && params.id <= stories.length){
        return (
            <div>
            <h1>{`${stories[params.id-1].id}. ${stories[params.id-1].title}`}</h1>
            <p>{`${stories[params.id-1].content}`}</p>
            <button onClick={() => nav("/")} >Back to Home</button>
        </div>
        )
    }
    return (
        <NotFound />
    )
   
  
}

export default StoryCard