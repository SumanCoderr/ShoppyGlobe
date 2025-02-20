import {configureStore} from "@reduxjs/toolkit"
import productReducer from "./cartSlice"

const appStore = configureStore({
    reducer:{
        product: productReducer
    }
})

export default appStore;