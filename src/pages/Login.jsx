import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { useChatContext } from "../context/ChatContext"

function Login() {
  const [name, setName] = useState("")
  const { login } = useChatContext()
  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!name.trim()) return
    login(name.trim())
    navigate("/")
  }

  return (
    <main>
      <h1>Iniciar sesión</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Tu nombre</label>
        <input id="name" value={name} onChange={(e) => setName(e.target.value)} />
        <button type="submit">Entrar</button>
      </form>
    </main>
  )
}

export default Login