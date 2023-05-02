import { createContext, useState } from "react";

const defaultInfo = { customerName: '', streetAddress: '', city: '', state: '', zipCode: '' };

export const BillingContext = createContext({
    customerInfo: defaultInfo,
    setCustomerInfo: () => {},
    isReady: false,
    setIsReady: () => {}
});

export const BillingProvider = ({ children }) => {
    const [customerInfo, setCustomerInfo] = useState(defaultInfo);
    const [isReady, setIsReady] = useState(false);

    return (
        <BillingContext.Provider value={{ customerInfo, setCustomerInfo, isReady, setIsReady }}>
            {children}
        </BillingContext.Provider>
    )
}