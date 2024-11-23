import React, { useEffect, useId, useRef, useState } from 'react'

export default function App() {

  let [title, setTitle] = useState("")
  let [renderCount, setRenderCount] = useState(0)

  let userObj = {
      id: useId(),
      username: 'Mersad'
  }
  console.log(userObj);
  

  useEffect(() => {
    setRenderCount(prevCount => prevCount + 1); 
  }, [title])
  

  return (
    <div>
      <input type="text" value={title} onChange={e => setTitle(e.target.value)} />
      <h2>Input Value: {title}</h2>
      <h2>Renders Count: {renderCount}</h2>
    </div>
  )
}
