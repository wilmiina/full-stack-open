const Course = ({ courses }) => {
  return(
    <div>
      <h1>Web development curriculum</h1>
      <Header courses={courses} />
      <Content courses={courses} />
      <Total courses={courses} />
    </div>
  )
}

const Header = ({ course }) => {
  return(
  <div>
        <h2>{course.name}</h2>
  </div>
  )
}


const Content = ({courses}) => {
  return(
    <li>
     {courses.parts.map((part) => (
        <Part key={part.id} part={part} />
      ))}
    </li>
  )
}

const Part = ({ part }) => {
  return(
    <p>{part.name} {part.exercises}</p>
  ) 
}

const Total = (props) => {
  const total = props.courses.parts.reduce((sum, order) => {
    return sum + order.exercises
  }, 0 )
  return(
  <p>
    <b>total of {total} exercises</b>
    </p>
  )
}

export default Course