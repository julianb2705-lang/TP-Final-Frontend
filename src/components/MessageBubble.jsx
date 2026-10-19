function MessageBubble({ message }) {
  return (
    <li className={message.from === "me" ? "bubble me" : "bubble"}>
      {message.text}
    </li>
  )
}

export default MessageBubble