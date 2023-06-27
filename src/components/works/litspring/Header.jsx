import { MdMenu } from "react-icons/md";
import { FaRegTimesCircle } from "react-icons/fa";
import { useState } from "react";

export default function Header() {
  const [nav, setNav] = useState(true);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <header
      className="p-5 py-6 md:px-20 xl:px-40 flex items-center justify-between 
   top-0 z-50 bg-white h-[15vh]">
      <div className="flex">
        <span className="bg-cyan-900 text-cyan-100 h-10 w-10 text-3xl font-extrabold grid place-items-center">
          L
        </span>
        <span className="bg-cyan-600 text-cyan-100 h-10 w-10 text-3xl font-extrabold grid place-items-center">
          S
        </span>
        <span className="bg-cyan-300 text-cyan-800 h-10 w-10 text-3xl font-extrabold grid place-items-center">
          N
        </span>
      </div>

      <ul className="hidden lg:flex text-lg">
        <li>
          <a href="#about1">
            <span
              onClick={handleNav}
              className=" ml-8 font-medium cursor-pointer tracking-wider hover:text-cyan-400">
              About
            </span>
          </a>
        </li>

        <li>
          <a href="#programmes1">
            <span
              onClick={handleNav}
              className=" ml-8 font-medium cursor-pointer tracking-wider hover:text-cyan-400">
              Programmes
            </span>
          </a>
        </li>

        <li>
          <a href="#contact1">
            <span
              onClick={handleNav}
              className=" ml-8 font-medium cursor-pointer tracking-wider hover:text-cyan-400">
              Contact
            </span>
          </a>
        </li>
      </ul>

      <a href="#support1">
        <button
          onClick={handleNav}
          className="hidden lg:block py-2 px-6 text-lg font-medium rounded-full bg-cyan-200 text-cyan-950 hover:bg-cyan-100">
          <span>Join Our Community</span>
        </button>
      </a>

      <button onClick={handleNav} className="block lg:hidden">
        {nav ? (
          <MdMenu size={35} className="bg-cyan-800 text-white p-1" />
        ) : (
          <FaRegTimesCircle
            size={35}
            className="fixed right-5 md:right-20 top-5 z-20 text-white"
          />
        )}
      </button>

      <div
        className={
          !nav
            ? "fixed left-0 top-0 w-full h-full bg-cyan-950 text-cyan-200 ease-in-out duration-500 lg:hidden"
            : "fixed left-0 w-full ease-out duration-500 top-[-100%]"
        }>
        <ul className="flex flex-col justify-center items-center h-full relative w-full z-50 text-center">
          <li className="py-5 font-semibold text-4xl w-80 border-b border-white border-opacity-20 cursor-pointer hover:text-white">
            <a href="#about1">
              <span onClick={handleNav}>About</span>
            </a>
          </li>

          <li className="py-5 font-semibold text-4xl w-80 border-b border-white border-opacity-20 cursor-pointer hover:text-white">
            <a href="#programmes1">
              <span onClick={handleNav}>Programmes</span>
            </a>
          </li>

          <li className="py-5 font-semibold text-4xl w-80 border-b border-white border-opacity-20 cursor-pointer hover:text-white">
            <a href="#contact1">
              <span onClick={handleNav}>Contact</span>
            </a>
          </li>

          <li className="py-5 font-semibold text-4xl w-80 border-b border-white border-opacity-20 cursor-pointer hover:text-white">
            <a href="#support1">
              <span onClick={handleNav}>Join Our Community</span>
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
}
