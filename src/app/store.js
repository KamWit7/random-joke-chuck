import { configureStore } from '@reduxjs/toolkit'
import jokeReducer from '../features/joke/jokeSlice'
import {
  fetchJokeMiddleware,
  logger,
} from '../features/joke/fetchJokeMiddelware'

// no ->  applyMiddleware

export const store = configureStore({
  reducer: {
    joke: jokeReducer,
  },
  middleware: [fetchJokeMiddleware, logger],
})
