import { configureStore } from "@reduxjs/toolkit";
import rootReducer from './catagorySlice';

const appStore = configureStore({
    reducer:{
    category :rootReducer
    }
})
export default appStore;