const Course = ({ course }) => {
  return(
    <div>
      <Header course={course} />
      <Content course={course} />
      <Total course={course} />
    </div>
  )
}

const Header = (props) => {
  return(
  <h2>{props.course.name}</h2>
  )
}

const Content = ({ course }) => {
  return(
    <li>
      {course.parts.map((part) => (
        <Part key={part.id} part={part} />
      ))}
    </li>
  )
}

const Part = ({ part }) => {
  return(
    <p>{part.name} {part.exercises} </p>
  ) 
}

const Total = (props) => {
  const total = props.course.parts.reduce((sum, order) => {
    return sum + order.exercises
  }, 0 )
  return(
  <p>
    <b>total of {total} exercises</b>
    </p>
  )
}

export default Course