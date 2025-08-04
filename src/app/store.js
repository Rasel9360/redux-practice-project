import { configureStore } from "@reduxjs/toolkit";
import postSlice from "../features/posts/postsSlice";
import commentsSlice from "../features/comments/commentsSlice";

const store = configureStore({
    reducer: {
        posts: postSlice,
        comments: commentsSlice
    },
});

export default store;