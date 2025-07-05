import { NavLink } from "react-router-dom"


const Navbar = () => {
  return (
    <nav className='bg-violet-500 p-4 text-white flex justify-between items-center'>
    <div className="logo h-auto mx-8 ">
       <img src="images/todox-icon.png" alt="logo" className="w-20  " />
    </div>
    <ul className='flex gap-6 mx-8 cursor-pointer font-semibold  transition-all duration-400 w-auto  justify-center'>
       <NavLink to="/" className={({ isActive }) => (isActive ? "font-bold underline" : "")} >Your Tasks</NavLink>
        <NavLink to="/more" className={({ isActive }) => (isActive ? "font-bold underline" : "")} >More</NavLink>
    </ul>
    </nav>
  )
}

export default Navbar
