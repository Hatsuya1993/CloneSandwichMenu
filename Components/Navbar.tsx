import React from 'react'

export const Navbar = () => {
  return (
    <div className='p-5 shadow-md md:flex md:justify-between'>
        <div className='bg-white'>
            <button className=''>Gourmet au Catering</button>
        </div>
        <div className='hidden md:block'>
            <ul className='md:flex space-x-9'>
                <li>
                    About
                </li>
                <li>
                    Menu
                </li>
                <li>
                    Contract
                </li>
            </ul>
        </div>
    </div>
  )
}
