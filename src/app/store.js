import { configureStore } from '@reduxjs/toolkit'
import themerReducer from '../features/themer/themerSlice'

// Import a slice and assign it to a reducer in the store.

export default configureStore({
  reducer: {
    themer: themerReducer
  },
})