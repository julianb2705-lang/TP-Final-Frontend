import { createContext, useContext } from "react"
import useLocalStorage from "../hooks/useLocalStorage"
import { initialChats } from "../data/chats"

const ChatContext = createContext(null)

export function ChatProvider({ children }) {
  const [user, setUser] = useLocalStorage("user", null)
  const [chats, setChats] = useLocalStorage("chats-v6", initialChats)

  const login = (name) => setUser({ name })
  const logout = () => setUser(null)

  const sendMessage = (chatId, text) => {
    setChats((prev) =>
      prev.map((chat) =>
        chat.id === chatId
          ? {
              ...chat,
              messages: [...chat.messages, { id: Date.now(), text, from: "me" }],
            }
          : chat
      )
    )
  }

  const markAsRead = (chatId) => {
    setChats((prev) =>
      prev.map((chat) => (chat.id === chatId ? { ...chat, unread: 0 } : chat))
    )
  }

  return (
    <ChatContext.Provider
      value={{ user, chats, login, logout, sendMessage, markAsRead }}
    >
      {children}
    </ChatContext.Provider>
  )
}

export function useChatContext() {
  return useContext(ChatContext)
}