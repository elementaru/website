import type { Metadata } from "next";
import { ToastContainer } from "react-toastify";
import { inter, monaco } from "@/app/fonts";
import "./globals.css";
import Header from "@/components/header";
import Footer from "@/components/footer";
import Analytics from "@/components/analytics";
import "react-toastify/dist/ReactToastify.css";

export const metadata: Metadata = {
  title: "IT solutions architect and RPA engineer | Elementaru",
  description:
    "Over 20 years of experience IT consulting, business process automation and E-commerce development. Bring your products to market faster!",
};

function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${monaco.variable} ${inter.variable}`}>
      <body>
        <Header />
        {children}
        <Footer />
        <ToastContainer
          position="top-center"
          autoClose={5000}
          hideProgressBar={false}
          closeOnClick
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="dark"
        />
        <Analytics />
      </body>
    </html>
  );
}

export default RootLayout;
