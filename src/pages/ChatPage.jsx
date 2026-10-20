import { Link, useParams } from "react-router-dom"
import useChat from "../hooks/useChat"
import Avatar from "../components/Avatar"
import MessageBubble from "../components/MessageBubble"
import MessageForm from "../components/MessageForm"

function ChatPage() {
  const { id } = useParams()
  const { chat, text, setText, handleSubmit } = useChat(Number(id))

  if (!chat) {
    return (
      <main>
        <p>Chat no encontrado.</p>
        <Link to="/">Volver</Link>
      </main>
    )
  }

  return (
    <main>
      <Link to="/">← Volver</Link>
      <header className="chat-header">
        <Avatar name={chat.name} src={chat.avatar} size={56} />
        <div>
          <h1>{chat.name}</h1>
          <p className={chat.online ? "status online" : "status"}>
            {chat.online ? "En línea" : "Desconectado"}
          </p>
        </div>
      </header>
      <ul className="messages">
        {chat.messages.map((m) => (
          <MessageBubble key={m.id} message={m} />
        ))}
      </ul>
      <MessageForm text={text} onChange={setText} onSubmit={handleSubmit} />
    </main>
  )
}

export default ChatPage