import { useState } from 'react'

const Persons = ({ filteredPerson}) => {
  return (
    <div>
      {filteredPerson.map(person =>
        <li key={person.name}> {person.name} {person.number} </li>
      )}
    </div>
  )
}

const PersonForm = ({ addName, newName, handleNewName, newNumber, handleNewNumber}) => {
  return (
  <form onSubmit={addName}>
    <div>name: <input value={newName} onChange={handleNewName} /></div>
    <div>number: <input value={newNumber} onChange={handleNewNumber} /></div>
    <div><button type="submit">add</button></div>
  </form>
  )
}

const Filter = ({ searchName, handleSearchName }) => {
  return (
    <div>filter shown with: <input value={searchName} onChange={handleSearchName} /></div>
  )
}

const App = () => {
  const [persons, setPersons] = useState([ 
    { name: 'Arto Hellas', number: '040-123456' },
    { name: 'Ada Lovelace', number: '39-44-5323523' },
    { name: 'Dan Abramov', number: '12-43-234345' },
    { name: 'Mary Poppendieck', number: '39-23-6423122' }  ]) 
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [searchName, setSearchName] = useState('')
  const [filteredPerson, setFilteredPerson] = useState(persons)

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
      setFilteredPerson(filteredPerson.concat(nameObject))
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

  const handleSearchName = (event) => {
    console.log(event.target.value)
    setSearchName(event.target.value)

    const filterName = persons.filter((person) => person.name.toLowerCase().includes(event.target.value.toLowerCase()))
    setFilteredPerson(filterName)
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter searchName={searchName} handleSearchName={handleSearchName} />
      <h2>add a new</h2>
      <PersonForm addName={addName} newName={newName} handleNewName={handleNewName} newNumber={newNumber} handleNewNumber={handleNewNumber} />
      <h2>Numbers</h2>
      <Persons filteredPerson={filteredPerson} />
    </div>
  )
}

export default App