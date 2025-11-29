import './css/App.css'
import Home from './pages/Home'
import Favorites from './pages/Favorites'
import {Routes, Route} from "react-router-dom"
import NavBar from './components/NavBar'
import {MovieProvider} from "./contexts/MovieContext"
import Popular from './pages/popular'
import TopRate from './pages/TopRate'

// import {MovieCart} from "./components/MovieCard" named export 

function App(){
  return(
    
    <MovieProvider> 
      <NavBar />
      <main className='MainContent'>
        <Routes>
            <Route path='*' element ={<Home />} />
            <Route path='/movies/popular' element ={<Popular />} />
            <Route path='/movies/top-rated' element ={<TopRate />} />
            <Route path='/favorites' element ={<Favorites />} />
        </Routes>
      </main>
    </MovieProvider>
  );
}








/*
function App() { // root component. 
  const movieNumebr = 1; 

  return (
    <>
    {movieNumebr ===1 && <MovieCard movie ={{title: "My Oxford Year", 
        releaseDate: "Aug 2025", 
        url: "https://via.placeholder.com/150"}}/>
    }
    {movieNumebr ===2 && <MovieCard movie ={{title: "One Battle After Another", 
        releaseDate: "Sep 2025", 
        url: "https://via.placeholder.com/150"}}/>
    }
    {movieNumebr ===3 && <MovieCard movie ={{title: "Wicked: For Good", 
        releaseDate: "Nov 2025", 
        url: "https://via.placeholder.com/150"}}/>
    }

      {/* <MovieCard movie ={{title: "My Oxford Year", 
        releaseDate: "Aug 2025", 
        url: "https://via.placeholder.com/150"}}/>

        <MovieCard movie ={{title: "One Battle After Another", 
        releaseDate: "Sep 2025", 
        url: "https://via.placeholder.com/150"}}/>

        <MovieCard movie ={{title: "Wicked: For Good", 
        releaseDate: "Nov 2025", 
        url: "https://via.placeholder.com/150"}}/> */
      /* {movieNumebr === 1? 
        <MovieCard movie ={{title: "My Oxford Year", 
        releaseDate: "Aug 2025", 
        url: "https://via.placeholder.com/150"}}/>
      ): (
        <MovieCard movie ={{title: "One Battle After Another", 
        releaseDate: "Sep 2025", 
        url: "https://via.placeholder.com/150"}}/>
      )} }
       <div>
          <p> "Hello World" </p>
      </div>

      <Text display={"Hello"} />
      <Text display={"what's up"}/>
      <Text display={"act like parameter"} > </ Text> 
      <Text /> 


function Text({display}){
  return (
    <>
      <div>
          <p> {display} </p>
      </div>
    </>   
      
  )
}

*/

export default App
