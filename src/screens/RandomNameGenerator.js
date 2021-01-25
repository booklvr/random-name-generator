import React, { Fragment, useState } from 'react'

const RandomNameGenerator = () => {
  const [name, setName] = useState('')
  const [names, setNames] = useState([])
  const [randomIndex, setRandomIndex] = useState('')

  const submitHandler = (e) => {
    e.preventDefault()
    setNames(() => [...names, name])
    setName('')
  }

  const getRandom = () => {
    setRandomIndex(Math.floor(Math.random() * names.length))
  }

  // useState(() => {}, [randomIndex])

  const activeStyle = {
    backgroundColor: 'red',
    color: 'white',
  }

  const normalStyle = {
    backgroundColor: 'white',
    color: 'black',
  }

  return (
    <Fragment>
      <h1>Lets get some random names.</h1>
      <form onSubmit={(e) => submitHandler(e)}>
        <label htmlFor='name'>Enter a name to add to the list</label>
        <input
          type='text'
          id='name'
          placeholder='name'
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </form>

      {names.length > 0 && (
        <ul>
          {names.map((name, index) => (
            <li
              style={index === randomIndex ? activeStyle : normalStyle}
              key={index}
            >
              {name}
            </li>
          ))}
        </ul>
      )}

      <button onClick={getRandom}>Pick a Student</button>
    </Fragment>
  )
}

export default RandomNameGenerator
