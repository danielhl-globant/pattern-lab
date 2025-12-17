import { type PaymentGateway } from "./PaymentGateway";

export class PaypalGateway implements PaymentGateway {

  async charge(amountInCents: number, currency: string): Promise<void> {
    console.log("[PayPal] charging", amountInCents, currency);
    alert(`[PayPal] Charged ${amountInCents / 100} ${currency}`);
  }
}
