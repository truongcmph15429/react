import React, { useState } from 'react'
import logo from './logo.svg'
import './App.css'


const ShowInfo = (props) => {
  return <div>Show {props.name}</div>
}

function App(){
  const [count, setCount] = useState(0);
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
      
      String: <div style={{background: color, width: 100, height: 100}}>Content</div> <br />
      Boolean: { myStatus ? "Da ket hon" : "Chua ket hon"} <br />
      Number: {count} <br />  <button onClick={()=>setCount(count+1)}>change Count</button>
      <button onClick={()=>setStatus(!myStatus)}>toggled Status</button>
      {myStatus && <div>
        Arr: {products.map(item => item.name)}
        <button onClick={()=>remove(item.id)}>delete</button>
        </div>}
  </div>
}
export default App