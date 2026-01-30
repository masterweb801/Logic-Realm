import "./globals.css";
import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ThemeProvider } from "@/components/utils/ThemeProvider";

export const metadata: Metadata = {
  title: "Logic Realm - Modern Web & Mobile Software Solutions",
  description: "We build the software your business deserves. Custom software development, modern web & mobile solutions, and ongoing support — we partner with you every step of the way.",
  keywords: ["Software Development", "Web Development", "Mobile Development", "Custom Software", "Modern Web", "Mobile Solutions", "Ongoing Support", "Business Software", "Custom Software Development", "Modern Web & Mobile Solutions", "Ongoing Support", "Logic", "Realm", "Logic Realm", "Logic Realm Software", "Logic Realm Web", "Logic Realm Mobile", "Logic Realm Custom Software", "Logic Realm Modern Web", "Logic Realm Mobile Solutions", "Logic Realm Ongoing Support", "Logic Realm Business Software", "Logic Realm Custom Software Development", "Logic Realm Modern Web & Mobile Solutions", "Logic Realm Ongoing Support"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body cz-shortcut-listen="true">
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <Navbar />
          <main>
            {children}
          </main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
