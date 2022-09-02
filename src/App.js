
import './App.css';
import React from 'react';
import {BrowserRouter,Routes, Route, Link, Outlet, useNavigate} from 'react-router-dom'
import StoryCard from './components/StoryCard';
import Story from './components/Story';
import Home from './components/Home';
import NotFound from './components/NotFound';

function App() {
  
  return (
    <>
    <BrowserRouter>
      <Routes>
        {/* <Route path="/" element={<Home />} ></Route> */}
        <Route path="/" element={<Home />}></Route>
        <Route path="/story" element={<Story />} ></Route>
        <Route path="/story/:id" element={<StoryCard />} ></Route>
        <Route path="/story/*" element={<NotFound/>}></Route>
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App;
















{/* <BrowserRouter>
      <Routes>
          <Route path="/" element={<App />} ></Route>
          <Route path="/story/id" element={<StoryOne />} ></Route>
          <Route path="/story2" element={<StoryTwo />} ></Route>
          <Route path="/story3" element={<StoryThree />} ></Route>
          <Route path="/story4" element={<StoryFour />} ></Route>
          <Route path="*" element={<NotFound />}></Route>
      </Routes>
      {/* <App /> */}
    // </BrowserRouter> */}


// import StoryList from './components/StoryList';
// import StoryOne from './components/stories/StoryOne';
// import StoryTwo from './components/stories/StoryTwo';
// import StoryThree from './components/stories/StoryThree';
// import StoryFour from './components/stories/StoryFour';
// import NotFound from './components/NotFound';

// const navigate = useNavigate
// function back(){
//   navigate('/')
// }


{/* <ContextOne.Provider value={back}>
<h1>Stories List: </h1>
<ul>
  <li><Link to="/story1" >Story 1</Link></li>
  <li><Link to="/story2" >Story 2</Link></li>
  <li><Link to="/story3" >Story 3</Link></li>
  <li><Link to="/story4" >Story 4</Link></li>
</ul>
</ContextOne.Provider> */}

   {/* <ul>
      {stories.map((story,index) => (
        // <li key={story.id}> <Link to={`/story/${story[index+1]}`}>  </Link></li>
        // <li>{story[index].id}</li>
        // <h2>{story.id}</h2>
        <Link to="/" >Story {story.title}</Link>
        // console.log(story.id)
      ))}
    </ul> */}

       {/* <h1>Stories</h1> */}
      //  <Link to="/story" >Stories</Link>
       {/* <ul>
         {stories.map((story) => (
           <div>
              <Link to={`/story/${story.id}`}>
              <li key={story.id}>{story.title}</li> 
   
              </Link>
           {/*Story x */}
           {/* <li><Link to={`/story/${story.id}`} >{story.name}</Link></li> */}
           {/* <li><Link to={"/
           
           story/"+story.id} >{story.title}</Link></li> */}
           {/* </div> */}
         {/* // ))} */}
       {/* // </ul> */} 
   
       
       {/* <Link
     to={{
       pathname: "/courses",
       search: "?sort=name",
       hash: "#the-hash",
       state: { fromDashboard: true }
     }}
   /> */}