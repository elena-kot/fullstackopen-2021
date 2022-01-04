import React from 'react'

const Header = (props) => (
  <h1>{props.course}</h1>
);

const Part = (props) => (
  <p>{props.part} {props.exercises}</p>
);

const Content = (props) => (
    <div>
      <Part part={props.data[0].part} exercises={props.data[0].exercises} />
      <Part part={props.data[1].part} exercises={props.data[1].exercises} />
      <Part part={props.data[2].part} exercises={props.data[2].exercises} />
    </div>
  );

const Total = (props) => (
  <p>Number of exercises {props.parts.reduce((acc, item) => acc + item, 0)}</p>
);

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
      <Content parts={course.parts} />
      <Total parts={course.parts} />
    </div>
  )
}

export default App
