import { configureStore } from "@reduxjs/toolkit";
import postSlice from "../features/posts/postsSlice";
import commentsSlice from "../features/comments/commentsSlice";
import photosSlice from "../features/photos/photosSlice"

const store = configureStore({
    reducer: {
        posts: postSlice,
        comments: commentsSlice,
        photos: photosSlice
    },
});

export default store;