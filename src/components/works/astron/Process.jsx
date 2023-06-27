import { FaAsterisk } from "react-icons/fa";

const Process = () => {
  return (
    <section id="process3" className="section">
      <div className="py-20">
        <h2 className="text-5xl tracking-widest pb-10">OUR PROCESS</h2>

        <ul>
          <li className="border-y border-yellow-600 py-10 lg:flex justify-between gap-4">
            <div className="flex items-center gap-4 lg:gap-8 mb-4 text-yellow-800 lg:w-1/2">
              <span className="text-4xl font-extrabold italic">01</span>
              <span>
                <FaAsterisk />
              </span>
              <h3 className="text-4xl italic font-medium">User Research</h3>
            </div>
            <p className="lg:w-1/2">
              Defining a clear vision is important to any business. We research
              into brand's image and goals, their competition and try to
              understand industry insights before commencing any project.
            </p>
          </li>

          <li className="border-b border-yellow-600 py-10 lg:flex justify-between gap-4">
            <div className="flex items-center gap-4 lg:gap-8 mb-4 text-yellow-800 lg:w-1/2">
              <span className="text-4xl font-extrabold italic">02</span>
              <span>
                <FaAsterisk />
              </span>
              <h3 className="text-4xl italic font-medium">Wireframing</h3>
            </div>
            <p className="lg:w-1/2">
              We come up with creative ideas and designs in order to make any
              product or business pop and stand out. And the key part of this
              stage of our creative process is sketching a good wireframe.
            </p>
          </li>

          <li className="border-b border-yellow-600 py-10 lg:flex justify-between gap-4">
            <div className="flex items-center gap-4 lg:gap-8 mb-4 text-yellow-800 lg:w-1/2">
              <span className="text-4xl font-extrabold italic">03</span>
              <span>
                <FaAsterisk />
              </span>
              <h3 className="text-4xl italic font-medium">Visual Design</h3>
            </div>
            <p className="lg:w-1/2">
              From the wireframe, we move to the actual visual design. Our focus
              is always on building a stylish designs that is relevant,
              timeless, and consistent with a brand's goals and strategies.
            </p>
          </li>

          <li className="border-b border-yellow-600 py-10 lg:flex justify-between gap-4">
            <div className="flex items-center gap-4 lg:gap-8 mb-4 text-yellow-800 lg:w-1/2">
              <span className="text-4xl font-extrabold italic">04</span>
              <span>
                <FaAsterisk />
              </span>
              <h3 className="text-4xl italic font-medium">Implementation</h3>
            </div>
            <p className="lg:w-1/2">
              We work directly with clients test and implement our solutions.
              The art of thinking about problems and applying our experience to
              design solutions that are as useful as they are beautiful.
            </p>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Process;
