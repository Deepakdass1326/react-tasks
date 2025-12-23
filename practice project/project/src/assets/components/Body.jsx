import React from 'react'

const Body = (props) => {
  return (
    <div className=" min-h-screen w-full bg-cover bg-center" style={{ backgroundImage: `url(${props.bgImg})` }}>
       {props.children} 
       
       <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2'>
        <h1 className='text-white text-6xl font-bold'>Mary Christmas </h1>
       </div>
       
    </div>
  )
}

export default Body
