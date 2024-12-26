import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

// Async action using createAsyncThunk
export const fetchLorem = createAsyncThunk("lorem/fetchLorem", async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  return await response.json();
});

const loremSlice = createSlice({
  name: "lorem",
  initialState: {
    data: [],
    loading: false,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchLorem.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchLorem.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(fetchLorem.rejected, (state) => {
        state.loading = false;
      });
  },
});

export default loremSlice.reducer;
