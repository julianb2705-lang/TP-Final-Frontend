import { useState, useEffect } from "react"
import { useChatContext } from "../context/ChatContext"

export default function useChat(chatId) {
  const { chats, sendMessage, markAsRead } = useChatContext()
  const [text, setText] = useState("")
  const chat = chats.find((c) => c.id === chatId)

  useEffect(() => {
    if (chat && chat.unread > 0) markAsRead(chat.id)
  }, [chat, markAsRead])

  const handleSubmit = (e) => {
    e.preventDefault()
    const clean = text.trim()
    if (!clean) return
    sendMessage(chatId, clean)
    setText("")
  }

  return { chat, text, setText, handleSubmit }
}