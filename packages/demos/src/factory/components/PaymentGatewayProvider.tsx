/* eslint-disable react-refresh/only-export-components */
import { createContext, useContext, useMemo, type ReactNode } from "react";
import {
  type PaymentConfig,
  createPaymentGateway,
} from "../services/payments/PaymentGatewayFactory";
import { type PaymentGateway } from "../services/payments/PaymentGateway";

export const PaymentGatewayContext = createContext<PaymentGateway | null>(null);

interface PaymentGatewayProviderProps {
  config: PaymentConfig;
  children: ReactNode;
}

export function PaymentGatewayProvider({
  config,
  children,
}: PaymentGatewayProviderProps) {
  // Creamos el gateway UNA sola vez por config
  const gateway = useMemo(() => createPaymentGateway(config), [config]);

  return (
    <PaymentGatewayContext.Provider value={gateway}>
      {children}
    </PaymentGatewayContext.Provider>
  );
}

export function usePaymentGateway(): PaymentGateway {
  const ctx = useContext(PaymentGatewayContext);
  if (!ctx) {
    throw new Error(
      "usePaymentGateway must be used within a PaymentGatewayProvider"
    );
  }
  return ctx;
}