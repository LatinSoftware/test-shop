"use client";
import { authenticate } from "@/actions";
import clsx from "clsx";
import Link from "next/link";
import { useSearchParams, redirect } from "next/navigation";
import { useActionState, useEffect } from "react";
import { IoExitOutline } from "react-icons/io5";

function LoginForm() {
  const searchParams = useSearchParams();
  const [errorMessage, formAction, isPending] = useActionState(
    authenticate,
    undefined
  );

  const callbackUrl = searchParams.get("callbackUrl") || "/";

  useEffect(() => {
    if (errorMessage == "Success") {
      redirect(callbackUrl);
    }
  }, [errorMessage]);

  return (
    <form action={formAction} className="flex flex-col">
      <label htmlFor="email">Email</label>
      <input
        name="email"
        className="px-5 py-2 border bg-gray-200 rounded mb-5"
        type="email"
        required
      />

      <label htmlFor="password">Password</label>
      <input
        name="password"
        className="px-5 py-2 border bg-gray-200 rounded mb-5"
        type="password"
        required
      />
      <input type="hidden" name="redirectTo" value={callbackUrl} />

      <button
        className={clsx({
          "btn-primary": !isPending,
          "btn-disabled": isPending,
        })}
        type="submit"
        disabled={isPending}
      >
        Sign In
      </button>

      <div
        className="flex h-8 items-end space-x-1"
        aria-live="polite"
        aria-atomic="true"
      >
        {errorMessage && (
          <>
            <IoExitOutline className="h-5 w-5 text-red-500" />
            <p className="text-sm text-red-500">{errorMessage}</p>
          </>
        )}
      </div>

      {/* divisor l ine */}
      <div className="flex items-center my-5">
        <div className="flex-1 border-t border-gray-500"></div>
        <div className="px-2 text-gray-800">O</div>
        <div className="flex-1 border-t border-gray-500"></div>
      </div>

      <Link href="/auth/sign-up" className="btn-secondary text-center">
        Create an account
      </Link>
    </form>
  );
}

export default LoginForm;
