class BadCounter {
  value = 0;
  createdAt = new Date().toISOString();
  id = Math.random().toString(36).slice(2);

  bump(by = 1) {
    this.value += by;
    return this.value;
  }
}

export const badCounter = new BadCounter();
