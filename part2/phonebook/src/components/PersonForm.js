import React from 'react'
//the form for adding new people into the phonebook
const PersonForm = ({newName,newNumber,handleNewName,handleNewNumber,handleSubmit}) => {
    return (
      <div>
        <h2>Add a new</h2>
        <form onSubmit = {handleSubmit}>
          <div>
            name: <input value={newName} onChange={handleNewName}/>
          </div>
          <div>
            Number: <input value={newNumber} onChange={handleNewNumber}/>
          </div>
          <div>
            <button type="submit">add</button>
          </div>
        </form>
      </div>
    )
  }

  export default PersonForm