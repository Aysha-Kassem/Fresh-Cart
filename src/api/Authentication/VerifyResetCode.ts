'use server'


import axios from "axios";

// types
import { VerifyCodeFormSchemaType } from "../../Schema/VerifyCode.s";
import { VerifyResetCodeT } from "../../Types/VerifyResetCode.t";

export const VerifyResetCode = async (values:VerifyCodeFormSchemaType) => {
  const {data} = await axios.post(
    "https://ecommerce.routemisr.com/api/v1/auth/verifyResetCode",
    values
  );
  return data as VerifyResetCodeT;
};
