import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "./components/Navbar";
import Footer from "./components/Footer";
import { FormProvider } from "./components/FormContext";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "MediBand",
  description: "A personal medical record management app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <FormProvider>
          {/* Navbar always visible */}
          <Header />

          {/* Page Content */}
          <main className="min-h-screen">{children}</main>

          {/* Footer always visible */}
          <Footer />
        </FormProvider>
      </body>
    </html>
  );
}
