import React from 'react'

const RefChild = React.forwardRef((props,ref) => {
    console.log(props)
    console.log(ref)
    return (
      <>
        <h1>{props.name} {props.age}</h1>
          <input type='text' ref={ref}/>
      </>
    )
  })

export default RefChild