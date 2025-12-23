import React from 'react'

const Nav = (props) => {
  return (
    <div className=' bg-transparent backdrop-blur flex items-center justify-between px-20 py-6 text-white'>
       <h2 className='text-2xl font-semibold'>{props.logo}</h2>
       <div className='flex gap-4 text-lg'>
        {props.links.map(function(link){
            return <h4>{link}</h4>
        })}
       </div>
    </div>
  )
}

export default Nav
