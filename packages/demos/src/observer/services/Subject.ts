export interface Observer<T> {
  id: string;
  update(payload: T): void;
}

export class Subject<T> {
  private observers = new Map<string, Observer<T>>();

  subscribe(observer: Observer<T>): () => void {
    this.observers.set(observer.id, observer);
    return () => {
      this.unsubscribe(observer.id);
    };
  }

  unsubscribe(id: string) {
    this.observers.delete(id);
  }

  notify(payload: T) {
    this.observers.forEach((observer) => observer.update(payload));
  }

  count() {
    return this.observers.size;
  }

  ids() {
    return Array.from(this.observers.keys());
  }
}
