const configureStore = require("@reduxjs/toolkit").configureStore;
// const reduxlogger = require("redux-logger");

const cakeReducer = require("../features/cake/cakeSLice");
const icecreamReducer = require("../features/icecream/icecreamSlice");
const userReducer = require("../features/users/usersSlice");
// const logger = reduxlogger.createLogger();

const store = configureStore({
  reducer: {
    cake: cakeReducer,
    icecream: icecreamReducer,
    user: userReducer,
  },
  // middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});

module.exports = store;
