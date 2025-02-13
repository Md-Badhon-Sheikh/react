
import Albums from './Albums';
import './App.css'
import Counter from './Counter';
import Friends from './Friends';
import Posts from './Posts';
import Team from './Team';
import Users from './Users';

function App() {
  function handleClick(){
    alert('button Click');
  }

  const handleClick2 = () => {
    alert('button click 2');
  }

  const addToFive = (num) => {
    alert (num + 5);
  }

  return (
    <>
   
      <h1 className='text-2xl font-bold text-red-500'>Vite + React</h1>

      <div className='border-2 border-pink-900 rounded-xl py-6'>

      <Albums></Albums>
      
      </div>

      <div className='border-2 border-pink-900 rounded-xl py-6'>

      <Posts></Posts>

      </div>

      <div className='border-2 border-pink-900 rounded-xl py-6'>

   

      <Friends></Friends>
      </div>

      <Users></Users>

    <Counter></Counter>

    <Team></Team>

      <button className='btn border-2 p-2 rounded-xl' onClick={handleClick}>Click Me</button>


      <button className='btn border-2 p-2 rounded-xl' onClick={handleClick2}>Click Me 2</button>


      <button className='btn border-2 p-2 rounded-xl' onClick={ () => {alert ('Button Click 3')}}>Click Me 3</button>

      <button className='btn border-2 p-2 rounded-xl' onClick={() => addToFive(3)}>Click Me 4</button>

     
    </>
  )
}

export default App
