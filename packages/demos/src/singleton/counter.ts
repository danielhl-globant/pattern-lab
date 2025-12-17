class CounterService {
  value = 0;
  createdAt = new Date().toISOString();
  id = Math.random().toString(36).slice(2);

  bump(by = 1) {
    this.value += by;
    return this.value;
  }
}

const g = globalThis as unknown as { __counter?: CounterService };
export const counter = g.__counter ?? (g.__counter = new CounterService());
