export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="flex justify-center">
      <div className="w-full sm:w-[350px] px-10 sm:px-0">{children}</div>
    </main>
  );
}
