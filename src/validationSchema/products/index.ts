import * as yup from 'yup';

export const productValidationSchema = yup.object().shape({
  name: yup.string().required(),
  category: yup.string().required(),
  threshold: yup.number().integer().required(),
  business_id: yup.string().nullable(),
});
