import { useEffect, useState } from 'react';
import './App.css'
import Main from './components/Main/Main'
import Navbar from './components/Navbar/Navbar'

function App() {
  
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch("https://estagio.geopostenergy.com/WorldCup/GetAllTeams", {
      headers: {
        "content-Type": "application/json",
        "git-user": "mateuscarvalhodev"
      }
  })
  .then(response => response.json())
  .then(data => {
    setItems(data.Result)
  })

  .catch(() => {
    error => console.log(error);
  })
  }, [])
  return (
   <>
   <ul>
    {items.map(item => {
      return (
        <li key={item.Name}>
          <strong>{item.Name}</strong>
        </li>
      )
    })}
   </ul>
    {/* <Navbar />
    <Main /> */}
   </>
  )
}

export default App
