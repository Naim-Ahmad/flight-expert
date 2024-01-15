import { useState } from "react"

export default function useToggle(initialValue) {
  const [toggle, setToggle] = useState(initialValue || false)

  const handleToggle = ()=> {
    setToggle(!toggle)
  }

  return [toggle, handleToggle]
}