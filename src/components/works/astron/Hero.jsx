import React from "react";

const Hero = () => {
  return (
    <section className="px-5 pt-8 pb-24 lg:pb-0 md:px-20 xl:px-40 lg:h-[80vh]">
      <div className="lg:flex items-center justify-between gap-6">
        <div className="lg:w-2/5">
          <h1 className="text-5xl lg:text-6xl font-bold py-4">
            THE PREMIER <br /> CREATIVE <br />
            AGENCY
          </h1>
          <p className="text-lg py-6">
            We build top-tier creative solutions. Work with us if you're looking
            for an innovative way to differentiate your brand, service or
            campaign.
          </p>
        </div>

        <div className="lg:w-3/5 md:flex md:justify-evenly xl:justify-between">
          <img
            className=" object-cover w-full grid place-items-center md:w-[22rem] lg:w-[26rem]"
            src="/projects/astronaut.png"
            alt="astronaut-bg-image"
          />

          <div className="flex md:flex-col md:justify-around items-center justify-evenly">
            <svg
              viewBox="0 0 100 100"
              width="120"
              height="120"
              className="p-2 border-2 border-black bg-yellow-200 font-medium rounded-full">
              <defs>
                <path
                  id="circle"
                  d="
            M 50, 50
            m -37, 0
            a 37,37 0 1,1 74,0
            a 37,37 0 1,1 -74,0
          "
                />
              </defs>
              <text fontSize="14.5">
                <textPath xlinkHref="#circle">
                  Astron Media - Premium Services -
                </textPath>
              </text>
            </svg>

            <div className="flex flex-col border-t border-black py-2">
              <span className="font-mono font-bold text-xl">CREATIVE</span>
              <span className="text-3xl font-thin tracking-wider -mt-2">
                studio
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
