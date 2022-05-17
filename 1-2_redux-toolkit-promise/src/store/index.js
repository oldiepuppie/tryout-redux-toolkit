import { configureStore } from "@reduxjs/toolkit";
import postsReducer from "../features/posts/postsSlice";
import postReducer from "../features/posts/postSlice";

const store = configureStore({
  reducer: {
    posts: postsReducer,
    post: postReducer,
  },
});

export default store;
