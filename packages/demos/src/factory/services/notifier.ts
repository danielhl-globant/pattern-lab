export type Channel = "email" | "sms";

export interface Notifier {
  send(message: string): void;
}

// IMPLEMENTATIONS
class EmailNotifier implements Notifier {
  send(message: string): void {
    console.log("Sending EMAIL:", message);
    alert(`EMAIL -> ${message}`);
  }
}

class SmsNotifier implements Notifier {
  send(message: string): void {
    console.log("Sending SMS:", message);
    alert(`SMS -> ${message}`);
  }
}

// SIMPLE FACTORY
export function createNotifier(channel: Channel): Notifier {
  switch (channel) {
    case "email":
      return new EmailNotifier();
    case "sms":
      return new SmsNotifier();
    default:
      throw new Error(`Channel not supported`);
  }
}


/*
export class NotifierFactory {
  create(channel: Channel): Notifier {
    switch (channel) {
      case "email":
        return new EmailNotifier();
      case "sms":
        return new SmsNotifier();
      default:
        throw new Error(`Channel not supported`);
    }
  }
}

const notifierFactory = new NotifierFactory();

const notifier = notifierFactory.create("email");
*/