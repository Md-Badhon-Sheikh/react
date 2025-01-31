
import './App.css'

function App() {
  function handleClick(){
    alert('Button Click !!!')
  }

  return (
    <>
    
      <h1>React core concept</h1>
     <button onClick={handleClick} >Click Me</button>
    </>
  )
}

export default App
