import ChatList from "./components/ChatList"
import { initialChats } from "./data/chats"

function App() {
  return (
    <main>
      <h1>Chats</h1>
      <ChatList chats={initialChats} />
    </main>
  )
}

export default App