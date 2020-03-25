import React, { useState } from 'react'
import Filter from './components/Filter'
import Persons from './components/Persons'
import PersonForm from './components/PersonForm'




const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456' },
    { name: 'Ada Lovelace', number: '39-44-5323523' },
    { name: 'Dan Abramov', number: '12-43-234345' },
    { name: 'Mary Poppendieck', number: '39-23-6423122' }
  ])
  const [ newName, setNewName ] = useState('')
  const [ newNumber, setNewNumber ] = useState('')
  const [ filterVal, setFilterVal ] = useState('')


  const handleSubmit = (event) => {
    event.preventDefault()
    console.log("setting newName in person", newName)
    const isEqualName = (element) => element.name === newName;

    
    if (persons.findIndex(isEqualName) === -1) {
      let person = { name: newName,number: newNumber }
      setPersons(persons.concat(person))
    }
    else{
      let tmpString = `${newName} is already added to the phonebook`
      window.alert(tmpString);
    }
  } 

  const handleNewName = (event) =>{
    console.log(event.target.value)
    setNewName(event.target.value)
  } 
  const handleNewNumber = (event) =>{
    console.log(event.target.value)
    setNewNumber(event.target.value)
  } 
  const handleFilter = (event) =>{
    console.log(event.target.value)
    setFilterVal(event.target.value)
  } 


  return (
    <div>
      <h2>Phonebook</h2>
      <Filter filterVal={filterVal} handleFilter={handleFilter}/>
      <PersonForm newName={newName} newNumber={newNumber} handleNewName={handleNewName} handleNewNumber={handleNewNumber} handleSubmit={handleSubmit}/>
      <Persons persons={persons} filterVal={filterVal}/>
    </div>
  )
}

export default App
