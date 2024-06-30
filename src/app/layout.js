import { Inter } from "next/font/google";
import "./globals.css";
import "./main.css";
import "./util.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "@/components/Header/Navbar";
import Footer from "@/components/Footer/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "CU Web Portal",
  description: "Web Engineering Project",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
