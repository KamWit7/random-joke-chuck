import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { getJoke } from './jokeSlice'
import { choseJoke } from './jokeSlice'

const Joke = () => {
  const dispatch = useDispatch()
  const joke = useSelector(choseJoke)

//   console.log('joke', joke)

  return (
    <>
      <p>{joke}</p>
      <button onClick={() => dispatch(getJoke())}> Get joke </button>
    </>
  )
}

export default Joke
