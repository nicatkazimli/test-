import React from 'react'

const SearchComponent = ({setSearch}) => {
  return (

    <input onChange={(e)=> setSearch(e.target.value) } className='bg-slate-300 '  />
  )
}

export default SearchComponent