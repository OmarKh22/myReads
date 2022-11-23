
const api = "https://reactnd-books-api.udacity.com"


// Generate a unique token for storing your bookshelf data on the backend server.
let token = localStorage.token
if (!token)
  token = localStorage.token = Math.random().toString(36).substr(-8)

const headers = {
  'Accept': 'application/json',
  'Authorization': token
}

export const get = (bookId) =>{
  return new Promise((resolve, reject)=>{
    
    fetch(`${api}/books/${bookId}`, { headers })
      .then(res => res.json())
      .then(data => resolve(data.book))
      .catch((err)=>{
      reject(err.message)
    })
  })
}
export const getAll = () =>{
  return new Promise((resolve,reject)=>{
 fetch(`${api}/books`, { headers })
    .then(res => res.json())
    .then(data =>resolve(data.books))
    .catch((err)=>{
      reject(err.message)
    })
  })
}

export const update = (id, shelf) =>{
  return new Promise((resolve,reject)=>{
    fetch(`${api}/books/${id}`, {
    method: 'PUT',
    headers: {
      ...headers,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ shelf })
  }).then(res => res.json()) .then(data => resolve(data)).catch((err)=>{
    reject(err.message)
  })
  })
  }

export const search = (query) =>{
  return new Promise((resolve,reject)=>{
    fetch(`${api}/search`, {
    method: 'POST',
    headers: {
      ...headers,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ query })
  }).then(res => res.json())
    .then(data =>resolve(data.books)).catch((err)=>reject(err.message))
  })
  
  
  }
