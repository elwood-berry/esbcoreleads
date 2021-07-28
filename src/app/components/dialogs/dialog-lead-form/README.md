# DIALOG: LEAD 
A form available to enter and save leads.


## LEGACY 
Input fields from the last form:  
```ts
export interface Lead {
  
  // REQUIRED 
  firstName: string;
  lastName: string;
  salesRep: string;
  email: string;
  leadSource: string;

  // OPTIONAL 
  title: string;
  department: string;
  accountName: string;
  phone: string;
  status: string;
  coporateIdentity: string;
  description: string;
  referredBy: string;
  billingAddress1: string;
  billingAddress2: string;
  billingCity: string;
  billingState: string;
  billingZip: string;
  shippingAddress1: string;
  shippingAddress2: string;
  shippingCity: string;
  shippingState: string;
  shippingZip: string;

  // leadId: string;
}
```  
1. First Name