import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  posts: [
    {
      id: 100,
      username: "tester",
      title: "test",
      content: "testing",
    },
  ],
  status: "idle", // 'idle' | 'loading' | 'succeeded' | 'failed'
  error: null,
};

export const fetchPosts = createAsyncThunk("get/posts", async () => {
  try {
    const res = await axios.get("http://localhost:4000/posts");
    return res.data;
  } catch (err) {
    return err.message;
  }
});

export const fetchPostById = createAsyncThunk("get/post", async (id) => {
  try {
    const res = await axios.get(`http://localhost:4000/posts/${id}`);
    return [...res.data];
  } catch (err) {
    return err.message;
  }
});

const postsSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchPosts.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchPosts.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.posts = [...state.posts, ...action.payload];
      })
      .addCase(fetchPosts.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export const selectAllPosts = (state) => state.posts.posts;
export const getPostsStatus = (state) => state.posts.status;
export const getPostsError = (state) => state.posts.error;

export const { postAdded } = postsSlice.actions;
export default postsSlice.reducer;
