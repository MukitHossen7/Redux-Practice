import { configureStore } from "@reduxjs/toolkit";
import videoReducer from "../features/videos/videosSlice";
import tagReducer from "../features/tags/tagsSlice";
import singleVideoReducer from "../features/singleVideo/singleVideoSlice";
export const store = configureStore({
  reducer: {
    video: videoReducer,
    tag: tagReducer,
    singleVideo: singleVideoReducer,
  },
});
