import React from 'react'

function SideNav() {
  return (
    <div className='h-full scrollable-content'>
        <ul className='flex flex-col px-4 py-6'>
          <li className='py-2 px-4 hover:bg-gray-100'>
            <a href='#'>Home</a>
          </li>
          <li className='py-2 px-4 hover:bg-gray-100'>
            <a href='#'>About</a>
          </li>
          <li className='py-2 px-4 hover:bg-gray-100'>
            <a href='#'>Services</a>
          </li>
          <li className='py-2 px-4 hover:bg-gray-100'>
            <a href='#'>Contact</a>
          </li>
        </ul>
  
    </div>
  )
}

export default SideNav