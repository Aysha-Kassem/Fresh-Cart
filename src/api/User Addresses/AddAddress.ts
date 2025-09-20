

"use server";

import axios from "axios";

import { getMyToken } from "../../utilities/token";
import { AddAddressFormSchemaType } from "../../Schema/AddAddress.s";


export const AddAddressAPI = async (values: AddAddressFormSchemaType) => {
  const token = await getMyToken();
 if (!token) window.location.href = "/login";

  const { data } = await axios.post(
    "https://ecommerce.routemisr.com/api/v1/addresses",
    values,
    {
      headers: {
        token,
      },
    }
  );
  return data;
};
