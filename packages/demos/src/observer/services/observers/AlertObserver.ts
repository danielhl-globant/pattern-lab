import { type Observer } from "../Subject";
import { type NotificationPayload } from "../types";

export class AlertObserver implements Observer<NotificationPayload> {
  readonly id = "alert-observer";

  update(payload: NotificationPayload) {
    alert(`[ALERT] ${payload.message} (${payload.level})`);
  }
}
