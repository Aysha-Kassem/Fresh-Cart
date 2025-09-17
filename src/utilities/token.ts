import { decode } from "next-auth/jwt";
import { cookies } from "next/headers";

export const getMyToken = async () => {
  const tkn = (await cookies()).get("next-auth.session-token")?.value;
  const token = await decode({
    token: tkn,
    secret: process.env.NEXTAUTH_SECRET!,
  });
  return token?.token;
};
