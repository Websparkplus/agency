import Link from "next/link";
import {
  FaTwitterSquare,
  FaFacebookSquare,
  FaInstagramSquare,
} from "react-icons/fa";
import { SiHelm } from "react-icons/si";

const Footer = () => {
  return (
    <section className="section bg-red-700 text-white mt-28">
      <div
        id="contact"
        className="bg-main-100 text-main-200 bg-black text-white
        relative bottom-40 border-8 border-gray-50 rounded-lg">
        <div className="grid place-items-center p-8 lg:p-12 md:flex items-center justify-evenly gap-8">
          <p className="text-2xl lg:text-3xl text-center lg:text-left mb-2 md:mb-0 md:w-1/2 lg:w-2/3">
            If you have any enquiries to make about our workspaces or just want
            to say hello, feel free to reach out to us.
          </p>

          <Link href="/projects/helm-spaces">
            <button
              className="text-xl font-medium px-6 py-3 rounded-md text-white 
          border-2 border-white hover:bg-gray-600">
              Contact Us
            </button>
          </Link>
        </div>
      </div>

      <footer>
        <div className="-mt-16 mb-20 text-lg lg:flex items-start justify-between">
          <div className="mb-10">
            <SiHelm size={100} />
          </div>

          <div className="mb-10 lg:mb-0">
            <h5 className="font-medium mb-4 text-xl">Address</h5>

            <p className="my-4">
              Whitmore Building, <br /> 44 Barker Street. <br />
              Melbourne.
            </p>
          </div>

          <div className="mb-10 lg:mb-0">
            <h5 className="font-medium mb-4 text-xl">Get In Touch</h5>

            <div className="my-4">
              <p>info@helmspaces.com</p>
              <p> (08) 8385 2065 </p>
              <div className="flex items-center gap-2 mt-4">
                <FaTwitterSquare size={30} />
                <FaFacebookSquare size={30} />
                <FaInstagramSquare size={30} />
              </div>
            </div>
          </div>

          <div className="mb-6 lg:mb-0">
            <h5 className="font-medium mb-4 text-xl">
              Sign Up For Our Newsletter
            </h5>
            <p>Join our mailing list to get the latest updates</p>
            <form className="bg-white w-fit mt-4">
              <input
                type="text"
                placeholder="Enter your email"
                className="m-1 p-1 border-none text-black text-sm"
              />
              <button type="submit" className="bg-black p-2 px-6">
                Subscribe
              </button>
            </form>
          </div>
        </div>

        <div className="pt-6 mt-6 border-t text-center lg:flex items-center justify-between">
          <p>Helm Spaces &copy; All Rights Reserved. </p>
          <p>Terms & Conditions</p>
          <p className="font-bold text-red-100">Built by Webspark+</p>
        </div>
      </footer>
    </section>
  );
};

export default Footer;
