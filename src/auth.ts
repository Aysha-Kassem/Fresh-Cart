import { AuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { jwtDecode } from "jwt-decode";

interface JwtPayload {
  id: string;
  iat?: number;
  exp?: number;
}

export interface NextAuthResponse {
  message: string;
  user: NextAuthUser;
  token: string;
}

export interface NextAuthUser {
  name: string;
  email: string;
  role: string;
}

declare module "next-auth" {
  interface Session {
    user: {
      id: string;
      name: string;
      email: string;
      role: string;
    };
  }

  interface User {
    id: string;
    name: string;
    email: string;
    role: string;
    token: string;
  }
}

declare module "next-auth/jwt" {
  interface JWT {
    id: string;
    name: string;
    email: string;
    role: string;
    token: string;
  }
}

export const authOptions: AuthOptions = {
  pages: {
    signIn: "/login",
  },
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        if (!credentials) return null;

        const res = await fetch(
          "https://ecommerce.routemisr.com/api/v1/auth/signin",
          {
            method: "POST",
            body: JSON.stringify(credentials),
            headers: { "Content-Type": "application/json" },
          }
        );

        const data: NextAuthResponse = await res.json();

        if (res.ok && data?.token) {
          const {id} = jwtDecode<JwtPayload>(data.token);

          return {
            id: id,
            name: data.user.name,
            email: data.user.email,
            role: data.user.role,
            token: data.token,
          };
        }

        throw new Error(data.message || "Error");
      },
    }),
  ],

  callbacks: {
    // server
    async jwt({ token, user }) {
      if (user) {
        token.id = user.id;
        token.name = user.name;
        token.email = user.email;
        token.role = user.role;
        token.token = user.token
      }
      return token;
    },

    // client
    async session({ session, token }) {
      if (token) {
        session.user = {
          id: token.id,
          name: token.name,
          email: token.email,
          role: token.role,
        };
      }
      return session;
    },
  },
};
