"use client";

import { NotificationDemo } from "./components/NotificationDemo";
import { PaymentGatewayProvider } from "./components/PaymentGatewayProvider";
import { CheckoutButton } from "./components/CheckoutButton";

import { type PaymentConfig } from "./services/payments/PaymentGatewayFactory";

const paymentConfig: PaymentConfig = {
  provider: "paypal", // prueba cambiando a 'paypal'
  country: "EU", // EU → logs activados
  stripeApiKey: "test-stripe-key",
  paypalClientId: "test-client-id",
  paypalClientSecret: "test-client-secret",
  enableLogs: true,
};

export const FactoryDemo = () => {
  return (
    <div style={{ padding: 24 }}>
      <h1>Factory Pattern – React + TypeScript</h1>

      <section style={{ marginBottom: 32 }}>
        <NotificationDemo />
      </section>

      <section>
        <h2>Payment Gateway Factory + Context</h2>
        <PaymentGatewayProvider config={paymentConfig}>
          <CheckoutButton />
        </PaymentGatewayProvider>
      </section>
    </div>
  );
}

export default FactoryDemo;
