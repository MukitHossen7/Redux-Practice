import type { Middleware } from "@reduxjs/toolkit";

export const logger: Middleware = (state) => (next) => (action) => {
  console.log(state.getState());
  console.log(action);
  return next(action);
};
