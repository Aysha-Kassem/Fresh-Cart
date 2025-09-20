"use server";

import axios from "axios";

import { getMyToken } from "../../utilities/token";

export const GetUserAddresses = async () => {
  const token = await getMyToken();
  if (!token) window.location.href = "/login";

  const { data } = await axios.get(
    "https://ecommerce.routemisr.com/api/v1/addresses",
    {
      headers: {
        token,
      },
    }
  );
  return data;
};
