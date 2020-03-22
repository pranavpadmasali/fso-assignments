import React from 'react';
import ReactDOM from 'react-dom';

const Header = (props) => {

    return (
        <h1>{props.course}</h1>
    )
}

const Part = (props) => {
    console.log(props)
    return (
        <>
            <p>{props.part.name} {props.part.exercise}</p>
        </>
    )
}

const Content = (props) => {
    console.log(props)
    return (
        <div>
            <Part part={props.partExercise[0]} />
            <Part part={props.partExercise[1]} />
            <Part part={props.partExercise[2]} />
        </div>
    )
}

const Total = (props) => {
    console.log(props)
    let total=0
    props.partExercise.forEach(element => {
        total+=element.exercises
    })

    return (
        <>
            <p>Number of exercises {total}</p>
        </>
    )
}



const App = () => {
    const course = {
        name: 'Half Stack application development',
        parts: [
            {
                name: 'Fundamentals of React',
                exercises: 10
            },
            {
                name: 'Using props to pass data',
                exercises: 7
            },
            {
                name: 'State of a component',
                exercises: 14
            }
        ]
    }



    return (
        <div>
            <Header course={course.name} />
            <Content partExercise={course.parts} />
            <Total partExercise={course.parts} />
        </div>
    )
}


ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
