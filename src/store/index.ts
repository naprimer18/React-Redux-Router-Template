import { configureStore } from "@reduxjs/toolkit";
import { autorization } from "./Reducers/autorizationReducer";

export const store: any = configureStore({
  reducer: {
    autorization,
  },
});

export type RootState = ReturnType<typeof store>;
