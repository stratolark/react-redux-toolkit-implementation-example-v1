import { createSlice } from '@reduxjs/toolkit';

const lineHeightSlice = createSlice({
  name: 'lineHeight',
  initialState: 1.6,
  reducers: {
    increment: (state) => (state * 10 + 0.1 * 10) / 10,
    decrement: (state) => (state * 10 - 0.1 * 10) / 10,
    reset: () => 1.6,
  },
});

export default lineHeightSlice.reducer;
