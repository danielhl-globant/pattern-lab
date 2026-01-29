import { type Observer } from "../Subject";
import { type NotificationPayload } from "../types";

export class ConsoleObserver implements Observer<NotificationPayload> {
  readonly id: string;

  constructor(label = "console") {
    this.id = `console-${label}`;
  }

  update(payload: NotificationPayload) {
    console.log(`[${this.id}]`, payload.message, payload.level, payload.timestamp);
  }
}
