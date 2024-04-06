import React, { useRef } from 'react'
import RefChild from './RefChild'

const RefParent = () => {
    let InputRef = useRef()
   let handleSubmit =(e)=>{
    e.preventDefault()
    InputRef.current.focus()
   }
  return (
    <form onSubmit={handleSubmit}>
        <RefChild name="Rahul" age={23} ref={InputRef}/>
        <button>Click To Focus</button>
    </form>
  )
}

export default RefParent