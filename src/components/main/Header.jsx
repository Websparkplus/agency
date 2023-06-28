import { RiMenu5Fill } from "react-icons/ri";
import { FaRegTimesCircle } from "react-icons/fa";
import { SiBuymeacoffee } from "react-icons/si";
import { useState } from "react";
import Link from "next/link";

export default function Header() {
  const [nav, setNav] = useState(true);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <header
      className="p-6 md:px-12 lg:px-24 flex items-center justify-between sticky
   top-0 z-50 bg-black text-gray-100 lg:h-[15vh] border-b border-neutral-800">
      <Link href="/">
        <img
          src="/main/logo-black.jpg"
          alt="webspark+ logo"
          className="w-32 lg:w-40"
        />
      </Link>

      <div className="hidden lg:flex items-center space-x-8 divide-x">
        <ul className="flex ">
          <li
            onClick={handleNav}
            className=" ml-8 font-medium cursor-pointer tracking-wider hover:text-sky-300">
            <a href="/#services">
              <span className="hover:border-b-2 border-sky-100 pb-1">
                Services
              </span>
            </a>
          </li>
          <li
            onClick={handleNav}
            className=" ml-8 font-medium cursor-pointer tracking-wider hover:text-sky-300">
            <a href="/#about">
              <span className="hover:border-b-2 border-sky-100 pb-1">
                About
              </span>
            </a>
          </li>
          <li
            onClick={handleNav}
            className=" ml-8 font-medium cursor-pointer tracking-wider hover:text-sky-300">
            <a href="/#offers">
              <span className="hover:border-b-2 border-sky-100 pb-1">
                Offers
              </span>
            </a>
          </li>
          <li
            onClick={handleNav}
            className=" ml-8 font-medium cursor-pointer tracking-wider hover:text-sky-300">
            <a href="/#projects">
              <span className="hover:border-b-2 border-sky-100 pb-1">
                Projects
              </span>
            </a>
          </li>
        </ul>

        <div className="flex items-center">
          <Link href="https://www.buymeacoffee.com/websparkplus">
            <button
              onClick={handleNav}
              className="flex items-center justify-center gap-2 p-2 ml-8 w-40 border-2 
             font-medium rounded-sm text-gray-200 hover:border-b-4">
              <SiBuymeacoffee className="text-yellow-300" />
              <span>Support Us</span>
            </button>
          </Link>

          <a href="/#contact">
            <button
              onClick={handleNav}
              className="block p-2 ml-4 w-40 border-2 border-sky-100 font-medium rounded-sm
               text-black bg-gradient-to-r from-sky-300 to-sky-100 hover:border-b-4">
              <span>Get In Touch</span>
            </button>
          </a>
        </div>
      </div>

      <button onClick={handleNav} className="block lg:hidden">
        {nav ? (
          <RiMenu5Fill size={35} />
        ) : (
          <FaRegTimesCircle
            size={35}
            className="fixed right-5 md:right-20 top-6 z-20 text-white"
          />
        )}
      </button>

      <div
        className={
          !nav
            ? "fixed left-0 top-0 w-full h-full bg-gradient-to-br from-black to-neutral-900 ease-in-out duration-500 lg:hidden"
            : "fixed left-0 w-full ease-out duration-500 top-[-100%]"
        }>
        <div className="flex flex-col justify-center items-center h-full relative w-full z-50 text-center">
          <ul>
            <li className="text-3xl my-1 p-2 w-48 text-gray-200 tracking-wider hover:bg-neutral-800">
              <a href="/#services">
                <span onClick={handleNav}>Services</span>
              </a>
            </li>

            <li className="text-3xl my-1 p-2 w-48 text-gray-200 tracking-wider hover:bg-neutral-800">
              <a href="/#about">
                <span onClick={handleNav}>About</span>
              </a>
            </li>

            <li className="text-3xl my-1 p-2 w-48 text-gray-200 tracking-wider hover:bg-neutral-800">
              <a href="/#offers">
                <span onClick={handleNav}>Offers</span>
              </a>
            </li>

            <li className="text-3xl my-1 p-2 w-48 text-gray-200 tracking-wider hover:bg-neutral-800">
              <a href="/#projects">
                <span onClick={handleNav}>Projects</span>
              </a>
            </li>
          </ul>

          <div className="mt-6">
            <Link href="https://www.buymeacoffee.com/websparkplus">
              <button
                onClick={handleNav}
                className="flex items-center justify-center gap-1 p-2.5 mb-4 w-48 border-2 
            text-xl font-medium rounded-sm text-gray-200 hover:border-4">
                <SiBuymeacoffee className="text-yellow-300" />
                <span>Support Us</span>
              </button>
            </Link>

            <a href="/#contact">
              <button
                onClick={handleNav}
                className="block p-2.5 w-48 border-2 border-white text-xl font-medium 
            rounded-sm text-black bg-sky-100 hover:border-4">
                <span>Get In Touch</span>
              </button>
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
