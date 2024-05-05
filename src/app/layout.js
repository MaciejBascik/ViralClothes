import { UserProvider } from '@auth0/nextjs-auth0/client';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import { Inter } from "next/font/google";
import "./globals.css";
import Link from "next/link";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "ViralClothes | The best viral outfits for everyone",
  description: "ViralClothes | The best viral outfits for everyone",
};

function RootLayout({ children }) {
  return (
    <html lang="en">
      <UserProvider>
      <body className={inter.className}>
        <Navbar/>




        
        {children}
        
        
      <Footer/>
    </body>
    </UserProvider>
    </html>
  );
}

export default RootLayout;