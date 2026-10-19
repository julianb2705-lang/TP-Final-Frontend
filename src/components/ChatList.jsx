import ChatItem from "./ChatItem"

function ChatList({ chats }) {
  return (
    <ul className="chat-list">
      {chats.map(chat => (
        <ChatItem key={chat.id} chat={chat} />
      ))}
    </ul>
  )
}

export default ChatList