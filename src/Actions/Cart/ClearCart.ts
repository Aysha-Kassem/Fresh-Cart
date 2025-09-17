


"use server";

// API
import axios from "axios";

// token
import { getMyToken } from "../../utilities/token";

export const ClearCartActions = async () => {
  const token = await getMyToken();
  if (!token) throw new Error("Login Firest");
  const { data } = await axios.delete(
    "https://ecommerce.routemisr.com/api/v1/cart",
    {
      headers: {
        token,
      },
    }
  );

  return data;
};
