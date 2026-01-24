import { createSlice, current } from "@reduxjs/toolkit";

const fetchStatusSlice = createSlice({
  name: "fetchStatus",
  initialState: {
    fetchDone: false, // indicates whether the fetch operation has completed true/false
    currentfetching: false,
  },

  reducers: {
    markFetchDone: (state) => {
      return (state.fetchDone = true);
    },

    markFetchingStarted: (state) => {
      return (state.currentfetching = true);
    },

    markFetchingFinished: (state) => {
      return (state.currentfetching = false);
    },
  },
});

export const fetchStatusActions = fetchStatusSlice.actions;
export default fetchStatusSlice;
