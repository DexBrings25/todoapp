import { useState, useEffect } from 'react'
import './App.css'

function App() {
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
	  	<h1>React ToDo-App</h1>
		<p>{message}</p>
	  </div>
    </>
  )
}

export default App
