
import {useNavigate} from 'react-router-dom'

function StoryThree() {
    const story = {
        id: 3,
        title:"Story 3",
        content:`Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur 
        omnis non, nobis, iste soluta similique tempora voluptatibus accusantium c
        onsequatur beatae laudantium esse. Fugit quis ab, culpa error incidunt minus quo?`
    }

    let navigate = useNavigate();
    const clickHandle = () => {
        navigate("/")
    }
    console.log("working")

  return (
    <div>
        <h1>{`${story.id}. ${story.title}`}</h1>
        <p>{story.content}</p>
        <button onClick={clickHandle} >Back to stories</button>
    </div>
  )
}

export default StoryThree