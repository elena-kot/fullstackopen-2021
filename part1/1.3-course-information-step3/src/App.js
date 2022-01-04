import React from 'react'

const Header = (props) => (
  <h1>{props.title}</h1>
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
  <p>Number of exercises {props.amount}</p>
);

const App = () => {
  const course = 'Half Stack application development'
  const part1 = {
    name: 'Fundamentals of React',
    exercises: 10
  }
  const part2 = {
    name: 'Using props to pass data',
    exercises: 7
  }
  const part3 = {
    name: 'State of a component',
    exercises: 14
  }

  return (
    <div>
      <Header title={course} />
      <Content data={[part1, part2, part3]} />
      <Total amount={part1.exercises1 + part2.exercises2 + part3.exercises3} />
    </div>
  )
}

export default App
