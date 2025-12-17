class Singleton {
  private static instance: Singleton | null;
  constructor() {
    if (Singleton.instance) {
      return Singleton.instance;
    }
    Singleton.instance = this;
  }
}

const g = globalThis as unknown as { _singletonInstance?: Singleton };
export const singletonInstance =
  g._singletonInstance ?? (g._singletonInstance = new Singleton());