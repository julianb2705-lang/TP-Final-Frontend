import { useChatContext } from "../context/ChatContext"

function MessageBubble({ message }) {
  const { user } = useChatContext()
  const text = message.text.replaceAll("{nombre}", user?.name ?? "")

  return (
    <li className={message.from === "me" ? "bubble me" : "bubble"}>
      {text}
    </li>
  )
}

export default MessageBubble