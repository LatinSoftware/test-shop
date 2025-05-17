import NextAuth, { type NextAuthConfig } from "next-auth";
import Credentials from "next-auth/providers/credentials";
import { z } from "zod";
import { prisma } from "./lib/prismaClient";
import bcryptjs from "bcryptjs";
export const authConfig: NextAuthConfig = {
  pages: {
    signIn: "/auth/sign-in",
    newUser: "/auth/sign-up",
  },
  providers: [
    Credentials({
      async authorize(credentials) {
        const parsedCredentials = z
          .object({ email: z.string().email(), password: z.string().min(6) })
          .safeParse(credentials);

        if (!parsedCredentials.success) return null;

        const { email, password } = parsedCredentials.data;

        // search email
        const user = await prisma.user.findUnique({
          where: {
            email: email.toLowerCase(),
          },
        });

        if (!user) return null;

        if (!bcryptjs.compareSync(password, user.password)) return null;

        console.log("authenticated!!!");

        const { password: userPassword, ...rest } = user;

        return rest;
      },
    }),
  ],
};

export const { signIn, signOut, auth } = NextAuth(authConfig);
