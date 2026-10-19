import { Link } from "react-router-dom"

function ChatItem({ chat }) {
  const ultimo =
    chat.messages.length === 0
      ? "Sin mensajes"
      : chat.messages[chat.messages.length - 1].text

  return (
    <li className="chat-item">
      <Link to={`/chat/${chat.id}`}>
        <strong>{chat.name}</strong>
        <p>{ultimo}</p>
        {chat.unread > 0 && <span className="badge">{chat.unread}</span>}
      </Link>
    </li>
  )
}

export default ChatItem