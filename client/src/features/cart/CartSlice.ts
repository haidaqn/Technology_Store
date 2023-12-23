import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export const cartSlice = createSlice({
    name: 'cart',
    initialState: {},
    reducers: {},
});

export const cartActions = cartSlice.actions;

const cartReducer = cartSlice.reducer;
export default cartReducer;
