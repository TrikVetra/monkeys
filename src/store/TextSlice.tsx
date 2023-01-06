import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from './Store'

// Define a type for the slice state
interface TextState {
  loadedText: string,
  userText: string,
  identicText: string
}

// Define the initial state using that type
const initialState: TextState = {
  loadedText: '',
  userText: '',
  identicText: ''
}

export const counterSlice = createSlice({
  name: 'Text',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    // Use the PayloadAction type to declare the contents of `action.payload`
    changeLoadedText: (state, action: PayloadAction<string>) => {
      state.loadedText = action.payload
    },
    changeUserText: (state, action: PayloadAction<string>) => {
      state.userText = action.payload
    }
  }
})

export const { changeLoadedText, changeUserText } = counterSlice.actions

// Other code such as selectors can use the imported `RootState` type
//export const changeText = (state: RootState) => state.Text.loadedText

export default counterSlice.reducer