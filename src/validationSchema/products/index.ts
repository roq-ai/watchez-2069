import * as yup from 'yup';

export const productValidationSchema = yup.object().shape({
  name: yup.string().required(),
  price: yup.number().integer().required(),
  vendor_id: yup.string().nullable().required(),
});
