// utils/validations/transaction.js
import * as yup from 'yup';

export const transactionSchema = yup.object().shape({
  accountNumber: yup
    .string()
    .required('Account number is required')
    .matches(/^\d{10}$/, 'Account number must be exactly 10 digits'),

  bank: yup
    .string()
    .required('Bank name is required')
    .min(2, 'Bank name must be at least 2 characters'),

  accountName: yup
    .string()
    .required('Account name is required')
    .min(2, 'Account name must be at least 2 characters'),
});
