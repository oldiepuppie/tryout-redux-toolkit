import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  post: {},
  status: "idle", // 'idle' | 'loading' | 'succeeded' | 'failed'
  error: null,
};

export const fetchPostById = createAsyncThunk("get/post", async (id) => {
  try {
    const res = await axios.get(`http://localhost:4000/posts/${id}`);
    return res.data;
  } catch (err) {
    return err.message;
  }
});

const postSlice = createSlice({
  name: "post",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchPostById.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchPostById.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.post = action.payload;
      })
      .addCase(fetchPostById.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export const selectPost = (state) => state.post.post;
export const getPostStatus = (state) => state.post.status;
export const getPostError = (state) => state.post.error;

export default postSlice.reducer;
