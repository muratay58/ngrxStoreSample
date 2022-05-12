import { createReducer, on } from '@ngrx/store';
import { increment, decrement, setCounter } from './counter.actions';
import { CounterState, initializeState } from './counter.state';

export const initialState = initializeState();

export const counterReducer = createReducer(
  initialState,
  on(increment, (state: CounterState) => ({
    ...state,
    counter: state.counter + 1,
  })),
  on(decrement, (state: CounterState) => ({
    ...state,
    counter: state.counter - 1,
  })),
  on(setCounter, (state: CounterState, { cstate }) => ({
    counter: cstate.counter,
  }))
);

/*
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://github.com/ngrx/platform
*/
