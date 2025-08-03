import { configureStore } from "@reduxjs/toolkit";
import postSlice from "../features/posts/postsSlice";

const store = configureStore({
    reducer: {
        posts: postSlice
    },
});

export default store;