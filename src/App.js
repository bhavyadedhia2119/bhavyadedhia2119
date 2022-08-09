import logo from './logo.svg';
import './App.css';
import FunctionalComp from './Components/FunctionalComp';
import {ClassComp,ClassComp1} from './Components/Class';
import Click from './Components/Click';
import Counter from './Components/Counter';
import ParentComp from './Components/ParentComp';

function App() {
  return (
    <div>
    <h1>Hello World</h1>
    <FunctionalComp></FunctionalComp>
    <ClassComp></ClassComp>
    <ClassComp1/>
    <Click></Click>
    <Counter></Counter>
    <ParentComp></ParentComp>
    </div>
  );
}

export default App;
