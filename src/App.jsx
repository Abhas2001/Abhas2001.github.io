import { useState } from 'react'
import Navigation from './Navigation'





function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div className="w-full max-h-full p-4 bg-[#1D1C1D]">
       <Navigation/>
      

  </div>
    </>
  )
}

export default App
