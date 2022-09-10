import { configureStore } from '@reduxjs/toolkit';
// name importing cartSlice.reducer as cartReducer 
import cartReducer from './features/cart/cartSlice';

export const store = configureStore({
    reducer: {
        // naming cartReducer as cart
        cart: cartReducer
    }
});
