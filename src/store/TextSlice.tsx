import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from './Store'

// Define a type for the slice state
interface TextState {
  loadedText: string,
  userText: string,
  identicText: string,
  counter: number,
  pointer: number
}

// Define the initial state using that type
const initialState: TextState = {
  loadedText: 'qwerty',
  userText: '',
  identicText: '',
  counter: 0,
  pointer: 0
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

      //let counter
      if (state.userText.length > state.loadedText.length) {
        state.counter = Math.floor((state.userText.length - 1) / state.loadedText.length)
      } else {
        state.counter = 0
      }

      state.pointer = state.userText.length - state.loadedText.length * state.counter - 1

      console.log(state.pointer + 1)
      console.log("action.payload: " + action.payload)
      console.log("last letter: " + action.payload[action.payload.length - 1])
      console.log("letter place: " + state.loadedText[state.pointer])
      console.log("loaded text length: " + state.loadedText.length)
      console.log("counter: " + state.counter)
      console.log("----------------------------------------------------")

      const replaceAt = (str: string, index: number, replacement: string) => {
        return str.substring(0, index) + replacement + str.substring(index + replacement.length);
      }
      
      if (state.counter === 0) {
        if (state.loadedText[state.pointer] === action.payload[action.payload.length - 1]) {
          state.identicText += action.payload[state.pointer]
        } else state.identicText += "."
      } else {
        if (
          state.identicText[state.pointer] === "."
          && state.loadedText[state.pointer] === action.payload[action.payload.length - 1]
        ) {
          state.identicText = replaceAt(state.identicText, state.pointer, state.loadedText[state.pointer])
        }
      }


    }
  }
})




export const { changeLoadedText, changeUserText } = counterSlice.actions

// Other code such as selectors can use the imported `RootState` type
//export const changeText = (state: RootState) => state.Text.loadedText

export default counterSlice.reducer