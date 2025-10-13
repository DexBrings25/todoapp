import { useState, useEffect } from 'react'
import './App.css'

function App() {
  const [message, setMessage] = useState("")
  
  useEffect(() => {
	fetch("http://localhost:8080/api/demo/hello")
	.then(response => response.text())
	.then(data => setMessage(data))
  }, [])

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
