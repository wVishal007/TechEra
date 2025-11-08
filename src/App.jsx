import { useState } from 'react'
import './App.css'
import { createBrowserRouter,BrowserRouter,RouterProvider } from 'react-router-dom'
import Home from './pages/Home'

const browserRouter = createBrowserRouter([
  {path:'/',
    element:<Home/>
  },
])

function App() {
  const [count, setCount] = useState(0)

  return (
   <RouterProvider router={browserRouter} />
  )
}

export default App
