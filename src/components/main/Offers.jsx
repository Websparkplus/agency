import { HiCheckCircle } from "react-icons/hi";
import { BsExclamationDiamondFill } from "react-icons/bs";
import Link from "next/link";

const Offers = () => {
  return (
    <section id="offers" className="px-6 md:px-12 lg:px-24 py-20">
      <div>
        <div className="col-span-2 t-6">
          <h2 className="text-3xl lg:text-4xl font-bold tracking-widest">
            SPECIAL OFFERS
          </h2>
          <p className="py-2.5 text-lg text-neutral-500 tracking-wide border-b border-neutral-500">
            Explore our amazing offers, and select what suits your needs
          </p>
        </div>

        <div className="col-span-10 lg:grid grid-cols-3 gap-6">
          <div
            className="m-10 md:mx-32 lg:mx-0 p-8 bg-sky-100 text-black h-full  
            rounded-sm grid place-items-center drop-shadow shadow-lg hover:shadow-xl">
            <div className="text-center pb-4 w-full border-b border-sky-400">
              <h4 className="text-xl font-medium tracking-widest bg-sky-200 p-2 mb-2 rounded-sm">
                STARTER
              </h4>
              <span className="text-4xl lg:text-5xl font-bold py-4">$0.00</span>
            </div>
            <ul className="font-medium my-6 lg:my-3 leading-8">
              <li className="text-base text-neutral-600 mb-1 font-normal tracking-wider">
                <p>What's included:</p>
              </li>
              <li className="flex items-center gap-2.5">
                <HiCheckCircle size={20} className="text-sky-300" />
                <p>Up to 2 custom pages</p>
              </li>
              <li className="flex items-center gap-2.5">
                <HiCheckCircle size={20} className="text-sky-300" />
                <p>Professional landing page</p>
              </li>
              <li className="flex items-center gap-2.5">
                <HiCheckCircle size={20} className="text-sky-300" />
                <p>Fully responsive design</p>
              </li>
              <li className="flex items-center gap-2.5">
                <HiCheckCircle size={20} className="text-sky-300" />
                <p>Social networks integration</p>
              </li>
              <li className="flex items-center gap-2.5">
                <HiCheckCircle size={20} className="text-sky-300" />
                <p>Affordable after-service support</p>
              </li>
            </ul>

            <Link href="/get-starter-website">
              <button
                className="text-xl text-white font-medium bg-black py-2 w-48
             rounded-full tracking-wide border-2 hover:bg-opacity-80">
                Apply
              </button>
            </Link>
          </div>

          <div
            className="m-10 md:mx-32 lg:mx-0 p-8 bg-sky-200 text-black h-full  
            rounded-sm grid place-items-center drop-shadow shadow-lg hover:shadow-xl">
            <div className="text-center pb-4 w-full border-b border-sky-50">
              <h4 className="text-xl font-medium tracking-widest bg-sky-100 p-2 mb-2 rounded-sm">
                PREMIUM
              </h4>
              <span className="text-4xl lg:text-5xl font-bold py-4">
                $1,200
              </span>
            </div>
            <ul className="font-medium my-6 lg:my-3 leading-8">
              <li className="text-base text-slate-800 mb-1 font-normal tracking-wider">
                <p>What's included:</p>
              </li>
              <li className="flex items-center gap-2.5">
                <HiCheckCircle size={20} className="text-sky-400" />
                <p>All starter offer benefits</p>
              </li>
              <li className="flex items-center gap-2.5">
                <HiCheckCircle size={20} className="text-sky-400" />
                <p>Up to 10 custom pages</p>
              </li>
              <li className="flex items-center gap-2.5">
                <HiCheckCircle size={20} className="text-sky-400" />
                <p>1 year free site hosting</p>
              </li>
              <li className="flex items-center gap-2.5">
                <HiCheckCircle size={20} className="text-sky-400" />
                <p>1 year free domain registration</p>
              </li>
              <li className="flex items-center gap-2.5">
                <HiCheckCircle size={20} className="text-sky-400" />
                <p>Google & Bing analytics setup</p>
              </li>
            </ul>

            <Link href="/get-premium-website">
              <button
                className="text-xl font-medium bg-black text-white py-2 w-48
             rounded-full tracking-wide border-2 hover:bg-opacity-80">
                Order Now
              </button>
            </Link>
          </div>

          <div
            className="m-10 md:mx-32 lg:mx-0 p-8 bg-neutral-800 bg-opacity-60 h-full  
            rounded-sm grid place-items-center border">
            <div
              className="flex flex-col items-center justify-center gap-2.5 p-4 text-white
            h-40 w-40 bg-black bg-opacity-60 rounded-full border-2 border-gray-200">
              <BsExclamationDiamondFill size={25} />
              <h4 className="text-xl text-center font-medium tracking-widest rounded-sm">
                CUSTOM <br /> ORDER
              </h4>
            </div>

            <p className="text-xl text-center my-8 lg:my-4">
              Do you have a unique website project tailored to your own custom
              requirements in mind? Let's discuss it, and bring your vision to
              life.
            </p>

            <Link href="#contact">
              <button
                className="text-xl text-black font-medium bg-gray-100 py-2 w-48 rounded-full 
                tracking-wide border hover:bg-gray-300">
                Contact Us
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Offers;
