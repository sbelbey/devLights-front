export default function SessionsLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <main className="flex flex-nowrap max-w-screen w-screen min-h-screen">
            {children}
        </main>
    );
}
