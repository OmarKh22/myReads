import React from 'react'
// import * as BooksAPI from './BooksAPI'
import {BrowserRouter,Routes,Route} from "react-router-dom";
import './App.css'
import Homepage from './Components/Homepage';
import Search from './Components/Search';

 const App = () => {
  // state = {
  //   /**
  //    * TODO: Instead of using this state variable to keep track of which page
  //    * we're on, use the URL in the browser's address bar. This will ensure that
  //    * users can use the browser's back and forward buttons to navigate between
  //    * pages, as well as provide a good URL they can bookmark and share.
  //    */
  //   showSearchPage: false
  // }
//  useEffect(()=>{
//       const getData=async()=>{
//         try{
//           const data=await BooksAPI.getAll()
//           console.log(data)
//         }catch(err){
//           console.log(err.message)
//         }
        
//       }
//       getData()
//   }, []) 
  
    return (
         <div className="app"> 
            <BrowserRouter>
              <Routes>
              <Route path="/search" element={<Search/>}></Route>
              <Route path="/" element={<Homepage/>}></Route>
              </Routes>
            </BrowserRouter>
        </div> 
    )
  
}

export default App
