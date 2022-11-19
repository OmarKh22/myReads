import React,{useState} from 'react'
import { Link } from 'react-router-dom'
import {search} from '../BooksAPI'
import Book from './Book'
const Search = () => {
    const [searchdata,setSearchData]=useState([])
  return (
    <div className="search-books">
            <div className="search-books-bar">
                <Link to="/" className="close-search">Close</Link>
              <div className="search-books-input-wrapper">
                {/*
                  NOTES: The search from BooksAPI is limited to a particular set of search terms.
                  You can find these search terms here:
                  https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md

                  However, remember that the BooksAPI.search method DOES search by title or author. So, don't worry if
                  you don't find a specific author or title. Every search is limited by search terms.
                */}
                <input type="text" onChange={async(e)=>{
                   const data=await search(e.target.value)
                   if(!Array.isArray(data)){
                    setSearchData([])
                   }else{
                    console.log(data)
                   setSearchData(data)
                   }
                  
                }} placeholder="Search by title or author"/>

              </div>
            </div>
            <div className="search-books-results">
              <ol className="books-grid">
                {searchdata.length>0&&searchdata.map((item)=>{
                    if(item.authors&&item.imageLinks&&item.imageLinks.thumbnail){
                    return <Book id={item.id} img={item.imageLinks.thumbnail} title={item.title} authors={item.authors}/>
                    }
                })}
                {searchdata.length===0&&
                    <li >
                        there is no data
                    </li>
                }
              </ol>
            </div>
          </div>
  )
}

export default Search