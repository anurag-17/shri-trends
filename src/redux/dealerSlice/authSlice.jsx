"use client"; //this is a client side component

import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  token: null,
  dealerDetails: null,
};

export const authDealSlice = createSlice({
  name: "dealer",
  initialState,
  reducers: {
    setDealerToken: (state, action) => {
      state.token = action.payload;
    },
    removeDealerToken: (state, action) => {
      state.token = null;
    },
    dealerDetails : (state, action) => {
        state.dealerDetails = action.payload;
    },
    rem_DealerDetails: (state, action) => {
      state.dealerDetails = null;
    },
  },
});

export const { setDealerToken, removeDealerToken, dealerDetails,rem_DealerDetails } = authDealSlice.actions;

export default authDealSlice.reducer;
