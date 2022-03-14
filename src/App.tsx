import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import ShowInfo from './components/ShowInfo';
import type {Product} from './type/product';
function App() {
  const [count, setCount] = useState(0);
  const [showinfo,setInfo]= useState<Product>({
    name:"truongg",
    age:20,
  })


  return (
    <div className="App">
      <ShowInfo person={showinfo}  />
    </div>
  )
}

export default App
