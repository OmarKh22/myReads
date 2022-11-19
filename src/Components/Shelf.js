import React from 'react'
import Book from './Book'

const Shelf = ({name,data,setcount}) => {

  return (
    <div className="bookshelf">
                  <h2 className="bookshelf-title">{name}</h2>
                  <div className="bookshelf-books">
                    <ol className="books-grid">
                      {data.map((item)=>{
                            return <Book setcount={setcount} key={item.id} id={item.id} img={item.imageLinks.thumbnail} title={item.title} authors={item.authors}/> 
                      })}
                      
                    </ol>
                  </div>
                </div>
  )
}

export default Shelf