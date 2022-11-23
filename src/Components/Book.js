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
            
                    // if (val = "currentlyReading") {
                    //   return val = "currentlyReading"
                    // }
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
                              <select  onClick={(e)=>handelSelect(id,e.target.value)}>
                                <option value="move"  disabled>Move to...</option>
                                <option value="currentlyReading">Currently Reading</option>
                                <option value="wantToRead">Want to Read</option>
                                <option value="read">Read</option>
                                <option value="none">None</option>
                              </select>
                            </div>
                          </div>
                          <div className="book-title">{title}</div>
                          <div className="book-authors">{authors}</div>
                        </div>
                      </li>
  )
}

export default Book