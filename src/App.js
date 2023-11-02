import logo from './logo.svg';
import './App.css';

import Form_task from './Todo/Form_task';



function App() {
   
 const finparent=(p)=>{
    alert('Hello From Parent' +p)
 }

  return (
    <div className="App">
    <Form_task/>

    </div>
  );
}

export default App;
