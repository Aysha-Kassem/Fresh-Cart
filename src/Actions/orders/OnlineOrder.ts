"use server";

// API
import axios from "axios";

// token
import { getMyToken } from "../../utilities/token";
import { paymentFormSchemaType } from "../../Schema/payment.s";

export const OnlineOrderAction = async (
  id: string,
  addres: paymentFormSchemaType
) => {
  const token = await getMyToken();
  if (!token) window.location.href = "/login";

  const values = {
    shippingAddress: addres,
  };
  const { data } = await axios.post(
    `https://ecommerce.routemisr.com/api/v1/orders/checkout-session/${id}?url=http://localhost:3000`,
    values,
    {
      headers: {
        token,
      },
    }
  );

  return data;
};
