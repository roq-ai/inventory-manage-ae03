import * as yup from 'yup';

export const inventoryValidationSchema = yup.object().shape({
  quantity: yup.number().integer().required(),
  product_id: yup.string().nullable(),
  business_id: yup.string().nullable(),
});
