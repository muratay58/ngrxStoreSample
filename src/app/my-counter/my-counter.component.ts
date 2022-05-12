import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable, take } from 'rxjs';
import { increment, decrement, setCounter } from '../counter.actions';
import { CounterState } from '../counter.state';

@Component({
  selector: 'app-my-counter',
  templateUrl: './my-counter.component.html',
})
export class MyCounterComponent {
  count$: Observable<CounterState>;

  constructor(private store: Store<{ cstate: CounterState }>) {
    this.count$ = store.select('cstate');
  }

  increment() {
    this.store.dispatch(increment());
  }

  decrement() {
    this.store.dispatch(decrement());
  }

  reset() {
    this.store.dispatch(setCounter({ cstate: { counter: -10 } }));
  }
}

/*
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://github.com/ngrx/platform
*/
