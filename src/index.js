import { bugAdded, bugResolved } from "./actionCreators";
import store from "./store";
// import * as actions from "./actionTypes";

// icky way of dispatching actions
// store.dispatch({
//   type: actions.BUG_ADDED,
//   payload: {
//     description: "Bug1",
//   },
// });

// store.dispatch({
//   type: actions.BUG_REMOVED,
//   payload: {
//     id: 1,
//   },
// });

// better way to dispatch actions with use of action creators:
store.dispatch(bugAdded("Description of the action/ bug 1"));
store.dispatch(bugResolved(1));

console.log(store.getState());
