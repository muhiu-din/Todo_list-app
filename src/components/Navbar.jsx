import { NavLink } from "react-router-dom"


const Navbar = () => {
  const clearLocalStorage = () => {
  localStorage.clear();
  console.log("Local storage cleared.");
};

  return (
    <nav className='bg-violet-700 text-white px-4 py-3 shadow-md flex flex-row  justify-between items-center'>
    <div className="logo h-auto mx-8 ">
       {/* <img src="/todox-icon.png" alt="logo" className="w-20  " /> */}
       <h1 className="text-2xl font-bold font-serif  italic">Todox</h1>
    </div>
    <ul className='flex flex-row items-center gap-6 mx-8 cursor-pointer font-semibold  transition-all duration-400 w-auto  justify-center'>
       <NavLink to="/todox" className={({ isActive }) => (isActive ? "font-bold underline" : "")} >Your Tasks</NavLink>
        <NavLink to="/more" className={({ isActive }) => (isActive ? "font-bold underline" : "")} >More</NavLink>
        <NavLink onClick={() => clearLocalStorage()} to="/Todo_list-app" className={({ isActive }) => (isActive ? "font-bold underline" : "")} ><span className="text-xl">📤</span></NavLink>
    </ul>
    </nav>
  )
}

export default Navbar
