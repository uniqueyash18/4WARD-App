import { configureStore } from "@reduxjs/toolkit";
import LoginReducer from "./reducers/LoginReducer";
export const store=configureStore({
    reducer:{
        AppStatus:LoginReducer
    }
})