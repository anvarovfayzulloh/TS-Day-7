import { configureStore } from "@reduxjs/toolkit";
import likeReducer from "../slice/likeSlice";

const store = configureStore({
    reducer: {
        likeds: likeReducer
    }
})
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export {store}