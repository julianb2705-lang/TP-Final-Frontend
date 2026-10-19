import { useSearchParams } from "react-router-dom"
import { useChatContext } from "../context/ChatContext"

export default function useSearchChats() {
  const { chats } = useChatContext()
  const [params, setParams] = useSearchParams()
  const query = params.get("q") ?? ""

  const filtered = chats.filter((chat) =>
    chat.name.toLowerCase().includes(query.toLowerCase())
  )

  const setQuery = (value) => setParams(value ? { q: value } : {})

  return { query, setQuery, filtered }
}