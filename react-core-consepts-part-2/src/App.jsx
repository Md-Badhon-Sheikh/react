
import './App.css'
import Counter from './Counter';
import Friends from './Friends';
import Team from './Team';
import Users from './Users';

function App() {
  function handleClick(){
    alert('Button Click !!!')
  }

const handleClick2 = () => {
  alert ('Button Click Again !!');
}

const addToFive = (num) => {
  alert(num + 5);
}

  return (
    <>
    
      <h1>React core concept</h1>

      <Friends></Friends>

      <Users></Users>

      <Team></Team>

      <Counter></Counter>


     <button onClick={handleClick} >Click Me</button>
     <button onClick={handleClick2} >Click Me Again</button>

     <button onClick = { () =>{alert('Third Click')} } >Third</button>

     {/* <button onClick={addToFive(3)}>Four</button> */}

    </>
  )
}

export default App
