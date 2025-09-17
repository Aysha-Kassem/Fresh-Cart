'use server'

import axios from "axios";

// types
import { RegisterFormSchemaType } from "../../Schema/Register.s";
import { AuthResponse } from "../../Types/AuthResponse";

export const Signup = async (values: RegisterFormSchemaType) => {
  const {data} = await axios.post(
    "https://ecommerce.routemisr.com/api/v1/auth/signup",
    values
  );
  return data as AuthResponse;
};
