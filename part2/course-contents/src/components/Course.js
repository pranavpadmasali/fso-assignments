import React from 'react';
const Course = (props) => {
    console.log('id=', props.course.id)
    console.log('name=', props.course.name)
    console.log('parts=', props.course.parts)
  
    return (
      <div>
        <h1>{props.course.name}</h1>
        <ul>{
          props.course.parts.map((part) => 
            <li key={part.id}>
              {part.name} {part.exercises}
            </li>
          )}
          <li><b>Total of {props.course.parts.reduce((accu,part)=> accu+=part.exercises
            ,0)} exercises</b>
          </li>
        </ul>
      </div>
    )
}
export default Course