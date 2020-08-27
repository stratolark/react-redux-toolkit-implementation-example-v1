import { createSlice } from '@reduxjs/toolkit';

const fontSizeSlice = createSlice({
  name: 'fontSize',
  initialState: 16,
  reducers: {
    increment: (state) => state + 1, // action type nane "fontSize/increment"
    decrement: (state) => state - 1, // action type nane "fontSize/decrement"
    reset: () => 16, // action type nane "fontSize/reset"
  },
});

export default fontSizeSlice.reducer;
