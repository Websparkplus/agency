import { MdOutlineRadioButtonChecked } from "react-icons/md";

const Offers = () => {
  return (
    <section id="pricing2" className="p-5 md:px-20 xl:px-40 py-24">
      <h2 className="text-4xl text-gray-600 lg:text-5xl font-medium tracking-wide text-center">
        Check Out Our Affordable Membership Pricing Plans
      </h2>

      <div className="lg:flex items-center justify-between gap-5 mb-12">
        <div
          className="md:w-[25rem] lg:w-full my-12 mx-4 md:mx-auto lg:mx-0 p-8 grid place-items-center bg-white
            drop-shadow-lg rounded-lg border-t-8 border-red-300">
          <h3 className="text-2xl tracking-wider font-medium mb-4 uppercase">
            BASIC
          </h3>
          <div className="flex items-start justify-center pt-2 pb-4 border-y w-full">
            <h4 className="text-5xl text-gray-800 font-bold pr-1">$150</h4>
            <span className="text-xs pt-2">monthly</span>
          </div>

          <ul className="py-4 font-medium">
            <li className="flex items-center gap-2.5 py-1.5">
              <MdOutlineRadioButtonChecked size={15} className="text-red-700" />
              <span>Open Space</span>
            </li>
            <li className="flex items-center gap-2.5 py-1.5">
              <MdOutlineRadioButtonChecked size={15} className="text-red-700" />
              <span>High Speed Internet</span>
            </li>
            <li className="flex items-center gap-2.5 py-1.5">
              <MdOutlineRadioButtonChecked size={15} className="text-red-700" />
              <span>Hassle-Free Setup</span>
            </li>
            <li className="flex items-center gap-2.5 py-1.5">
              <MdOutlineRadioButtonChecked size={15} className="text-red-700" />
              <span>Printer & Scanner Access</span>
            </li>
            <li className="flex items-center gap-2.5 py-1.5">
              <MdOutlineRadioButtonChecked size={15} className="text-red-700" />
              <span>Shared Workspace</span>
            </li>
          </ul>

          <button
            className="bg-red-700 text-white text-main-200 font-sans tracking-widest w-full
           font-semibold py-3 px-10 mt-6 rounded-md hover:bg-gray-600">
            JOIN NOW
          </button>
        </div>

        <div
          className="md:w-[25rem] lg:w-full my-12 mx-4 md:mx-auto lg:mx-0 p-8 grid place-items-center bg-white
            drop-shadow-lg rounded-lg border-t-8 border-red-400">
          <h3 className="text-2xl tracking-wider font-medium mb-4 uppercase">
            STANDARD
          </h3>
          <div className="flex items-start justify-center pt-2 pb-4 border-y w-full">
            <h4 className="text-5xl text-gray-800 font-bold pr-1">$285</h4>
            <span className="text-xs pt-2">monthly</span>
          </div>

          <ul className="py-4 font-medium">
            <li className="flex items-center gap-2.5 py-1.5">
              <MdOutlineRadioButtonChecked size={15} className="text-red-700" />
              <span> Planted Desk</span>
            </li>
            <li className="flex items-center gap-2.5 py-1.5">
              <MdOutlineRadioButtonChecked size={15} className="text-red-700" />
              <span>High Speed Internet</span>
            </li>
            <li className="flex items-center gap-2.5 py-1.5">
              <MdOutlineRadioButtonChecked size={15} className="text-red-700" />
              <span>Hassle-Free Setup</span>
            </li>
            <li className="flex items-center gap-2.5 py-1.5">
              <MdOutlineRadioButtonChecked size={15} className="text-red-700" />
              <span>Printer & Scanner Access</span>
            </li>
            <li className="flex items-center gap-2.5 py-1.5">
              <MdOutlineRadioButtonChecked size={15} className="text-red-700" />
              <span>Dedicated Workspace</span>
            </li>
          </ul>

          <button
            className="bg-red-700 text-white text-main-200 font-sans tracking-widest w-full
           font-semibold py-3 px-10 mt-6 rounded-md hover:bg-gray-600">
            JOIN NOW
          </button>
        </div>

        <div
          className="md:w-[25rem] lg:w-full my-12 mx-4 md:mx-auto lg:mx-0 p-8 grid place-items-center bg-white
            drop-shadow-lg rounded-lg border-t-8 border-red-600">
          <h3 className="text-2xl tracking-wider font-medium mb-4 uppercase">
            ELITE
          </h3>
          <div className="flex items-start justify-center pt-2 pb-4 border-y w-full">
            <h4 className="text-5xl text-gray-800 font-bold pr-1">$400</h4>
            <span className="text-xs pt-2">monthly</span>
          </div>

          <ul className="py-4 font-medium">
            <li className="flex items-center gap-2.5 py-1.5">
              <MdOutlineRadioButtonChecked size={15} className="text-red-700" />
              <span>Private Office</span>
            </li>
            <li className="flex items-center gap-2.5 py-1.5">
              <MdOutlineRadioButtonChecked size={15} className="text-red-700" />
              <span>High Speed Internet</span>
            </li>
            <li className="flex items-center gap-2.5 py-1.5">
              <MdOutlineRadioButtonChecked size={15} className="text-red-700" />
              <span>Hassle-Free Setup</span>
            </li>
            <li className="flex items-center gap-2.5 py-1.5">
              <MdOutlineRadioButtonChecked size={15} className="text-red-700" />
              <span>Printer & Scanner Access</span>
            </li>
            <li className="flex items-center gap-2.5 py-1.5">
              <MdOutlineRadioButtonChecked size={15} className="text-red-700" />
              <span>Customizable Workspace</span>
            </li>
          </ul>

          <button
            className="bg-red-700 text-white text-main-200 font-sans tracking-widest w-full
           font-semibold py-3 px-10 mt-6 rounded-md hover:bg-gray-600">
            JOIN NOW
          </button>
        </div>
      </div>
    </section>
  );
};

export default Offers;
