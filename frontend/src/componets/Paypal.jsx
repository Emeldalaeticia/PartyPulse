import React from 'react'
import Checkout from './Checkout';
import { PayPalScriptProvider } from "@paypal/react-paypal-js";

const initialOptions = {
  "client-id": "AQ9zr8P5wHjHTjD-hhe3uVHRz2WQJvOtiwwL4IEaLnGCPzFA2PS-QkEOJ4bGfrZc3wSKhqXxOTl90Qx4",
  currency: "USD",
  intent: "capture",
}; 

function Paypal() {
  return (
    <PayPalScriptProvider options={initialOptions}>
        <Checkout/>
    </PayPalScriptProvider>
  );
}

export default Paypal