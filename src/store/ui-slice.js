import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    cartVisible: false
}

const uiSlice = createSlice({
    name: "cart",
    initialState: initialState,
    reducers: {
        toggle(state) {
            state.cartVisible = !state.cartVisible
        }
    }
});

export const uiActions = uiSlice.actions;

export default uiSlice.reducer;