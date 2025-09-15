

import axios from "axios";

// types
import { ResetPasswordFormSchemaType } from "../../Schema/ResetPassword.s";
import { ForgotPasswordT } from "../../Types/ForgotPassword.t";


export const ResetPasswordAPI = async (values:ResetPasswordFormSchemaType) => {
  const {data} = await axios.put(
    "https://ecommerce.routemisr.com/api/v1/auth/resetPassword",
    values
  );
  return data as ForgotPasswordT;
};
