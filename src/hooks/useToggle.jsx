import { useState } from "react"

export default function useToggle(initialValue) {
  const [toggle, setToggle] = useState(initialValue || false)

  const handleToggle = (func)=> {
    // console.log('first' , func)
    if(typeof func !== 'function'){
      setToggle(!toggle)
    }else{
      setToggle(func)
    }
  }

  return [toggle, handleToggle]
}