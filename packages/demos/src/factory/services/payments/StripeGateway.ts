import { type PaymentGateway } from "./PaymentGateway";

export class StripeGateway implements PaymentGateway {
  async charge(amountInCents: number, currency: string): Promise<void> {
    console.log("[Stripe] charging", amountInCents, currency);

    alert(`[Stripe] Charged ${amountInCents / 100} ${currency}`);
  }
}
