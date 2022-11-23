import React,{useEffect, useState} from 'react'
import {update, get} from '../BooksAPI'
const Book = ({id,img,title,authors,setcount, count}) => {
    const handelSelect=async(id,val)=>{
        if(val!=='move'&& val!=='none'){
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
    const [shelfName, setShelfName]= useState("")

    useEffect(()=>{
      const getData = async()=>{
        
        const data=await get(id)
        console.log(data)
        setShelfName(data.shelf)
        console.log("shelfname", shelfName,id)
      }
      getData()
    },[count, id])
  return (
    <li>
                        <div className="book">
                          <div className="book-top">
                            <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${img})` }}></div>
                            <div className="book-shelf-changer">
                              <select value={shelfName} onChange={(e)=>handelSelect(id,e.target.value)}>
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