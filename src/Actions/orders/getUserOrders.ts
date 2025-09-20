"use server";

// API
import axios from "axios";

// token
import { getMyToken } from "../../utilities/token";
import { jwtDecode } from "jwt-decode";

export const getUserOrdersAction = async () => {
  const token = await getMyToken();
  if (!token) window.location.href = "/login";
  const { id } = jwtDecode(token);

  const { data } = await axios.get(
    `https://ecommerce.routemisr.com/api/v1/orders/user/${id}`
  );

  return data;
};
