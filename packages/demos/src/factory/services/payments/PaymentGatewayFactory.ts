import { type PaymentGateway } from "./PaymentGateway";
import { StripeGateway } from "./StripeGateway";
import { PaypalGateway } from "./PaypalGateway";

export type SupportedGateway = "stripe" | "paypal";

export interface PaymentConfig {
  provider: SupportedGateway;
  country: "US" | "EU" | "LATAM";
  stripeApiKey?: string;
  paypalClientId?: string;
  paypalClientSecret?: string;
  enableLogs?: boolean;
}

export function createPaymentGateway(config: PaymentConfig): PaymentGateway {
  switch (config.provider) {
    case "stripe": {
      if (!config.stripeApiKey) {
        throw new Error("Missing stripeApiKey in config");
      }

      return new StripeGateway();
    }

    case "paypal": {
      if (!config.paypalClientId || !config.paypalClientSecret) {
        throw new Error("Missing PayPal credentials in config");
      }

      return new PaypalGateway();
    }

    default: {
      throw new Error(`Unsupported provider`);
    }
  }
}
