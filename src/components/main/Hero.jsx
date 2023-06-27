import { BiRightArrowCircle } from "react-icons/bi";
import Link from "next/link";

const Hero = () => {
  return (
    <section className="mx-6 md:mx-12 lg:mx-24 mt-16 lg:mt-0 lg:h-[85vh] lg:grid place-content-center">
      <div className="lg:flex items-center justify-center">
        <div className="lg:w-1/2">
          <h1 className="text-5xl font-semibold">
            <span
              className="bg-gradient-to-r from-sky-300 via-sky-200 to-white font-bold
              inline-block text-transparent bg-clip-text">
              Exceptional Web <br /> Solutions That <br /> Make A Difference
            </span>
          </h1>

          <p className="my-8 text-xl text-neutral-500 md:w-3/4 lg:w-4/5">
            Unlock your digital potential. Let us build your dream website, and
            get you closer to your goals.
          </p>

          <Link href="#offers">
            <button
              className="pl-6 md:pl-12 lg:pl-24 flex items-center gap-0.5 h-16 lg:h-20 relative right-6 md:right-12 lg:right-24
             bg-sky-200 bg-opacity-10 hover:bg-opacity-20">
              <div className="h-16 lg:h-20 px-6 text-xl tracking-widest font-bold grid place-items-center uppercase">
                Start A Project
              </div>
              <div
                className="w-16 h-16 lg:w-20 lg:h-20 grid place-items-center rounded-r-sm
            border-l border-black">
                <BiRightArrowCircle size={35} />
              </div>
            </button>
          </Link>
        </div>

        <div className="lg:flex items-center lg:w-1/2 lg:pl-12">
          <img
            src="/main/bg-image.jpg"
            alt="laptop_img"
            className="mt-20 lg:mt-0 block object-cover md:w-1/2 lg:w-4/5 rounded-sm"
          />

          <div
            className="bg-sky-300 text-black p-6 mx-4 lg:mx-0 rounded-sm border-4 border-black relative bottom-48 
          md:bottom-72 md:left-72 lg:bottom-auto lg:absolute lg:left-auto lg:right-24 md:w-96 z-10">
            <span className="font-medium text-lg tracking-wider border-l-2 border-white pl-2">
              SPECIAL OFFER
            </span>
            <p className="my-2.5 font-semibold text-xl bg-black text-white p-4 tracking-wide">
              Free Websites For Small Businesses and Non-Profits
            </p>
            <p className="mt-4">
              We understand the unique challenges faced by businesses or
              organizations on a tight budget, and provide free starter websites
              to help boost your visiblity and growth.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
