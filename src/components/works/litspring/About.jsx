import React from "react";
import Figures from "./Figures";

const About = () => {
  return (
    <section id="about1">
      <div className="section text-center lg:text-left">
        <div className="pt-24 border-t border-cyan-800">
          <h2 className="text-4xl text-cyan-950 font-bold bg-cyan-200 p-4 w-fit mx-auto lg:mx-0">
            ABOUT US
          </h2>

          <div className=" lg:flex items-center justify-between gap-12">
            <div className="mt-6 lg:w-1/2">
              <p className="text-2xl lg:text-3xl mb-6">
                At LitSpring Network, we are working to achieve the UN SDG4
                Target 4.6 that says: By 2030, we should ensure that all youth
                and a substantial proportion of adults, achieve literacy and
                numeracy.
              </p>
            </div>
            <div className="mt-6 lg:w-1/2">
              <p className="text-2xl lg:text-3xl mb-6">
                We aim to connect students living in rural and underserved areas
                across West Africa with the educational opportunities and
                resources they lack, as well as guide them towards a better
                future.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
