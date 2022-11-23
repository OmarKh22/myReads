import React,{useState,useEffect} from 'react'
import { Link } from 'react-router-dom'
import Shelf from './Shelf'
import * as BooksAPI from '../BooksAPI'


const Homepage = () => {
const [readingsCurr,setReadingsCurr]=useState([])
const [readingsWant,setReadingsWant]=useState([])
const [readingsRead,setReadingsRead]=useState([])
const [count,setcount]=useState(0)

     useEffect(()=>{
      const getData=async()=>{
        try{
          const data=await BooksAPI.getAll()
            // console.log(data)
         setReadingsCurr(data.filter((item)=>{
            if(item.shelf==='currentlyReading'){
                return item;
            }
          }))
           setReadingsWant(data.filter((item)=>{
            if(item.shelf==='wantToRead'){
                return item;
            }
          }))
           setReadingsRead(data.filter((item)=>{
            if(item.shelf==='read'){
                return item;
            }
          }))
        }catch(err){
          console.log(err)
        }
        
      }
      getData()
  }, [count]) 
// console.log(readingsCurr)
  return (
    <div className="list-books">
            <div className="list-books-title">
              <h1>MyReads</h1>
            </div>
            <div className="list-books-content">
              <div>
                <Shelf  name="Currently Reading" shelf="currentlyReading" data={readingsCurr} count={count} setcount={setcount}/>
                <Shelf name="Want to read" shelf="wantToRead" data={readingsWant}count={count} setcount={setcount}/>
                <Shelf name="Read" shelf="read" data={readingsRead}count={count} setcount={setcount}/>
               
              </div>
            </div>
            <div className="open-search">
              {/* <button onClick={() => this.setState({ showSearchPage: true })}>Add a book</button> */}
                <Link to="/search" className="openSearchLink">Add a book</Link>
            </div>
          </div>
  )
}

export default Homepage