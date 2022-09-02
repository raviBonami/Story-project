import React from 'react'

import Story from './Story';
import {Link } from 'react-router-dom'
import {getStories} from './SrcStory'

function Home() {
    const stories = getStories();
//    console.log(stories)
  return (
    <div>
        <h2>Stories</h2>
        {/* <Story /> */}
        {stories.map((story) => (
            // console.log(story.id + 1)
            <li key={story.id}><Link to={`/story/${(story.id)}`} >{story.title}</Link></li>
        ))}
        
    </div>
  )
}

export default Home

{/* <Link to="/story" >Stories List</Link> | {" - "}
        <Link to="/story/1" >Story 1</Link> | { " " }
        <Link to="/story/2" >Story 2</Link> | {" "}
        <Link to="/story/3" >Story 3</Link> */}