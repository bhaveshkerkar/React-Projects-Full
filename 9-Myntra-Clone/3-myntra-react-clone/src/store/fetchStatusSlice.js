import { createSlice, current } from "@reduxjs/toolkit";

const fetchStatusSlice = createSlice({
  name: "fetchStatus",
  initialState: {
    fetchDone: false, // indicates whether the fetch operation has completed true/false
    currentlyFetching: false,
  },

  reducers: {
    markFetchDone: (state) => {
      state.fetchDone = true;
    },

    markFetchingStarted: (state) => {
      state.currentlyFetching = true;
    },

    markFetchingFinished: (state) => {
      state.currentlyFetching = false;
    },
  },
});

export const fetchStatusActions = fetchStatusSlice.actions;
export default fetchStatusSlice;
