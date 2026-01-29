import { type Observer } from "../Subject";

export class CollectingObserver<T> implements Observer<T> {
  readonly id: string;
  private readonly sink: (payload: T) => void;

  constructor(id: string, sink: (payload: T) => void) {
    this.id = id;
    this.sink = sink;
  }

  update(payload: T) {
    this.sink(payload);
  }
}
