

import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  products: []
}

export const cartSlice = createSlice({
  name: 'favorits',
  initialState,
  reducers: {
    addToFavorits: (state, action) => {
      const item = state.products.find(item => item.id === action.payload.id)

      if(item) {
        item.quantity+= action.payload.quantity
      }
      else {
        state.products.push(action.payload)
      }
      //state.value += 1
    },
    removeItem: (state, action) => {
        state.products=state.products.filter(item => item.id !== action.payload)
      //state.value -= 1
    },
    resetFavorits: (state, action) => {

        state.products = []
      //state.value += action.payload
    },
  },
})

// Action creators are generated for each case reducer function
export const { addToFavorits, removeItem, resetFavorits} = cartSlice.actions

export default cartSlice.reducer