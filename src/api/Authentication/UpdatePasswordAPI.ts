"use server";

import axios from "axios";
import { UpdatePasswordFormSchemaType } from "../../Schema/UpdatePassword";
import { UpdatePasswordT } from "../../Types/UpdatePassword.t";
import { getMyToken } from "../../utilities/token";

// tyeps

export const UpdatePasswordAPI = async (
  values: UpdatePasswordFormSchemaType
) => {
  const token = await getMyToken();
  if (!token) window.location.href = "/login";

  const { data } = await axios.put(
    "https://ecommerce.routemisr.com/api/v1/users/changeMyPassword",
    values,
    {
      headers: {
        token,
      },
    }
  );
  return data as UpdatePasswordT;
};
