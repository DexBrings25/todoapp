import { useState, useEffect } from 'react'

function Register() {
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
      <h2>Registrierung</h2>
      <p>{message}</p>
    </div>
    </>
  )
}

export default Register