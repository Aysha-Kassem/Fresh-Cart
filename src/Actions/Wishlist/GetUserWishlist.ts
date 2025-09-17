"use server";

// API
import axios from "axios";

// token
import { getMyToken } from "../../utilities/token";

export const GetUserWishlistActions = async () => {
  const token = await getMyToken();
  if (!token) throw new Error("Login Firest");

  const { data } = await axios.get(
    "https://ecommerce.routemisr.com/api/v1/wishlist",
    {
      headers: {
        token,
      },
    }
  );

  return data;
};
