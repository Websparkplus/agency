import { AiFillExclamationCircle } from "react-icons/ai";
import Link from "next/link";

const Process = () => {
  return (
    <section className="m-6 md:mx-24 lg:m-0 lg:flex justify-center">
      <div className="lg:w-1/2 p-12 lg:px-24 lg:h-screen bg-sky-200 lg:sticky left-0 top-0">
        <div className="w-full lg:my-6">
          <h2 className="text-3xl lg:text-5xl font-extrabold">
            LET'S SUPERCHARGE YOUR WEB PRESENCE
          </h2>

          <p className="text-lg my-6">
            Take this opportunity and apply for a free website. We support
            growing organizations by helping them establish an impactful online
            presence free of charge. And we appreciate any support we get in
            return, which can be in the form of a
            <Link href="https://www.buymeacoffee.com/websparkplus">
              <span className="text-neutral-600 cursor-pointer hover:underline mx-1">
                small donation, membership sign up,
              </span>
            </Link>
            or a referral. It inspires to keep doing what we do.
          </p>

          <Link href="/survey-starter">
            <button
              className="w-full p-4 mt-6 font-bold bg-black text-white
         text-xl tracking-widest hover:bg-opacity-80 hidden lg:block">
              START PROJECT
            </button>
          </Link>
        </div>
      </div>

      <div className="lg:w-1/2 lg:px-24 pt-10 lg:pt-20">
        <div className="flex items-center gap-2 p-2 px-6 bg-amber-200 text-amber-600 rounded-full w-fit">
          <AiFillExclamationCircle size={22} />
          <span className="font-medium tracking-widest">NOTE:</span>
        </div>

        <div className="text-lg">
          <p className="my-4">
            With our starter offer, we help you kickstart your online journey
            with a free professionally crafted website. However, you are
            responsible for the cost of securing a hosting provider, and
            registering your desired domain name. These essential components are
            necessary for the functionality and accessibility of the website we
            create.
          </p>

          <p className="my-4 pb-8">
            In case you prefer to have us handle your domain, hosting or entire
            website management, you can
            <Link href="https://www.buymeacoffee.com/websparkplus/membership">
              <span className="text-blue-500 cursor-pointer hover:underline ml-1">
                join our membership
              </span>
            </Link>
            , and get access to our on-going support. Whether you decide to
            handle hosting yourself or opt for our comprehensive service, we are
            committed to helping you thrive.
          </p>
        </div>
      </div>

      <Link href="/survey-starter">
        <button
          className="w-full p-4 mb-4 font-bold bg-black text-white
         text-xl tracking-widest hover:bg-opacity-80 lg:hidden">
          START PROJECT
        </button>
      </Link>
    </section>
  );
};
export default Process;
