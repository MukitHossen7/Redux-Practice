import { configureStore } from "@reduxjs/toolkit";
import videoReducer from "../features/videos/videosSlice";
import tagReducer from "../features/tags/tagsSlice";

export const store = configureStore({
  reducer: {
    video: videoReducer,
    tag: tagReducer,
  },
});
