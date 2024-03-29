import { createAction, ActionType, createReducer } from "typesafe-actions";

const INCREASE = "counter/INCREASE" as const;
const DECREASE = "counter/DECREASE" as const;
const INCREASE_BY = "counter/INCREASE_BY" as const;
// export const increase = () => ({
//     type:INCREASE
// });
// export const decrease = () => ({
//     type:DECREASE
// });
// export const increaseBy = (diff: number) => ({
//     type: INCREASE_BY,
//     payload: diff
// });
export const increase = createAction(INCREASE)();
export const decrease = createAction(DECREASE)();
export const increaseBy = createAction(INCREASE_BY)<number>();

interface CounterState {
  count: number;
}
const initialState: CounterState = {
  count: 0,
};

//type CounterAction = ReturnType<typeof increase> | ReturnType<typeof decrease> | ReturnType<typeof increaseBy>
const actions = { increase, decrease, increaseBy };
type CounterAction = ActionType<typeof actions>;

// function counter(state: CounterState = initialState, action: CounterAction): CounterState{
//     switch(action.type){
//         case INCREASE:
//             return {count: state.count + 1};
//         case DECREASE:
//             return {count: state.count - 1};
//         case INCREASE_BY:
//             return {count: state.count + action.payload};
//         default:
//             return state;
//     }
// }
//===방법1===
const counter = createReducer<CounterState, CounterAction>(initialState, {
  [INCREASE]: (state) => {
    console.log(state);
    return { count: state.count + 1 };
  },
  [DECREASE]: (state) => ({ count: state.count - 1 }),
  [INCREASE_BY]: (state, action) => ({ count: state.count + action.payload }),
});
//===방법2===
/*const counter = createReducer<CounterState, CounterAction>(initialState)
    .handleAction(increase, (state) => ({count: state.count + 1}))
    .handleAction(decrease, (state) => ({count: state.count - 1}))
    .handleAction(increaseBy, (state, action) => ({count: state.count + action.payload})); */

export default counter;
