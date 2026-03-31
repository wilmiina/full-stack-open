import { useState } from 'react'

const App = () => {
  const [persons, setPersons] = useState([ 
    {name: 'Arto Hellas', number: '040-1231244' }
  ]) 
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')

  const addName = (event) => {
    event.preventDefault()
    const nameObject = {
      name: newName,
      number: newNumber,
      id: String(persons.length + 1),
    }
    if (persons.find(person => person.name === newName)) {
    alert(`${newName} is already added to phonebook`)
    }
    if (persons.find(person => person.number === newNumber)) {
    alert(`${newNumber} is already added to phonebook`)
    }
    else {
      setPersons(persons.concat(nameObject))
      setNewName('')
      setNewNumber('')
    }
}

  const handleNewName = (event) => {
    console.log(event.target.value)
    setNewName(event.target.value)
  }

  const handleNewNumber = (event) => {
    console.log(event.target.value)
    setNewNumber(event.target.value)
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addName}>
        <div>name: <input value={newName} onChange={handleNewName} /></div>
        <div>number: <input value={newNumber} onChange={handleNewNumber} /></div>
        <div><button type="submit">add</button></div>
      </form>
      <h2>Numbers</h2>
        {persons.map(person =>
          <li key={person.name}> {person.name} {person.number} </li>
        )}
    </div>
  )

}

export default App