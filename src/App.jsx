import Navbar from './components/Navbar'
import YourTodox from './components/YourTodox'
import More from './components/more'
import './App.css'
import { createBrowserRouter , RouterProvider } from 'react-router-dom';
function App() {
  const router = createBrowserRouter([
    {
      path: "/",
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
