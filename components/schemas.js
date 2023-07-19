import * as yup from "yup";

export const basicSchema = yup.object().shape({
  name: yup.string().required("Field is required"),
  email: yup.string().email("Enter valid email").required("Field is required"),
  age: yup.number().positive().integer().required("Field is required"),
  interested: yup.string().required("Field is required"),
});
