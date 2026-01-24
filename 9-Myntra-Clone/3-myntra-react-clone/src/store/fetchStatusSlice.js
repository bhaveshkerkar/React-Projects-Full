import { createSlice, current } from "@reduxjs/toolkit";

const itemsSlice = createSlice({
  name: "fetchStatus",
  initialState: {
    fetchDone: false,
    currentfetching: false,
  },

  reducers: {
    addInitialItems: (store, action) => {
      return store;
    },
  },
});

export const itemsActions = itemsSlice.actions;
export default itemsSlice;
