export interface PaymentGateway {
  charge(amountInCents: number, currency: string): Promise<void>;
}
