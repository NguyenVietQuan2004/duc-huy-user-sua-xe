import type { Metadata } from "next";
import { Kanit } from "next/font/google";
import "./globals.css";
import ModelBooking from "@/components/model-booking";
import { Providers } from "./provider";
import Social from "@/components/social";
import ScrollToTopButton from "@/components/scroll-to-top";
import { Toaster } from "@/components/ui/sonner";
import FooterRoot from "@/components/footer-root";
import HeaderRoot from "@/components/header/header-root";
import ModelBookingRoot from "@/components/model-booking-root";

const kanit = Kanit({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "BMBCAR",
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
          <HeaderRoot />

          {children}
          <FooterRoot />
          <ModelBookingRoot />
          <Social />
          <ScrollToTopButton />
          <Toaster position="top-right" />
        </Providers>
      </body>
    </html>
  );
}
