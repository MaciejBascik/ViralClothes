//import { UserProvider } from '@auth0/nextjs-auth0/client';

import { Inter } from "next/font/google";
import "./globals.css";
const inter = Inter({ subsets: ["latin"] });
//import { getSession } from '@auth0/nextjs-auth0';
import Link from 'next/link';

export const metadata = {
  title: "ViralClothes | The best viral outfits for everyone",
  description: "ViralClothes | The best viral outfits for everyone",
};

async function RootLayout({ children }) {
  //const session = await getSession();
  return (
    <html lang="en">
      
      <body className={inter.className}>
        
          <header className="flex items-center justify-between font-['DM Sans']">
      <div className="navbar bg-[#EAEEFE] flex flex-col md:flex-row"> 
        <div className="flex-1">
          <Link href="/" className="btn btn-ghost text-[18px] md:ml-10 font-light" style={{color:"black"}}>made by <span className="font-[600]">MaciejBaścik</span></Link>
        </div>
        
            <ul className="menu menu-horizontal px-2 text-[16px] mr-10">
              <li style={{color:"black", opacity:"60%"}}><Link href="/#about">About</Link></li>
              <li style={{color:"black", opacity:"60%"}}><Link href="/#features">Features</Link></li>
              <li style={{color:"black", opacity:"60%"}}><Link href="/#help">Help</Link></li>
              <li><Link href="/api/auth/login" className="btn btn-sm bg-black h-9 ml-2 text-[16px]" style={{color:"white"}}>Sign in</Link></li>
            </ul>


      </div>
    </header>



        {children}



    <footer className="footer p-10 bg-base-200 text-base-content flex-col md:flex-row ">
        <aside>
        <svg width="50" height="50" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fillRule="evenodd" clipRule="evenodd" className="fill-current"><path d="M22.672 15.226l-2.432.811.841 2.515c.33 1.019-.209 2.127-1.23 2.456-1.15.325-2.148-.321-2.463-1.226l-.84-2.518-5.013 1.677.84 2.517c.391 1.203-.434 2.542-1.831 2.542-.88 0-1.601-.564-1.86-1.314l-.842-2.516-2.431.809c-1.135.328-2.145-.317-2.463-1.229-.329-1.018.211-2.127 1.231-2.456l2.432-.809-1.621-4.823-2.432.808c-1.355.384-2.558-.59-2.558-1.839 0-.817.509-1.582 1.327-1.846l2.433-.809-.842-2.515c-.33-1.02.211-2.129 1.232-2.458 1.02-.329 2.13.209 2.461 1.229l.842 2.515 5.011-1.677-.839-2.517c-.403-1.238.484-2.553 1.843-2.553.819 0 1.585.509 1.85 1.326l.841 2.517 2.431-.81c1.02-.33 2.131.211 2.461 1.229.332 1.018-.21 2.126-1.23 2.456l-2.433.809 1.622 4.823 2.433-.809c1.242-.401 2.557.484 2.557 1.838 0 .819-.51 1.583-1.328 1.847m-8.992-6.428l-5.01 1.675 1.619 4.828 5.011-1.674-1.62-4.829z"></path></svg>
        <p>Maciej Baścik<br/>Young student and developer from Poland <br/> </p>
        </aside> 
        <nav>
        <h6 className="footer-title">Services</h6> 
        <a className="link link-hover">Marketing</a>
        <a className="link link-hover">Design</a>
        <a className="link link-hover">Website development</a>
        </nav> 
        <nav>
        <h6 className="footer-title">Developer</h6> 
        <a href="https://github.com/MaciejBascik" className="link link-hover">Maciej Baścik</a>
        </nav> 
        <nav>
        <h6 className="footer-title">Legal</h6> 
        <a href="https://www.termsofservicegenerator.net/live.php?token=Q9aLbgeCrrtFGI5oEsUMV9AzE09i7soA" className="link link-hover ">Terms of use</a>
        <a href="https://www.termsfeed.com/live/8dea4463-b798-4ba5-88e4-a091ce091e7c" className="link link-hover">Privacy policy</a>
        </nav>
    </footer>


    </body>

    </html>
  );
}

export default RootLayout;