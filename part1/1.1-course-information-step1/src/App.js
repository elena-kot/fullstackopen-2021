import React from 'react'

const Header = (props) => (
  <h1>{props.title}</h1>
);

const Content = (props) => props.data.map(item => (
  <p>{item.part} {item.exercises}</p>
));

const Total = (props) => (
  <p>Number of exercises {props.amount}</p>
);

const App = () => {
  const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14

  return (
    <div>
      <Header title={course} />
      <Content data={[{
        part: part1,
        exercises: exercises1,
      }, {
        part: part2,
        exercises: exercises2,
      }, {
        part: part3,
        exercises: exercises3,
      }]} />
      <Total amount={exercises1 + exercises2 + exercises3} />
    </div>
  )
}

export default App
