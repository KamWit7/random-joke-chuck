const fetchJokeMiddleware = (storeAPI) => (next) => (action) => {
  if (action.type === 'chuckNorris/getJoke') {
    fetch('https://api.chucknorris.io/jokes/random')
      .then((joke) => joke.json())
      .then(({ value }) => {
        console.log('middle')
        storeAPI.dispatch({ type: 'chuckNorris/loadJoke', payload: value })
      })
  }

  return next(action)
}

const logger = ({ getState }) => {
  return (next) => (action) => {
    console.log('will dispatch', action)

    // Call the next dispatch method in the middleware chain.
    const returnValue = next(action)

    console.log('state after dispatch', getState())

    // This will likely be the action itself, unless
    // a middleware further in chain changed it.
    return returnValue
  }
}

export { fetchJokeMiddleware, logger }
