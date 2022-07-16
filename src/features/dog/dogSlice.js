import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import dogService from "../../services/fetchDogs";
const initialState = {
  isLoading: false,
  isSuccess: false,
  isError: false,
  imageUrl: "",
  errorMessage: "",
};

export const fetchDogsData = createAsyncThunk(
  "dogs/images",
  async (_, thunkAPI) => {
    try {
      return await dogService.fetchImages();
    } catch (error) {
      const errorMessage = "Could not fetch images";
      return thunkAPI.rejectWithValue(errorMessage);
    }
  }
);

export const dogSlice = createSlice({
  name: "dog",
  initialState,
  reducers: {
    reset: (state) => initialState,
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchDogsData.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchDogsData.fulfilled, (state, actions) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.imageUrl = actions.payload.message;
        state.isError = false;
        state.errorMessage = "";
      })
      .addCase(fetchDogsData.rejected, (state, actions) => {
        state.isLoading = false;
        state.isSuccess = false;
        state.imageUrl = "";
        state.isError = true;
        state.errorMessage = actions.payload;
      });
  },
});

export const { reset } = dogSlice.actions;
export default dogSlice.reducer;
