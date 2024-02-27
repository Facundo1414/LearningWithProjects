import { useState } from 'react'
import './App.css'
import SearchBar from './components/searchBar';

const people = [
  {
    id: "p-1",
    title: "Jose"
  },
  {
    id: "p-2",
    title: "Marcos"
  },
  {
    id: "p-3",
    title: "Samuel"
  },
  {
    id: "p-4",
    title: "Pedro"
  }

]

const emails = [
  {
    id: "1",
    title : "email1"
  },
  {
    id: "2",
    title : "email2"
  },
  {
    id: "3",
    title : "email3"
  }
]

function App() {

  const [data,setData] = useState([...people, ...emails]);
  
  const [selection, setSelection] = useState(null);

  const [currentOption, setCurrentOption] = useState("all");


  function handleClick(e) {
    const op = e.target.name

    switch (op) {
      case "all":
          setData([...people, ...emails])
          setCurrentOption("all")
        break;
      case "people":
          setData([...people])
          setCurrentOption("people")
        break;
      case "emails":
          setData([...emails])
          setCurrentOption("emails")
        break;
      default:
        break;
    }

  }

  // al hacer click en el elemento deseado
  function handleItemSelected(item) {
    setSelection(item);
  }

  return (
    <>
      <div>
        <button onClick={handleClick} name='all'>All</button>
        <button onClick={handleClick} name='people'>People</button>
        <button onClick={handleClick} name='emails'>Emails</button>
        {selection? <div>You Selected: {selection.title}</div> : ''}
        <SearchBar items={data} onItemSelected={handleItemSelected}></SearchBar>
      </div>
    </>
  )
}

export default App
