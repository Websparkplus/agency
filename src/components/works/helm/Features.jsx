import { AiOutlineFieldTime } from "react-icons/ai";
import { IoMdWifi } from "react-icons/io";
import { MdShareLocation } from "react-icons/md";
import { TbCoffee } from "react-icons/tb";

const Features = () => {
  return (
    <section id="facilities2" className="section">
      <div
        className="lg:flex items-center justify-between bg-black text-white
       p-16 mt-12 mb-28 rounded-lg">
        <div className="lg:w-[45%] mb-8 lg:mb-0">
          <h2 className="mb-8 lg:mb-0 text-3xl lg:text-5xl text-gray-200 font-medium tracking-wide text-center lg:text-left">
            Find a workspace that suits all your professional needs.
          </h2>
        </div>

        <div className="lg:w-[45%]">
          <ul className="grid grid-cols-2 gap-10">
            <li className="flex flex-col items-center justify-between text-center font-medium">
              <span className="text-6xl text-red-200 font-extrabold">60</span>
              <span>Available Workspaces</span>
            </li>
            <li className="flex flex-col items-center justify-between font-medium">
              <span className="text-6xl text-red-200 font-extrabold">05</span>
              <span>Event Spaces</span>
            </li>
            <li className="flex flex-col items-center justify-between font-medium">
              <span className="text-6xl text-red-200 font-extrabold">11</span>
              <span>Creative Studios</span>
            </li>
            <li className="flex flex-col items-center justify-between font-medium">
              <span className="text-6xl text-red-200 font-extrabold">24</span>
              <span>Hours A Day</span>
            </li>
          </ul>
        </div>
      </div>

      <div>
        <h2 className="text-4xl lg:text-5xl text-gray-600 font-medium tracking-wide text-center">
          Work & Relax In A Unique Environment
        </h2>

        <ul className="my-12 grid grid-cols-2 lg:grid-cols-4 gap-6">
          <li className="p-6 bg-red-100 bg-opacity-60 rounded-md hover:shadow-md hover:bg-white">
            <span className="text-red-700">
              <AiOutlineFieldTime size={60} />
            </span>
            <h3 className="my-4 text-2xl font-medium">24/7 Access</h3>
            <p>
              We are always open: 24 hours a day, 7 days a week. The grind never
              stops with us.
            </p>
          </li>

          <li className="p-6 bg-red-100 bg-opacity-60 rounded-md hover:shadow-md hover:bg-white">
            <span className="text-red-700">
              <IoMdWifi size={60} />
            </span>
            <h3 className="my-4 text-2xl font-medium">Fast Wifi</h3>
            <p>
              Stay connected to the web and focus on your work with our
              super-fast internet.
            </p>
          </li>

          <li className="p-6 bg-red-100 bg-opacity-60 rounded-md hover:shadow-md hover:bg-white">
            <span className="text-red-700">
              <MdShareLocation size={60} />
            </span>
            <h3 className="my-4 text-2xl font-medium">Great Location</h3>
            <p>
              We are located in the heart of the city of Melbourne, where we are
              easily accessible to all.
            </p>
          </li>

          <li className="p-6 bg-red-100 bg-opacity-60 rounded-md hover:shadow-md hover:bg-white">
            <span className="text-red-700">
              <TbCoffee size={60} />
            </span>
            <h3 className="my-4 text-2xl font-medium">Free Coffee</h3>
            <p>
              Need a break? You can always grab a cup of coffee when you need to
              refresh and recharge.
            </p>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Features;
