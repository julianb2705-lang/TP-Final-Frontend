import ChatList from "../components/ChatList"
import { useChatContext } from "../context/ChatContext"
import useSearchChats from "../hooks/useSearchChats"

function Home() {
  const { user, logout } = useChatContext()
  const { query, setQuery, filtered } = useSearchChats()

  return (
    <main>
      <h1>Chats</h1>
      <p>Hola, {user.name}</p>
      <button onClick={logout}>Salir</button>

      <label htmlFor="search">Buscar chat</label>
      <input
        id="search"
        type="search"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />

      <ChatList chats={filtered} />
    </main>
  )
}

export default Home