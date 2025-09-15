import axios from "axios";

// typs
import { LoginFormSchemaType } from "../../Schema/Login.s";
import { AuthResponse } from "../../Types/SignupResponse..t";

export const Signin = async (values:LoginFormSchemaType) => {
  const {data} = await axios.post(
    "https://ecommerce.routemisr.com/api/v1/auth/signin",
    values
  );
  return data as AuthResponse ;
};
