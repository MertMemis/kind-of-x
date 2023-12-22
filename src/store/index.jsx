import { configureStore } from "@reduxjs/toolkit";
import auth from "./auth"; 
import modal from "./modal"; 
import display from "./display"; 


const store = configureStore({
    reducer: {
        auth,
        modal,
        display,
    }
})

export default store