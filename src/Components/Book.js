import React from 'react'
import {update} from '../BooksAPI'
const Book = ({id,img,title,authors,setcount}) => {
    const handelSelect=async(id,val)=>{
        if(val!=='move'){
        try{
            const data=await update(id,val)
            setcount((prev)=>prev+1)
            // console.log('update',data)
            //window.location.reload()
        }catch(err){
            console.log(err)
        } 

        }
        
    }
  return (
    <li>
                        <div className="book">
                          <div className="book-top">
                            <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${img})` }}></div>
                            <div className="book-shelf-changer">
                              <select defaultValue={'move'} onClick={(e)=>handelSelect(id,e.target.value)}>
                                <option value="move"  disabled>Move to...</option>
                                <option value="currentlyReading">Currently Reading</option>
                                <option value="wantToRead">Want to Read</option>
                                <option value="read">Read</option>
                              </select>
                            </div>
                          </div>
                          <div className="book-title">{title}</div>
                          <div className="book-authors">{authors[0]}</div>
                        </div>
                      </li>
  )
}

export default Book