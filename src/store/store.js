import { configureStore, createSlice } from '@reduxjs/toolkit'

// Define the initial state
const initialState = {
  showToast: false,
  message: '',
}

// Create a slice with reducer and actions
const toastSlice = createSlice({
  name: 'toast',
  initialState,
  reducers: {
    showToast: (state, action) => {
      state.showToast = true
      state.message = action.payload
    },
    hideToast: (state) => {
      state.showToast = false
      state.message = ''
    },
  },
})

// Extract the reducer and actions
const { reducer, actions } = toastSlice
export const { showToast, hideToast } = actions

// Create the store
const store = configureStore({
  reducer: {
    toast: reducer,
  },
})

export default store
