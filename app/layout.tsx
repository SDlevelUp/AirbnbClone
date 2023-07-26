import React from "react";
import Client from "./components/ClientOnly";
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
        <Client>
          <Navbar />
          <Product />
          <Footer />
        </Client>
        {children}
      </body>
    </html>
  )
}












// import Header from "../components/Header";
// import Footer from "../components/Footer";
// import Product from "../components/Product";
// import Filter from "../components/Filter";

{/* <Header /> */ }
{/* <Filter /> */ }
{/* <Product />
        <Footer /> */}