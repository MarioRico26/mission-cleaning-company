import "./globals.css";
import type { ReactNode } from "react";

export const metadata = {
    title: "Mission Cleaning Company | Professional Cleaning in New Jersey",
    description:
        "Mission Cleaning Company offers professional residential and commercial cleaning services across New Jersey.",
};

export default function RootLayout({
                                       children,
                                   }: {
    children: ReactNode;
}) {
    return (
        <html lang="en">
        <body className="min-h-screen bg-gray-50 text-slate-900 antialiased">
        {children}
        </body>
        </html>
    );
}
