const { cakeActions } = require("../cake/cakeSLice");

const createSlice = require("@reduxjs/toolkit").createSlice;

const initialState = {
  numofIcecream: 20,
};

const icecreamSlice = createSlice({
  name: "icecream",
  initialState,
  reducers: {
    orderIcecream: (state, actions) => {
      state.numofIcecream--;
    },
    restockIcecream: (state, actions) => {
      state.numofIcecream += actions.payload;
    },
  },
  // extraReducers: {
  //   ["cake/ordered"]: (state) => {
  //     state.numofIcecream--;
  //   },
  // },
  extraReducers: (builder) => {
    builder.addCase(cakeActions.ordered, (state) => {
      state.numofIcecream--;
    });
  },
});

module.exports = icecreamSlice.reducer;
module.exports.icecreamActions = icecreamSlice.actions;
