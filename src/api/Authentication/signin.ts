'use server'

import axios from "axios";
import { LoginFormSchemaType } from "../../Schema/Login.s";
import { AuthResponse } from "../../Types/AuthResponse";

export const Signin = async (values: LoginFormSchemaType) => {
  const { data } = await axios.post<AuthResponse>(
    "https://ecommerce.routemisr.com/api/v1/auth/signin",
    values
  );

  if ("token" in data) {
    return data; // ✅ success case
  } else {
    throw new Error(data.message || "Login failed");
  }
};
