

import React from 'react'
import {Link} from 'react-router-dom'
import Story from './Story'
import {getStories} from './SrcStory'


function StoryList() {
    const stories = getStories();
  return (
    <div>
        <ul>
            {stories.map( (story) => (
                <Story key={story.id} story={story} />
            ))}
        </ul>
    </div>
  )
}

export default StoryList