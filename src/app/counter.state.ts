export class CounterState {
  counter: number;
}

export const initializeState = (): CounterState => {
  return { counter: 0 };
};
