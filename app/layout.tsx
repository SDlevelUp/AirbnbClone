import ClientOnly from "./components/ClientOnly";
import Navbar from "./components/navbar/Navbar";
import Product from "./components/Product";
import Footer from "./components/Footer";
import RegisterModal from "./components/modals/RegisterModal";
import ToasterProvider from "./providers/ToasterProvider";

import './globals.css';

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  return (
    <html lang="en">
      <body>
        <ClientOnly>
          <ToasterProvider />
          <RegisterModal />
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




