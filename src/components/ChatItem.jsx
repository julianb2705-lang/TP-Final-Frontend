function ChatItem({ chat }) {
  const ultimo =
    chat.messages.length === 0
      ? "Sin mensajes"
      : chat.messages[chat.messages.length - 1].text

  return (
    <li className="chat-item">
      <strong>{chat.name}</strong>
      <p>{ultimo}</p>
      {chat.unread > 0 && <span className="badge">{chat.unread}</span>}
    </li>
  )
}

export default ChatItem