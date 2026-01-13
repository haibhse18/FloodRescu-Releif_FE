import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
    title: "Flood Rescue & Relief",
    description: "Emergency flood rescue and relief coordination system",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className="antialiased">
                {children}
            </body>
        </html>
    );
}
