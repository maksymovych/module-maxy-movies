import * as yup from "yup";

export const schemaRegistration = yup
  .object()
  .shape({
    firstName: yup
      .string()
      .max(30, "Max length is 30 characters")
      .min(2, "First name. Min length is 2 characters")
      .matches(/^[A-Za-z]+$/i, "Must contain only letters"),
    lastName: yup.string(),
    nickname: yup
      .string()
      .max(30, "Max length is 30 characters")
      .min(2, "Min length is 2 characters")
      .matches(/(^[a-z]+[._0-9A-Za-z]+)/g, "Must contain only letters"),
    email: yup.string().email(),
  })
  .required();
