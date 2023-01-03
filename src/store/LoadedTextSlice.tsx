import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from './Store'

// Define a type for the slice state
interface LoadedTextState {
  value: string
}

// Define the initial state using that type
const initialState: LoadedTextState = {
  value: ""
}

export const counterSlice = createSlice({
  name: 'LoadedText',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    // Use the PayloadAction type to declare the contents of `action.payload`
    changeValue: (state, action: PayloadAction<string>) => {
      state.value = action.payload
    }
  }
})

export const { changeValue } = counterSlice.actions

// Other code such as selectors can use the imported `RootState` type
export const changeText = (state: RootState) => state.LoadedText.value

export default counterSlice.reducer