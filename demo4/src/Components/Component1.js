import React from 'react'

function Component1() {
    const demo={
        color:'white',
        height:'60px',
        width:'130px',
        backgroundColor:'blue',
        fontSize:'25px',
        borderRadius:'4px'
    }
  return (
    <div>
      <h1 style={{color:'red',fontSize:'22px',backgroundColor:'lightblue'}}>This is Introduction to css</h1>
      <button style={demo}>Hello</button>
    </div>
  )
}

export default Component1
