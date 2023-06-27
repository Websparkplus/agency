import Link from "next/link";
import { SiHelm } from "react-icons/si";

export default function Header() {
  return (
    <header
      className="p-5 py-6 md:px-20 xl:px-40 flex items-center justify-between 
    border-b sticky top-0 z-50 bg-gray-50 lg:h-[15vh]">
      <div className="text-red-700">
        <SiHelm size={60} />
      </div>

      <div className="flex items-center">
        <Link href="#facilities2">
          <h2
            className="px-5 text-xl cursor-pointer tracking-wider
          border-r border-black hover:text-red-700 hidden lg:block">
            Facilities
          </h2>
        </Link>

        <Link href="#pricing2">
          <h2
            className="px-5 text-xl cursor-pointer tracking-wider
          border-r border-black hover:text-red-700 hidden lg:block">
            Pricing
          </h2>
        </Link>

        <Link href="#contact">
          <button
            className="text-red-700 font-sans border-2 border-red-700 py-2 px-4 ml-6
       font-semibold tracking-wide rounded-md hover:border-b-4">
            Book Your Space
          </button>
        </Link>
      </div>
    </header>
  );
}
