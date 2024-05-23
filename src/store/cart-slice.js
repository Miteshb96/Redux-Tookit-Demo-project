import { createSlice } from "@reduxjs/toolkit";

const initialCartState = {
    items: [],
    totalQuantity: 0,
    totalAmount: 0
}

const cartSlice = createSlice({
    name: "cart",
    initialState: initialCartState,
    reducers: {
        addtoCart(state, action) {
            const newItem = action.payload;
            const isItemExist = state.items.find(obj => obj.id === newItem.id);
            if(!isItemExist) {
                state.items.push({
                    id: newItem.id,
                    price: newItem.price,
                    quantity: 1,
                    totalPrice: newItem.price,
                    name: newItem.title
                });
            } else {
                isItemExist.quantity += 1;
                isItemExist.totalPrice += newItem.price;
            }
            state.totalQuantity += 1;
            state.totalAmount += newItem.price;
        },
        removeFromCart(state, action) {
            const id = action.payload;
            const isExistingItem = state.items.find(obj => obj.id === id);
            if(isExistingItem.quantity === 1) {
                state.items = state.items.filter(obj => obj.id !== id)
            } else {
                isExistingItem.quantity -= 1;
                isExistingItem.totalPrice -= isExistingItem.price;
            }
            state.totalQuantity -= 1;
            state.totalAmount -= isExistingItem.price;
        }
    }
});

export const cartActions = cartSlice.actions;

export default cartSlice.reducer;

