import React from "react";

const Portfolio = () => {
  return (
    <section id="portfolio3" className="section bg-white text-black">
      <div className="py-24">
        <h2 className="text-5xl tracking-widest pb-6">OUR PORTFOLIO</h2>

        <div className="my-8 grid lg:grid-cols-5 gap-6">
          <div className="block lg:col-span-2">
            <img
              src="/projects/astron-img1.jpg"
              alt="portfolio_image"
              className="w-full block object-cover lg:h-[20rem]"
            />
          </div>
          <div className="bg-yellow-700 text-yellow-200 p-10 text-5xl font-medium row-span-2 lg:row-span-1 lg:col-span-2">
            CREATE <br />
            INNOVATE <br />
            ELEVATE
          </div>
          <div className="block lg:col-span-1">
            <img
              src="/projects/astron-img3.jpg"
              alt="portfolio_image"
              className="w-full block object-cover lg:h-[20rem]"
            />
          </div>
          <div className="block lg:col-span-1">
            <img
              src="/projects/astron-img4.jpg"
              alt="portfolio_image"
              className="w-full block object-cover lg:h-[20rem]"
            />
          </div>
          <div className="block lg:col-span-2">
            <img
              src="/projects/astron-img5.jpg"
              alt="portfolio_image"
              className="w-full block object-cover lg:h-[20rem]"
            />
          </div>
          <div className="block lg:col-span-2">
            <img
              src="/projects/astron-img6.jpg"
              alt="portfolio_image"
              className="w-full block object-cover lg:h-[20rem]"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
