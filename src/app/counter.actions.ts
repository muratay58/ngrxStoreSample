import { createAction, props } from '@ngrx/store';
import { CounterState } from './counter.state';

export const increment = createAction('[Counter Component] Increment');
export const decrement = createAction('[Counter Component] Decrement');
export const reset = createAction('[Counter Component] Reset');
export const setCounter = createAction(
  '[Counter Component] Reset',
  props<{ cstate: CounterState }>()
);

/*
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://github.com/ngrx/platform
*/
