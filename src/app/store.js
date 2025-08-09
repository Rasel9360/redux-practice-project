import { configureStore } from "@reduxjs/toolkit";
import postSlice from "../features/posts/postsSlice";
import commentsSlice from "../features/comments/commentsSlice";
import photosSlice from "../features/photos/photosSlice"
import productsSlice from "../features/products/productsSlice"

const store = configureStore({
    reducer: {
        posts: postSlice,
        comments: commentsSlice,
        photos: photosSlice,
        products: productsSlice,
    },
});

export default store;