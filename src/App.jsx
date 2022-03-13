import React, { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import Box from './components/Box'
import Show from './components/show';

const pops = [{id: 1, name: "A"}, {id: 2, name: "B"}]

function App(){
  const [count, setCount] = useState(100); //state
  const [color, setColor] = useState("green");
  const [myStatus, setStatus] = useState(false);
  const [products, setProducts] = useState([{id: 1, name: "A"}, {id: 2, name: "B"}])

const remove=(id)=>{

const newProduct = products.filter(item => item.id !== id);
setProducts(newProduct)
}


// const changeStatus =()=>{
//   setStatus(!myStatus)
// }

// const changeCount = ()=>{
//   setCount();
//   changgeCount(count+1)
// }

  return <div>
    <Show age={pops} />
    String: <Box color={color} /> <br />
    Boolean: { myStatus ? "Da ket hon" : "Chua ket hon"} <br />
    Number: {count} <br />  <button onClick={()=>setCount(count+1)}>change Count</button>
    <button onClick={()=>setStatus(!myStatus)}>toggled Status</button>

    {myStatus && <div>
    Arr: {products.map(item => <li>{item.name}
        <button onClick={()=>remove(item.id)}>delete</button>
    </li> )}
    
    </div>}
  </div>
}
export default App