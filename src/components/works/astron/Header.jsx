import { BiGridAlt } from "react-icons/bi";
import { FaRegTimesCircle } from "react-icons/fa";
import { RiSpaceShipFill } from "react-icons/ri";
import { useState } from "react";
import Link from "next/link";

export default function Header() {
  const [nav, setNav] = useState(true);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <header className="p-5 py-6 md:px-20 xl:px-40 h-[20vh]">
      <div className="flex items-center justify-between bg-black text-white p-6 rounded-sm lg:mt-4">
        <div className="flex gap-1">
          <RiSpaceShipFill size={45} />
          <h1 className="flex flex-col leading-4">
            <span className="font-bold text-xl">ASTRON</span>
            <span className="tracking-widest">MEDIA</span>
          </h1>
        </div>

        <ul className="hidden lg:flex uppercase">
          <Link href="#capabilities3">
            <li
              onClick={handleNav}
              className=" ml-8 font-medium cursor-pointer tracking-wider hover:font-bold hover:text-yellow-300">
              Capabilities
            </li>
          </Link>

          <Link href="#process3">
            <li
              onClick={handleNav}
              className=" ml-8 font-medium cursor-pointer tracking-wider hover:font-bold hover:text-yellow-300">
              Process
            </li>
          </Link>

          <Link href="#portfolio3">
            <li
              onClick={handleNav}
              className=" ml-8 font-medium cursor-pointer tracking-wider hover:font-bold hover:text-yellow-300">
              Portfolio
            </li>
          </Link>

          <Link href="#contact3">
            <li
              onClick={handleNav}
              className=" ml-8 font-medium cursor-pointer tracking-wider hover:font-bold hover:text-yellow-300">
              Contact
            </li>
          </Link>
        </ul>

        <button onClick={handleNav} className="block lg:hidden">
          {nav ? (
            <BiGridAlt size={35} />
          ) : (
            <FaRegTimesCircle
              size={35}
              className="fixed right-10 md:right-24 top-14 z-20 text-white"
            />
          )}
        </button>

        <div
          className={
            !nav
              ? "fixed left-0 top-0 w-full h-full bg-black text-yellow-300 ease-in-out duration-500 lg:hidden"
              : "fixed left-0 w-full ease-out duration-500 top-[-100%]"
          }>
          <ul className="uppercase flex flex-col justify-center items-center h-full relative w-full z-50">
            <Link href="#capabilities3">
              <li
                onClick={handleNav}
                className="py-5 font-semibold text-4xl tracking-widest w-80 border-b border-white border-opacity-20 cursor-pointer hover:font-extrabold">
                Capabilities
              </li>
            </Link>

            <Link href="#process3">
              <li
                onClick={handleNav}
                className="py-5 font-semibold text-4xl tracking-widest w-80 border-b border-white border-opacity-20 cursor-pointer hover:font-extrabold">
                Process
              </li>
            </Link>

            <Link href="#portfolio3">
              <li
                onClick={handleNav}
                className="py-5 font-semibold text-4xl tracking-widest w-80 border-b border-white border-opacity-20 cursor-pointer hover:font-extrabold">
                Portfolio
              </li>
            </Link>

            <Link href="#contact3">
              <li
                onClick={handleNav}
                className="py-5 font-semibold text-4xl tracking-widest w-80 border-b border-white border-opacity-20 cursor-pointer hover:font-extrabold">
                Contact
              </li>
            </Link>
          </ul>
        </div>
      </div>
    </header>
  );
}
