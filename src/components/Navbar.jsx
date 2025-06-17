import React from 'react'

const Navbar = () => {
  return (
    <nav className='bg-violet-500 p-4 text-white flex justify-between items-center'>
    <div className="logo h-auto mx-8 ">
       <img src="images/todox-icon.png" alt="logo" className="w-20  " />
    </div>
    <ul className='flex gap-6 mx-8'>
        <li className='cursor-pointer font-semibold hover:font-bold transition-all duration-400  flex justify-center'>Your Tasks</li>
        <li className='cursor-pointer font-semibold hover:font-bold transition-all duration-400 w-[3vw] flex justify-center'>More</li>
    </ul>
    </nav>
  )
}

export default Navbar
