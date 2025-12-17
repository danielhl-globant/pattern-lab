import { useState } from "react";
import { usePaymentGateway } from "./PaymentGatewayProvider";

export function CheckoutButton() {
  const gateway = usePaymentGateway();
  const [loading, setLoading] = useState(false);

  const handleClick = async () => {
    setLoading(true);
    try {
      // monto fake: 19.99 USD
      await gateway.charge(1999, "USD");
      console.log("Payment completed");
    } catch (error) {
      console.error("Payment error", error);
      alert("Error processing payment");
    } finally {
      setLoading(false);
    }
  };
  return (
    <button onClick={handleClick} disabled={loading}>
      {loading ? "Procesando..." : "Pagar 19.99 USD"}
    </button>
  );
}
