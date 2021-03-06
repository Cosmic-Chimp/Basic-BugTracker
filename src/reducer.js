import * as actions from "./actionTypes";

const initialState = [];
let lastId = 0;

export default function reducer(state = initialState, { type, payload }) {
  switch (type) {
    case actions.BUG_ADDED:
      return [
        ...state,
        {
          id: ++lastId,
          description: payload.description,
          resolved: false,
        },
      ];

    case actions.BUG_REMOVED:
      return state.filter((bug) => bug.id !== payload.id);

    case actions.BUG_RESOLVED:
      return state.map((bug) =>
        bug.id !== payload.id ? bug : { ...bug, resolved: true }
      );

    default:
      return state;
  }
}
