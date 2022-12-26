// import { createStore } from "redux";
import RootReducer  from "./Reducers/Index2"
// const Store =createStore(RootReducer);
// export default Store;

import { configureStore } from "@reduxjs/toolkit";
const Store=configureStore({
    reducer:{
        RootReducer
    }
});
export default Store;