import { PaymentMethod } from '@/types/product';

export const PAY_METHODS: PaymentMethod[] = [
  { k: 'upi', t: 'UPI', d: 'GPay, PhonePe, Paytm & more' },
  { k: 'card', t: 'Credit / Debit Card', d: 'Visa, Mastercard, RuPay, Amex' },
  { k: 'emi', t: 'No-Cost EMI', d: 'From leading banks, 3–12 months' },
  { k: 'cod', t: 'Cash on Delivery', d: 'Pay when your furniture arrives' },
];
