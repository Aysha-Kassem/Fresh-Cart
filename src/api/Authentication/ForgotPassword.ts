


import axios from "axios";

// tyeps
import { ForgotPasswordFormSchemaType } from "../../Schema/ForgotPassword.s";
import { ForgotPasswordT } from "../../Types/ForgotPassword.t";

export const ForgotPasswordAPI = async (values:ForgotPasswordFormSchemaType) => {
  const {data} = await axios.post(
    "https://ecommerce.routemisr.com/api/v1/auth/forgotPasswords",
    values
  );
  return data as ForgotPasswordT;
};
