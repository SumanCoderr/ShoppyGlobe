import {configureStore} from "@reduxjs/toolkit"
import productReducer from "./cartSlice"

//create Store 
const appStore = configureStore({
    reducer:{
        product: productReducer
    }
})

export default appStore;