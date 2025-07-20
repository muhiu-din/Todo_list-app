import Navbar from './components/Navbar'
import YourTodox from './components/YourTodox'
import More from './components/more'
import Login from './components/Login'
import './App.css'
import Signup from './components/Signup'
import { createBrowserRouter , RouterProvider } from 'react-router-dom';
function App() {
  const router = createBrowserRouter([
    {
       path: "/Todo_list-app",
      element:<Login/>
    },
    {
       path: "/signup",
      element:<Signup/>
    },
    {
      path: "/todox",
      element:<><Navbar/><YourTodox/></>,
    },
    {
      path: "/more",
      element: <><Navbar/><More/></>
    }
  ])
  

  return (
    <>
    <RouterProvider router={router} />
    </>
  )
}

export default App
