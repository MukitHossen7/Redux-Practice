import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getSingleVideo } from "./singleVideoApi";

const initialState = {
  video: {},
  isLoading: false,
  isError: false,
  error: "",
};

export const fetchSingleVideo = createAsyncThunk(
  "video/fetchSingleVideo",
  async (id) => {
    const video = await getSingleVideo(id);
    return video;
  }
);
export const SingleVideoSlice = createSlice({
  name: "singleVideo",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchSingleVideo.pending, (state) => {
        state.isError = false;
        state.isLoading = true;
      })
      .addCase(fetchSingleVideo.fulfilled, (state, action) => {
        state.isLoading = false;
        state.video = action.payload;
      })
      .addCase(fetchSingleVideo.rejected, (state, action) => {
        state.isLoading = false;
        state.video = {};
        state.isError = true;
        state.error = action.error?.message;
      });
  },
});

export default SingleVideoSlice.reducer;
