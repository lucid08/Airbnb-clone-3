import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Navbar from "./components/navbar/Navbar";
import Model from "./components/models/Model";
import LoginModel from "./components/models/LoginModel";
import SignupModel from "./components/models/SignupModel";
import AddPropertyModel2 from "./components/models/AddPropertyModel2";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "MYbnb",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const content = (<p>irhgirhgghb</p>);
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navbar />
        <div className="pt-32">{children}</div>
        <LoginModel />
        <SignupModel/>
        <AddPropertyModel2/>
      </body>
    </html>
  );
}
