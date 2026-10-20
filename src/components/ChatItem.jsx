import { Link } from "react-router-dom"
import Avatar from "./Avatar"

function ChatItem({ chat }) {
  const ultimo =
    chat.messages.length === 0
      ? "Sin mensajes"
      : chat.messages[chat.messages.length - 1].text

  return (
    <li className="chat-item">
      <Link to={`/chat/${chat.id}`}>
        <div className="chat-row">
          <Avatar name={chat.name} src={chat.avatar} />
          <div className="chat-info">
            <strong>{chat.name}</strong>
            <p>{ultimo}</p>
          </div>
          {chat.unread > 0 && <span className="badge">{chat.unread}</span>}
        </div>
      </Link>
    </li>
  )
}

export default ChatItem