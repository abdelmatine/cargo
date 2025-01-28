import React from 'react'

function Logo() {
  return (
<div className='items-center justify-center p-4'>
  <div className="flex items-center"> 
    <img
      src="logo.svg"
      width={50}
      height={50}
      alt="Main Logo"
      //className="mr-4"
    />
    &emsp;<h1 className="text-4xl font-bold text-center text-gray-500">VehiCOOL</h1>
  </div>
</div>
  )
}

export default Logo
