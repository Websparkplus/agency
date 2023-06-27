import React from "react";

const Activities = () => {
  return (
    <section className="section">
      <h2 className="my-10 text-4xl text-gray-600 lg:text-5xl font-medium tracking-wide text-center">
        Creating Convenience And Connections
      </h2>
      <div className="border-y border-gray-400 py-12 lg:flex items-center justify-between">
        <div className="lg:w-2/5">
          <img
            src="/projects/helm-cowork.jpg"
            alt="activities-helmspaces"
            className="w-full block object-cover mb-6 rounded-md"
          />
        </div>
        <div className="lg:w-2/5">
          <h3 className="text-4xl lg:text-5xl text-red-700 font-medium mb-4 tracking-wide">
            Co-working & <br /> Networking
          </h3>
          <p>
            By working alongside other professionals in a shared space, we
            create an avenue to build connections, network, and collaborate with
            others in their industry which can also lead to new opportunities,
            such as partnerships, referrals, and new business leads
          </p>
        </div>
      </div>

      <div className="border-b border-gray-400 py-12 lg:flex flex-row-reverse items-center justify-between">
        <div className="lg:w-2/5">
          <img
            src="/projects/helm-workshop.jpg"
            alt="activities-helmspaces"
            className="w-full block object-cover mb-6 rounded-md"
          />
        </div>
        <div className="lg:w-2/5">
          <h3 className="text-4xl lg:text-5xl text-red-700 font-medium mb-4 tracking-wide">
            Masterclasses / <br /> Workshops
          </h3>
          <p>
            With our links to a number of established professionals across
            various industries, you will have access to frequent insightful
            workshops. Covering a wide array of relevant tops ranging from
            personal development to entrepreneurship, there's something for
            everyone.
          </p>
        </div>
      </div>

      <div className="border-b border-gray-400 py-12 lg:flex items-center justify-between">
        <div className="lg:w-2/5">
          <img
            src="/projects/helm-event.jpg"
            alt="activities-helmspaces"
            className="w-full block object-cover mb-6 rounded-md"
          />
        </div>
        <div className="lg:w-2/5">
          <h3 className="text-4xl lg:text-5xl text-red-700 font-medium mb-4 tracking-wide">
            Events & <br /> Mixers
          </h3>
          <p>
            At Helm Spaces, we have a community that works hard, but also play
            hard to get some of the stress off. We have a very packed calendar
            of exciting events and activities to enable our community to
            interact in a more relaxed atmosphere, and have some fun.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Activities;
