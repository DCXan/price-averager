import './App.css';
import React, { useState } from 'react'

function App() {

  const [item, setItem] = useState('')
  const [price, setPrice] = useState(0)
  const [message, setMessage] = useState('')

  const handleInput = (e) => {
    setItem({
        ...item,
        [e.target.name]: e.target.value
    })
  }

const search = async () => {

  const response = await fetch(`http://localhost:8000/${item.searchTerm}`, 
  {
      method: 'GET', 
      headers: {
          'Content-Type': 'application/json'
      }
  })

  const result = await response.json()

  if (result.success) {
      setPrice(result.averagePrice)
  } else {
      setMessage('Unable to retrieve prices.')
  }
}

  return (
    <div className='itemSearch'>
            <h2>Price Averager</h2>
            <div className='searchInput'>
                <input type = "text" name="searchTerm" onChange={handleInput} placeholder="Search for an item"/>
                <button onClick={search}>Get Average Price</button>
            </div>
            <h3>Search Term: {item.searchTerm}</h3>
            <h3>Average Price: ${price}</h3>
            <h3>{message}</h3>
        </div>
  );
}

export default App;
