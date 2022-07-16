import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "../features/counter/counterSlice";
import dogSlice from "../features/dog/dogSlice";
export const store = configureStore({
  reducer: {
    counter: counterSlice,
    dog: dogSlice,
  },
});
