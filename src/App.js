import React, { useEffect, useState } from 'react'
import SearchComponent from './components/SearchComponent'
import Movies from './components/Movies'

const App = () => {
    const [search,setSearch] = useState('')
    const [loading,setLoading] = useState(false)
    const [movies,setMovies] = useState('')

    useEffect(() => {
        async function fetchData () {
try {
    setLoading(true)
  const res = await fetch(`https://omdbapi.com/?apikey=fc1fef96&s=${search}`)
  const data = await res.json()
  setMovies(data.search)
}
catch (err) {

}
finally {
setLoading(false)
}
        }

        fetchData()

        
    }, {search})

  return (

    <div>
        {search}
        <SearchComponent setSearch={setSearch}/>
        <Movies/>
    </div>
  )
}

export default App