import About from "./Components/About/About"
import Experience from "./Components/Experience/Experience"

import Home from "./Components/Home/Home"
import Navbar from "./Components/Navbar/Navbar"



function App() {


  return (
    <div className='bg-[#171d32] h-auto w-full overflow-hidden'>
      <Navbar></Navbar>
      <Home></Home>
      <About></About>
      <Experience></Experience>
    </div>
  )
}

export default App
