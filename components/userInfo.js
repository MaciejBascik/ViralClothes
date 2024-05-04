import { getSession } from '@auth0/nextjs-auth0';
import Link from 'next/link';
export default async function ProfileServer() {
  const session = await getSession();
  return (
    
    session?.user ? (<>
            <ul className="menu menu-horizontal px-2 text-[16px] ">
            <li style={{color:"black", opacity:"60%"}}><Link href="/#about">About</Link></li>
            <li style={{color:"black", opacity:"60%"}}><Link href="/#features">Features</Link></li>
            <li style={{color:"black", opacity:"60%"}}><Link href="/#customers">Customers</Link></li>
            <li style={{color:"black", opacity:"60%"}}><Link href="/#updates">Updates</Link></li>
            <li style={{color:"black", opacity:"60%"}}><Link href="/#help">Help</Link></li>
            <li><Link href="/api/auth/logout" className="btn btn-sm bg-black h-9 ml-2 text-[16px]" style={{color:"white"}}>Log Out</Link></li>
          </ul>
          <div >
            <img src={session?.user?.picture} alt={session?.user?.name} style={{height:"2.8rem",borderRadius:"500px"}}/>
          </div>
          </>) :
          (<>
            <ul className="menu menu-horizontal px-1 text-[16px] mr-10">
            <li style={{color:"black", opacity:"60%"}}><Link href="/#about">About</Link></li>
            <li style={{color:"black", opacity:"60%"}}><Link href="/#features">Features</Link></li>
            <li style={{color:"black", opacity:"60%"}}><Link href="/#customers">Customers</Link></li>
            <li style={{color:"black", opacity:"60%"}}><Link href="/#updates">Updates</Link></li>
            <li style={{color:"black", opacity:"60%"}}><Link href="/#help">Help</Link></li>
            <li><Link href="/api/auth/login" className="btn btn-sm bg-black h-9 ml-2 text-[16px]" style={{color:"white"}}>Sign in</Link></li>
        </ul>
          </>)
  );
}