import type { Metadata } from "next";
import { Kanit } from "next/font/google";
import "./globals.css";
import Header from "@/components/header/header";
import Footer from "@/components/footer";
import ModelBooking from "@/components/model-booking";
import { Providers } from "./provider";
import Social from "@/components/social";
import ScrollToTopButton from "@/components/scroll-to-top";
import { Toaster } from "@/components/ui/sonner";

const kanit = Kanit({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "DucHuy",
  description: "DucHuy App",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning={true}>
      <body className={kanit.className}>
        <Providers>
          <Header />

          {children}
          <Footer />
          <ModelBooking />
          <Social />
          <ScrollToTopButton />
          <Toaster />
        </Providers>
      </body>
    </html>
  );
}
