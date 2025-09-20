"use server";

import axios from "axios";

import { getMyToken } from "../../utilities/token";
import { UpdateUserDataFormSchemaType } from "../../Schema/UpdateUserData.s";

// tyeps

export const UpdateDataAPI = async (values: UpdateUserDataFormSchemaType) => {
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
  return data;
};
