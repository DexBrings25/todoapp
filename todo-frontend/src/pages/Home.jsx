import { useState, useEffect } from 'react'

function Home() {
  const [message, setMessage] = useState("")
  const link = import.meta.env.VITE_TODOAPP_BACKEND_URL
  
  useEffect(() => {
  fetch(link)
  .then(response => response.text())
  .then(data => setMessage(data))
  })

  return (
    <>
      <div>
      <h2>Home</h2>
      <p>{message}</p>
    </div>
    </>
  )
}

export default Home