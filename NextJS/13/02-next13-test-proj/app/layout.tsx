import "./globals.css";
import {
  Montserrat,
  Pacifico,
  Raleway,
} from "next/font/google";

export const montserrat = Montserrat({ subsets: ["latin"], weight: "400" });
export const raleway = Raleway({ subsets: ["latin"], weight: "400" });
export const pacifico = Pacifico({ subsets: ["latin"], weight: "400" });

export const metadata = {
  title: "Test Next app",
  description: "Generated by Shubham Satyawali",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
