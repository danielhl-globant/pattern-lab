import { type Observer } from "../Subject";
import { type NotificationPayload } from "../types";

export class CountingObserver implements Observer<NotificationPayload> {
  readonly id = "counting-observer";
  private total = 0;

  update(_: NotificationPayload) {
    this.total += 1;
  }

  count() {
    return this.total;
  }
}
