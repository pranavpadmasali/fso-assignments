import React from 'react'
import Detail from './Detail'
// component that renders all people from the phonebook
const Persons = (props) =>{
    return(
      <div>
        <h2>Numbers</h2>
        <ul>
          {
            props.persons.filter(element => element.name.toLowerCase().includes(props.filterVal.toLowerCase()))
            .map((element)=>
            <Detail key={element.name} name ={element.name} number = {element.number}/>
            )
          }
        </ul>
      </div>
    )
  }

  export default Persons