import { createSlice } from '@reduxjs/toolkit'

const jokeSlice = createSlice({
  name: 'chuckNorris',
  initialState: { text: 'hahaha' },
  reducers: {
    getJoke: (state, action) => {
      state.text = 'heheh'
    },
    loadJoke: (state, action) => {
      state.text = action.payload
    },
  },
})

export const choseJoke = (state) => state.joke.text

export const { getJoke } = jokeSlice.actions
export default jokeSlice.reducer
