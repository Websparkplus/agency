import {
  FaTwitterSquare,
  FaFacebookSquare,
  FaInstagramSquare,
} from "react-icons/fa";

const Footer = () => {
  return (
    <section
      id="contact1"
      className="section bg-cyan-900 text-white mt-28 m-6 rounded-xl">
      <footer className="text-center lg:text-left">
        <div className="my-20 text-lg lg:flex items-start justify-between">
          <div className="mb-10 grid place-items-center">
            <div className="flex w-fit mb-2 border-4 border-white">
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

            <span className="tracking-widest text-xl text-center">
              LITSPRING <br /> NETWORK
            </span>
          </div>

          <div className="mb-10 lg:mb-0 grid place-items-center">
            <h5 className="font-medium mb-4 text-xl">Navigation</h5>

            <ul className="text-center">
              <li className="hover:underline cursor-pointer">Home</li>
              <li className="hover:underline cursor-pointer">About Us</li>
              <li className="hover:underline cursor-pointer">Impact Numbers</li>
              <li className="hover:underline cursor-pointer">Programmes</li>
            </ul>
          </div>

          <div className="mb-10 lg:mb-0  grid place-items-center">
            <h5 className="font-medium text-xl">Get In Touch</h5>

            <div className="my-4  grid place-items-center">
              <span>support@litspringnet.com</span>
              <p> (+233) 559 800 9811 </p>
              <div className="flex items-center gap-2 mt-4">
                <FaTwitterSquare size={30} />
                <FaFacebookSquare size={30} />
                <FaInstagramSquare size={30} />
              </div>
            </div>
          </div>

          <div className="mb-6 lg:mb-0 grid place-items-center">
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
          <p>LitSpring Network &copy; All Rights Reserved. </p>
          <p>Terms & Conditions</p>
          <p className="font-bold text-cyan-100">Built by Webspark+</p>
        </div>
      </footer>
    </section>
  );
};

export default Footer;
