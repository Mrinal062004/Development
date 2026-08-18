import { configureStore } from '@reduxjs/toolkit'
import counterSlice from  '../features/counterSlice.jsx'
// import {Provider} from 'react-redux'


export const store = configureStore({
  reducer: {
    counter: counterSlice
  },
})

export default store

// steps:
// 1) create store
//2) create slice  3) register reducer in store