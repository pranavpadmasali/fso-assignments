import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Button = ({handleClick,name}) => <button onClick = {handleClick}>{name}</button>


const App = (props) => {
  //Random anecdote generator
  const [selected, setSelected] = useState(Math.floor(Math.random() * props.anecdotes.length))
  const setRandomValue = () => {
    setSelected(Math.floor(Math.random() * props.anecdotes.length))
  }

  //Vote calculation
  let votesmap={}
  
  props.anecdotes.forEach((element, i ) => {
    votesmap[i]= 0
  });
  const [votes, setVotes] = useState(votesmap)

  const handleSetVotes = () => {
    const copy = { ...votes }
    copy[selected]+=1
    setVotes(copy)
  }

//max index on vote
  const highestVotesIndex = () =>{
    let max=0,index=0;
    for (const property in votes) {
      if (max<votes[property]){
        max=votes[property]
        index = property
      }
    }
    return index
  }
  
  console.debug(selected)
  return (
    <div>
      <h1>anecdote of the day</h1>
      <p>{props.anecdotes[selected]}</p>
      <div>
        <Button handleClick ={setRandomValue} name = {"next anecdote"}/>
        <Button handleClick ={handleSetVotes} name = {"vote"}/>
      </div>
      <h1>anecdote with the highest vote</h1>
      <p>{props.anecdotes[highestVotesIndex()]}</p>
    </div>
  )
}


const anecdotes = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]

ReactDOM.render(
  <App anecdotes={anecdotes} />,
  document.getElementById('root')
)