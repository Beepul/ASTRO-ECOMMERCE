"use client"

import { PayPalScriptProvider } from "@paypal/react-paypal-js"

const PaypalProvider = ({children}) => {
  return (
    <PayPalScriptProvider >
        {children}
    </PayPalScriptProvider>
  )
}

export default PaypalProvider