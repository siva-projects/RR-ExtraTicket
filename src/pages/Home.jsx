import React from 'react'
import { useEffect, useState } from 'react'


const Home = () => {
  const [data, setData] = useState(null)

  useEffect(() => {
    fetch(`${import.meta.env.VITE_BACKEND_URL}/data`)
      .then(res => res.json()) // <-- Parse JSON here
      .then(json => {
        setData(json)
        console.log("data", json) // Now logs the actual array
      })
  }, [])
  return (
    <div>
      <h1>Home page</h1>
    </div>
  )
}

export default Home