const store = require("./app/store");
const cakeActions = require("./features/cake/cakeSLice").cakeActions;
const icecreamActions =
  require("./features/icecream/icecreamSlice").icecreamActions;
const fetchUser = require("./features/users/usersSlice").fetchUser;

console.log("intial State::", store.getState());

const unsubscribe = store.subscribe(() => {
  console.log("Updated State::", store.getState());
});

store.dispatch(fetchUser());

// store.dispatch(cakeActions.ordered());
// store.dispatch(cakeActions.ordered());
// store.dispatch(cakeActions.ordered());
// store.dispatch(cakeActions.reStocked(3));
// store.dispatch(icecreamActions.restockIcecream(3));

// store.dispatch(icecreamActions.orderIcecream());
// store.dispatch(icecreamActions.orderIcecream());
// store.dispatch(icecreamActions.orderIcecream());

// unsubscribe();
