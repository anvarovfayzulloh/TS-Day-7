import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { TFetchData } from "../../types";

interface LikeState {
    wishlist: TFetchData[]
}

const initialState: LikeState = {
    wishlist: JSON.parse(localStorage.getItem("wishlist") || "[]")
}

const likeSlice = createSlice({
    name: "like",
    initialState,
    reducers: {
        addLike: (state, action: PayloadAction<TFetchData>) => {
            state.wishlist.push(action.payload);
            localStorage.setItem("wishlist", JSON.stringify(state.wishlist));
        },
        unLike: (state, action: PayloadAction<number>) => {
            state.wishlist = state.wishlist.filter(item => item.id !== action.payload);
            localStorage.setItem("wishlist", JSON.stringify(state.wishlist));
        }
    }
});

export const { addLike, unLike } = likeSlice.actions;
export default likeSlice.reducer;
