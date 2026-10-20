import { useState } from "react"

function Avatar({ name, src, size = 48 }) {
  const [failed, setFailed] = useState(false)

  if (!src || failed) {
    return (
      <span
        className="avatar avatar-fallback"
        style={{ width: size, height: size }}
        aria-hidden="true"
      >
        {name.charAt(0).toUpperCase()}
      </span>
    )
  }

  return (
    <img
      className="avatar"
      src={src}
      alt=""
      width={size}
      height={size}
      onError={() => setFailed(true)}
    />
  )
}

export default Avatar