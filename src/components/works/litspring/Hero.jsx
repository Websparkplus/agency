import { GiRead } from "react-icons/gi";

const Hero = () => {
  return (
    <section className="section lg:h-[85vh] text-center lg:text-left">
      <div>
        <div className="my-6 grid place-items-center text-center">
          <h1
            className="text-6xl tracking-tight font-bold bg-gradient-to-r from-cyan-900 via-cyan-600  to-cyan-600 
        inline-block text-transparent bg-clip-text">
            WELCOME TO <br />
            LITSPRING NETWORK
          </h1>
        </div>

        <div className=" lg:flex gap-5 items-center justify-between mt-12">
          <h3 className="text-4xl lg:text-5xl my-4 lg:w-1/2 pr-0 lg:pr-16 border-collapse lg:border-r border-gray-500">
            Support A Good Cause. Join Us In This Mission.
          </h3>
          <div className="lg:w-1/2 my-4 pl-0 lg:pl-10">
            <p>
              Our goal is to promote literacy in deprived communities through
              the construction of libraries, tailored mentorships, digital
              skills training, and other educational support networks.
            </p>

            <div className="flex items-center justify-center lg:justify-start gap-4 mt-6 text-lg font-medium">
              <button className="border-2 border-cyan-900 rounded-full bg-cyan-900 text-gray-50 p-2 w-32 hover:border-white">
                Donate
              </button>
              <button className="border-2 border-cyan-800 rounded-full bg-white p-2 w-32 hover:border-white hover:bg-cyan-100">
                Volunteer
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
