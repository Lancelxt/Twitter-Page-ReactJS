import React from 'react'
import './Search.css'
import search from './Group.svg'



function Search() {
  return (
    <div className='search-box'>
      <div className='search'>
        <img src={search} alt="" srcset="" />
        <input type="search" placeholder='Search Twitter' id="" />
        </div>
    </div>
  )
}

export default Search