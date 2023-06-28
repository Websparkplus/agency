import React from "react";

const About = () => {
  return (
    <section
      id="about"
      className="bg-gradient-to-br from-black via-neutral-900 to-neutral-950 
      px-4 text-white">
      <div className="px-6 md:px-12 lg:px-24 py-20">
        <div className="my-6">
          <h2 className="text-3xl lg:text-4xl font-bold tracking-widest">
            WHO ARE WE
          </h2>
          <p className="py-2.5 text-lg text-neutral-500 tracking-wide border-b border-neutral-500">
            The trusted web agency invested their clients' success
          </p>
        </div>

        <div className="lg:flex justify-between gap-10 my-4">
          <p className="my-4 text-2xl lg:text-4xl lg:w-1/2">
            At Webspark, we are passionate about helping businesses thrive
            online, and always go the extra mile to exceed expectations.
          </p>

          <div className="lg:w-1/2">
            <p className="my-4">
              We understand that every business has its own vision and budgetary
              constraints. That's why we provide personalized cost-effective web
              solutions without compromising on quality.
            </p>
            <p className="my-4">
              Whether you need a simple website or have more complex website
              project in mind, we have the expertise to bring your vision to
              life. With us, you're not just getting a website; you're gaining a
              strategic advantage over your competition.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
