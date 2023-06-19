import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from './Store'

// Define a type for the slice state
interface TextState {
  loadedText: string,
  userText: string,
  identicText: string,
  counter: number,
  pointer: number,
  autotext: boolean
}

// Define the initial state using that type
const initialState: TextState = {
  loadedText: '',
  userText: '',
  identicText: '',
  counter: 0,
  pointer: 0,
  autotext: false,
}

function delay(ms:number) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

export const counterSlice = createSlice({
  name: 'Text',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    // Use the PayloadAction type to declare the contents of `action.payload`
    changeAutoText: (state, action: PayloadAction<boolean>) => {
      state.autotext = action.payload
    },
    
    changeLoadedText: (state, action: PayloadAction<string>) => {      
      state.loadedText = action.payload
      state.userText = '',

      state.identicText = '.'.repeat(state.loadedText.length),

      state.counter = 0,
      state.pointer = 0
    },
    changeUserText: (state, action: PayloadAction<string>) => {
      if (state.autotext) state.userText += action.payload  
      else state.userText = action.payload
      
      if (state.loadedText.length < 1) {
        alert("Текст не загружен. Прежде чем начать, нажми «Загрузить текст» и напиши там что-нибудь.")
        state.userText = ""
        state.identicText = ""
      } 
      if (state.userText.length > state.loadedText.length) {
        state.counter = Math.floor((state.userText.length - 1) / state.loadedText.length)
      } else {
        state.counter = 0
      }

      state.pointer = state.userText.length - state.loadedText.length * state.counter - 1

      const replaceAt = (str: string, index: number, replacement: string) => {
        return str.substring(0, index) + replacement + str.substring(index + replacement.length);
      }
      let a = state.loadedText[state.pointer].toLowerCase()
      let b = action.payload[action.payload.length - 1].toLowerCase()
        if (
          state.identicText[state.pointer] === "."
          && a === b
        ) {
          state.identicText = replaceAt(state.identicText, state.pointer, state.loadedText[state.pointer])
        }
    }
  }
})

export const { changeLoadedText, changeUserText, changeAutoText } = counterSlice.actions

// Other code such as selectors can use the imported `RootState` type
//export const changeText = (state: RootState) => state.Text.loadedText

export default counterSlice.reducer