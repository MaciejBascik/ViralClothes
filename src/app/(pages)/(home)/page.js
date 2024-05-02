'use client'
 
import { useRouter } from 'next/navigation'
import { FaArrowRight } from "react-icons/fa6";
import Link from "next/link";

function Home() {
  const router = useRouter()
  return (

<div>

      <div className="hero min-h-screen" id="hero" style={{backgroundImage: 'url(https://i.ibb.co/jk0X5z9/Group-6.png)'}}>
        <div className="text-left text-neutral-content max-w-[100%] mr-[50%]">
          <div className=" ">
            <h1 className="mb-5 text-[90px] font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#000000] to-[#001354] ">Find trending <br/> clothes</h1>
            <p className="mb-5 text-[22px] text-transparent bg-clip-text bg-gradient-to-r from-[#000000] to-[#001354]">Celebrate the joy of finding new clothes <br/> in much easier way than ever before, <br/> from fans of fashion and designers to clients</p>
            <button><Link href="/#pricing" className="btn btn-sm bg-black h-9  text-[16px]" style={{color:"white"}}>Get access</Link></button>
            <button><Link href="/#about" className="btn btn-sm bg-transparent border-none shadow-none h-9 ml-2 text-[16px] hover:bg-[#eaeefe27] " style={{color:"black"}}>Learn more <FaArrowRight/> </Link></button>
          </div>

        </div>
      </div>

      <div id="about" className="hero min-h-screen bg-[#EAEEFE]">
        <div className="text-center text-neutral-content max-w-[50%]">
          <div>
            <button className="btn btn-sm bg-transparent h-9 ml-2 text-[14px] hover:bg-transparent" style={{color:"black"}}>Find clothes for you </button>
            <h1 className="mb-5 text-[90px] font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#000000] to-[#001354] ">A more effective way to find clothes</h1>
            <p className="mb-5 text-[22px] text-transparent bg-clip-text bg-gradient-to-r from-[#000000] to-[#001354]">Effortlessly find new clothes designs based on TikTok trending algorithm in just minutes. New designs, Viral brands, Adjusted specially for you</p>
            <button><Link href="/#pricing" className="btn btn-sm bg-black h-9  text-[16px]" style={{color:"white"}}>Get access</Link></button>
            <button><Link href="/#about" className="btn btn-sm bg-transparent border-none shadow-none h-9 ml-2 text-[16px] hover:bg-[#eaeefe27] " style={{color:"black"}}>Learn more <FaArrowRight/> </Link></button>
          </div>
        </div>
        
      </div>
      <section className=" bg-[#EAEEFE]">
    <div className="py-4 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">

      <div className="space-y-8 lg:grid lg:grid-cols-3 sm:gap-6 xl:gap-10 lg:space-y-0 ">
        {/* Pricing Card */}
        <div className="flex flex-col p-8 mx-auto max-w-lg text-center text-gray-900 bg-white rounded-lg border border-gray-100 shadow  ">
          <h3 className="mb-4 text-2xl font-semibold text-left">Starter</h3>
          <div className="flex justify-center items-baseline my-8 text-left">
            <span className="mr-2 text-5xl font-extrabold">$29</span>
            <span className="text-gray-500 dark:text-gray-400">/month</span>
          </div>
          {/* List */}
          <ul role="list" className="mb-8 space-y-4 text-left">
            <li className="flex items-center space-x-3">
              {/* Icon */}
              <svg
                className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                  clipRule="evenodd"
                />
              </svg>
              <span>Individual configuration</span>
            </li>
            <li className="flex items-center space-x-3">
              {/* Icon */}
              <svg
                className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                  clipRule="evenodd"
                />
              </svg>
              <span>No setup, or hidden fees</span>
            </li>
            <li className="flex items-center space-x-3">
              {/* Icon */}
              <svg
                className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                  clipRule="evenodd"
                />
              </svg>
              <span>
                Team size: <span className="font-semibold">1 developer</span>
              </span>
            </li>
            <li className="flex items-center space-x-3">
              {/* Icon */}
              <svg
                className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                  clipRule="evenodd"
                />
              </svg>
              <span>
                Premium support: <span className="font-semibold">6 months</span>
              </span>
            </li>
            <li className="flex items-center space-x-3">
              {/* Icon */}
              <svg
                className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                  clipRule="evenodd"
                />
              </svg>
              <span>
                Free updates: <span className="font-semibold">6 months</span>
              </span>
            </li>
          </ul>
          <a
            href="#"
            className="text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:ring-primary-200 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:text-white  dark:focus:ring-primary-900"
          >
            Get started
          </a>
        </div>
        {/* Pricing Card */}
        <div className="flex flex-col p-6 mx-auto max-w-lg text-center  rounded-lg border border-gray-100 shadow  bg-black text-white">
          <h3 className="mb-4 text-2xl font-semibold">Company</h3>
          <p className="font-light text-gray-500 sm:text-lg dark:text-gray-400">
            Relevant for multiple users, extended &amp; premium support.
          </p>
          <div className="flex justify-center items-baseline my-8">
            <span className="mr-2 text-5xl font-extrabold">$99</span>
            <span className="text-gray-500 dark:text-gray-400">/month</span>
          </div>
          {/* List */}
          <ul role="list" className="mb-8 space-y-4 text-left">
            <li className="flex items-center space-x-3">
              {/* Icon */}
              <svg
                className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                  clipRule="evenodd"
                />
              </svg>
              <span>Individual configuration</span>
            </li>
            <li className="flex items-center space-x-3">
              {/* Icon */}
              <svg
                className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                  clipRule="evenodd"
                />
              </svg>
              <span>No setup, or hidden fees</span>
            </li>
            <li className="flex items-center space-x-3">
              {/* Icon */}
              <svg
                className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                  clipRule="evenodd"
                />
              </svg>
              <span>
                Team size: <span className="font-semibold">10 developers</span>
              </span>
            </li>
            <li className="flex items-center space-x-3">
              {/* Icon */}
              <svg
                className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                  clipRule="evenodd"
                />
              </svg>
              <span>
                Premium support:{" "}
                <span className="font-semibold">24 months</span>
              </span>
            </li>
            <li className="flex items-center space-x-3">
              {/* Icon */}
              <svg
                className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                  clipRule="evenodd"
                />
              </svg>
              <span>
                Free updates: <span className="font-semibold">24 months</span>
              </span>
            </li>
          </ul>
          <a
            href="#"
            className="text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:ring-primary-200 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:text-white  dark:focus:ring-primary-900"
          >
            Get started
          </a>
        </div>
        {/* Pricing Card */}
        <div className="flex flex-col p-6 mx-auto max-w-lg text-center text-gray-900 bg-white rounded-lg border border-gray-100 shadow  ">
          <h3 className="mb-4 text-2xl font-semibold">Enterprise</h3>
          <p className="font-light text-gray-500 sm:text-lg dark:text-gray-400">
            Best for large scale uses and extended redistribution rights.
          </p>
          <div className="flex justify-center items-baseline my-8">
            <span className="mr-2 text-5xl font-extrabold">$499</span>
            <span className="text-gray-500 dark:text-gray-400">/month</span>
          </div>
          {/* List */}
          <ul role="list" className="mb-8 space-y-4 text-left">
            <li className="flex items-center space-x-3">
              {/* Icon */}
              <svg
                className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                  clipRule="evenodd"
                />
              </svg>
              <span>Individual configuration</span>
            </li>
            <li className="flex items-center space-x-3">
              {/* Icon */}
              <svg
                className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                  clipRule="evenodd"
                />
              </svg>
              <span>No setup, or hidden fees</span>
            </li>
            <li className="flex items-center space-x-3">
              {/* Icon */}
              <svg
                className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                  clipRule="evenodd"
                />
              </svg>
              <span>
                Team size:{" "}
                <span className="font-semibold">100+ developers</span>
              </span>
            </li>
            <li className="flex items-center space-x-3">
              {/* Icon */}
              <svg
                className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                  clipRule="evenodd"
                />
              </svg>
              <span>
                Premium support:{" "}
                <span className="font-semibold">36 months</span>
              </span>
            </li>
            <li className="flex items-center space-x-3">
              {/* Icon */}
              <svg
                className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                  clipRule="evenodd"
                />
              </svg>
              <span>
                Free updates: <span className="font-semibold">36 months</span>
              </span>
            </li>
          </ul>
          <a
            href="#"
            className="text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:ring-primary-200 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:text-white  dark:focus:ring-primary-900"
          >
            Get started
          </a>
        </div>
      </div>
    </div>
  </section>

</div>
  );
}
export default Home;