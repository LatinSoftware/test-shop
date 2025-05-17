import { titleFont } from "@/config/fonts";
import LoginForm from "./ui/loginForm";

export default function SignInPage() {
  return (
    <section className="flex flex-col min-h-screen pt-5 sm:pt-10">
      <h1 className={`${titleFont.className} text-4xl mb-5`}>Login</h1>

      <LoginForm />
    </section>
  );
}
