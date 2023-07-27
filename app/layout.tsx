import ClientOnly from "./components/ClientOnly";
import Navbar from "./components/navbar/Navbar";
import Product from "./components/Product";
import Footer from "./components/Footer";
// import Modal from "./components/modals/Modal";

import './globals.css';

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
          {/* <Modal title="Connexion ou inscription" isOpen /> */}
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




