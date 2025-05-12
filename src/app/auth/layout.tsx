export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
    
    return(
        <div>
            <h1>hello layout</h1>
            {children}
        </div>
    )
}
