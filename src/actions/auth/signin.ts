"use server";

import { signIn } from "@/auth.config";

import { AuthError } from "next-auth";

type Response =
  | { success: true; redirect: string }
  | { success: false; message: string };

export async function authenticate(
  prevState: string | undefined,
  formData: FormData
) {
  try {
    await signIn("credentials", {
      ...Object.fromEntries(formData),
      redirect: false,
    });

    return "Success";
  } catch (error) {
    console.log(error);
    if (error instanceof AuthError) {
      switch (error.type) {
        case "CredentialsSignin":
          return "Invalid credentials.";
        default:
          return "Something went wrong.";
      }
    }

    return "an error occurred";
  }
}
