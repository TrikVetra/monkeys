import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from './Store'

// Define a type for the slice state
interface TextState {
  loadedText: string,
  userText: string,
  identicText: String
}

// Define the initial state using that type
const initialState: TextState = {
  loadedText: 'qwerty',
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
      
      let counter = 0
      let pointer = state.userText.length
      console.log(pointer)
      console.log(action.payload)
      console.log(action.payload[action.payload.length-1])
      console.log(state.loadedText[pointer-1])
      console.log(state.loadedText.length)
      if(pointer <= state.loadedText.length) {
        if (state.loadedText[pointer-1] === action.payload[action.payload.length-1]){
          state.identicText += action.payload[pointer-1]
        } else state.identicText += "."
      } 
    }
  }
})




export const { changeLoadedText, changeUserText } = counterSlice.actions

// Other code such as selectors can use the imported `RootState` type
//export const changeText = (state: RootState) => state.Text.loadedText

export default counterSlice.reducer