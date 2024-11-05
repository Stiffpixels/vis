import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";

const plusJakartaSans = localFont({
    src: "./fonts/PlusJakartaSans.ttf",
    variable: "--font-jakarta-sans",
    weight: "100 400 700 900",
});

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body
                className={`${plusJakartaSans.variable} antialiased`}
            >
                <Navbar/>
                {children}
            </body>
        </html>
    );
}

export const metadata: Metadata = {
    title: "Vivekanand Internation School",
    description: `Vivekanand International School,
  is the first CBSE-affiliated school in the area, setting a benchmark in education
  with a commitment to personalized and holistic teaching methods. We believe that
  each student is unique, with individual strengths and learning needs. Our curriculum
  is thoughtfully designed to adapt to diverse learning styles, ensuring every
  child reaches their full potential.`,
};
