import React from "react";

const Footer = () => {
  return (
    <section id="contact3" className="section bg-black text-white">
      <div className="py-20">
        <h2 className="text-5xl lg:text-6xl text-yellow-300 font-bold tracking-widest">
          LET'S <br /> CONNECT
        </h2>

        <p className="text-lg my-6">
          We would appreciate the opportunity to chat with you to discuss your
          business goals, challenges, and how we can assist you with your
          projects. You can reach out to us by simply completing the form below,
          and we will contact you.
        </p>

        <form className="lg:flex justify-between gap-12">
          <div className="lg:w-1/2">
            <input
              type="text"
              placeholder="Enter your name"
              className="bg-black border p-2.5 my-4 w-full"
            />
            <input
              type="text"
              placeholder="Enter your email"
              className="bg-black border p-2.5 my-4 w-full"
            />
            <input
              type="text"
              placeholder="Enter your phone number"
              className="bg-black border p-2.5 my-4 w-full"
            />
          </div>
          <div className="lg:w-1/2">
            <textarea
              name="message"
              placeholder="Enter your message"
              className="bg-black border p-2.5 my-4 w-full h-[13rem] resize-none"
            />
            <button className="text-lg font-medium bg-gray-300 text-black py-2 p10 w-full hover:bg-gray-400">
              Send Message
            </button>
          </div>
        </form>
      </div>

      <div className="pt-6 mt-6 border-t text-center lg:flex items-center justify-between">
        <p>Astron Media &copy; All Rights Reserved.</p>
        <button className="hover:underline">Terms and Conditions</button>
        <p className="font-medium text-yellow-300">Built by Webspark+</p>
      </div>
    </section>
  );
};

export default Footer;
