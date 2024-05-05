import { getSession } from '@auth0/nextjs-auth0';
import Link from 'next/link';
export default async function Navbar() {
  const session = await getSession();
  return (
    <header className="flex  items-center justify-between font-['DM Sans']  ">
    <div className="navbar bg-[#EAEEFE] flex-col md:flex-row" >
          <div className="flex-1">
            <Link href="/" className="btn btn-ghost text-[18px] md:ml-10 font-light" style={{color:"black"}}>made by <span className="font-[600]">MaciejBaścik</span></Link>
          </div>

    {session?.user ? (<>
            <ul className="menu menu-horizontal px-2 text-[16px] ">
            <li style={{color:"black", opacity:"60%"}}><Link href="/#about">About</Link></li>
            <li style={{color:"black", opacity:"60%"}}><Link href="/#features">Features</Link></li>
            <li style={{color:"black", opacity:"60%"}}><Link href="/#help">Help</Link></li>
            <li style={{color:"black", opacity:"60%"}}><Link href="/user/feed">Feed</Link></li>
            <li><Link href="/api/auth/logout" className="btn btn-sm bg-black h-9 ml-2 text-[16px]" style={{color:"white"}}>Log Out</Link></li>
          </ul>
          <div >
            <img src={session?.user?.picture} alt={session?.user?.name} style={{height:"2.8rem",borderRadius:"500px"}}/>
          </div>
          </>) :
          (<>
            <ul className="menu menu-horizontal px-2 text-[16px] mr-10">

              <li style={{color:"black", opacity:"60%"}}><Link href="/#about">About</Link></li>
              <li style={{color:"black", opacity:"60%"}}><Link href="/#features">Features</Link></li>
              <li style={{color:"black", opacity:"60%"}}><Link href="/#help">Help</Link></li>
              <li><Link href="/api/auth/login" className="btn btn-sm bg-black h-9 ml-2 text-[16px]" style={{color:"white"}}>Sign in</Link></li>
            </ul>
          </>)}

        </div>
          </header>
  );
}