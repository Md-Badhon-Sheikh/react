import "./App.css";
import Todo from "./Todo";
import Actor from "./Actor";
import Singer from "./Singer";


function App() {
  const actor = ['Sakib', 'Soriful Raj', 'Hero Alom', 'Rabbani','Faltu'];

const singers =[
  {id: 1, name: 'Mahfuzur', age: 66},
  {id: 2, name: 'Hero Alom', age: 36},
  {id: 3, name: 'Zayed khan', age: 46},
];

  return (
    <>

   {
    singers.map(singer => <Singer singer = {singer}></Singer>)
   }

  <Actor name={'Zayed khan'}></Actor>
  {
    actor.map(actor => <Actor name = {actor}> </Actor> )
  }



{/*     
      <Todo task="learn React" isDone={true}></Todo>
      <Todo task="Explore Core Concepts" isDone={false}></Todo>
      <Todo task="Try php" isDone={true}></Todo> */}

      {/* <Person></Person>
      <Device name = "Laptop" price = '$50'></Device>
      <Device name = 'Mobile' price = '$15'></Device>
      <Student grade = '8' roll = '15'></Student>
      <Student grade = '9' roll = '01'></Student>
      <Student grade = '6' roll = '08'></Student>
      <Developer></Developer> */}
    </>
  );
}
function Person() {
  const person = { name: "Zayed khan", job: "Actor" };
  const age = 45;
  const money = 30;
  return (
    <h1>
      I am a {person.name} age : {age}. per film amount : {money}
    </h1>
  );
}

function Student({ grade, roll }) {
  // console.log(grade, roll)
  // const clg = 11;
  // const age = 18;
  return (
    <div className="student">
      <h2>Class: {grade}</h2>
      <p>Roll : {roll} </p>
    </div>
  );
}

function Device(props) {
  console.log(props);
  return (
    <h2>
      {" "}
      This is DEvice : {props.name} , price {props.price}{" "}
    </h2>
  );
}

function Developer() {
  const developerStyle = {
    margin: "5px",
    padding: "3px",
    border: "2px solid tomato",
    borderRadius: "8px",
  };
  return (
    <div style={developerStyle}>
      <h5>Devo devo</h5>
      <p>Coding</p>
    </div>
  );
}

export default App;
