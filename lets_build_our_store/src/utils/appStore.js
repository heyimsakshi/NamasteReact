import {configureStore} from "@reduxjs/toolkit"

import cartReducer from "./cartSlice"
// inside curly braces we add our slices 

const appStore= configureStore({
    reducer:{
        cart:cartReducer
    }
});

export default appStore;