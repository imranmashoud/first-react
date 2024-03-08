import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Todo from "./Todo";
import Actor from "./Actor";
import Singer from "./Singer";

function App() {
  const [count, setCount] = useState(0);
  const actors = ["Sakib", "Soriful Raj", "Jasim", "Razzak"];
  const singers = [
    { name: "Dr. Mahfuzur Rahman", age: 68 },
    { name: "Eva Rahman", age: 38 },
    { name: "Shuvro Dev", age: 58 },
    { name: "Pritom", age: 28 },
  ];

  return (
    <>
      <h1>Vite + React</h1>

      {singers.map((singer) => (
        <Singer singer={singer}></Singer>
      ))}

      <Actor name={"S Khan"}></Actor>
      {actors.map((actor) => (
        <Actor name={actor}></Actor>
      ))}

      {/* <Todo task="Learn React" isDone={true}></Todo>
      <Todo task="Explore Core React" isDone={false}></Todo>
      <Todo task="Try JSX" isDone={true}></Todo> */}
      {/* <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <Person></Person>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <Student grade="7" score="85"></Student>
        <Student grade="10" score="90"></Student>
        <Student></Student>
        <Device name="Laptop" price="5500"></Device>
        <Device name="Mobile" price="3200"></Device>
        <Device name="Smart Watch" price="1500"></Device>
        <Device name="Glass" price="2000"></Device>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div> */}
    </>
  );
}
function Person() {
  const age = 25;
  return <h3 className="test">Wao it's a magic, and it is {age}</h3>;
}
const { grade, score } = { grade: "7", score: "85" };
function Student({ grade = 1, score = 0 }) {
  return (
    <div>
      <h3>This is Student's</h3>
      <p>Class: {grade}</p>
      <p>Score: {score}</p>
    </div>
  );
}
function Device(props) {
  return (
    <h3>
      This device: {props.name} and price is: {props.price}
    </h3>
  );
}
export default App;
