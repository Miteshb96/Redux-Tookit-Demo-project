import { configureStore } from "@reduxjs/toolkit";
import UiReducer from "./ui-slice";
import cartReducer from "./cart-slice";

const store = configureStore({
    reducer: {ui: UiReducer, cart: cartReducer}
});

export default store;