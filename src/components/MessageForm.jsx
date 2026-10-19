function MessageForm({ text, onChange, onSubmit }) {
  return (
    <form className="message-form" onSubmit={onSubmit}>
      <input
        aria-label="Escribí un mensaje"
        placeholder="Escribí un mensaje"
        value={text}
        onChange={(e) => onChange(e.target.value)}
      />
      <button type="submit">Enviar</button>
    </form>
  )
}

export default MessageForm