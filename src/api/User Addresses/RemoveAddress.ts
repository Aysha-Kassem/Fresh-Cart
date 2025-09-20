"use server";

import axios from "axios";

import { getMyToken } from "../../utilities/token";

export const RemoveAddressAPI = async (id: string) => {
  const token = await getMyToken();
  if (!token) window.location.href = "/login";

  const { data } = await axios.delete(
    `https://ecommerce.routemisr.com/api/v1/addresses/${id}`,
    {
      headers: {
        token,
      },
    }
  );
  return data;
};
