import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import Show from './components/show'
const shhow=(age)=><h2> tuoi cua ban la: {age}</h2>

const person={
  name:"truong",
  age:20,
  status:false,
  chidren :[
    {id:"1",name:"truongvip"},
    {id:"2",name:"truongvip1"},
  ]
}
ReactDOM.render(<div>
  <p>Ten : {person.name}</p>
  <p>Tuoi : {person.age}</p>
  <p>Tuoi : {person.status ? "da ket hon" :"chua ket hon"} </p>
  <ul>
  {person.chidren.map(e=> <li>
    <p>id : {e.id}</p>
  </li>
   
  )}
  </ul>
 <div> function:  {shhow(person.age)} </div>
 <div>Component: < Show age={person.age} /></div>
    
  
</div>,document.querySelector("#root")

)
