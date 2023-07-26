import React from "react";
import ClientOnly from "./components/ClientOnly";
import Navbar from "./components/navbar/Navbar";
import './globals.css'
import Product from "./components/Product";
import Footer from "./components/Footer";

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  return (
    <html lang="en">
      <head />
      <body>
        <ClientOnly>
          <Navbar />
          <Product />
          <div className="pt-5">
            <Footer />
          </div>
        </ClientOnly>
        {children}
      </body>
    </html >
  )
}




