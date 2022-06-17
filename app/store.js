import { applyMiddleware, configureStore } from "@reduxjs/toolkit";
import thunk from "redux-thunk";
import postReducer from "../features/posts/postSlice";
export const store= configureStore({
    reducer:{
        post: postReducer
    }
},applyMiddleware(thunk)); 