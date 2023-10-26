import logo from './logo.svg';
import './App.css';
import React,{useState} from 'react';
import Component1 from './Components/Component1';
import Component2 from './Components/Component2';

function App() {
  const [data,setData]=useState('');
  const [name,setName]=useState('');
  const [password,setPassword]=useState('');
  const [myvalue,setMyValue]=useState({name:''});
  function myclick()
  {
    setData("Hello");
  }

  function mysubmit(e)
  {
    let mydata={
      username:name
    }
    if(password.length>0&&name.length>0)
    {
    alert(JSON.stringify(mydata));
    setMyValue({...myvalue,name:name});
    }
    else{
      alert("Please Enter the Password");
    }
    e.preventDefault();
  }

  return (
    <div className="App">
      <button onClick={myclick}>Click</button>
      <h3>{data}</h3>
      <form onSubmit={mysubmit}>
        <input type='text' placeholder='Enter the name' value={name} onChange={(e)=>setName(e.target.value)}></input><br></br>
        <input type='password' placeholder='Enter the password'value={password} onChange={(e)=>setPassword(e.target.value)}></input><br />
        <button type='submit'>Submit</button>
      </form>
      {
        myvalue.name.length>0?<h3>{myvalue.name}</h3>:<h3>Enter the name</h3>
      }
      <Component1 />
      <Component2 />
    </div>
  );
}

export default App;
