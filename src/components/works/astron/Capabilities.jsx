import {
  MdOutlineAutoGraph,
  MdOutlineSlowMotionVideo,
  MdOutlineDraw,
  MdOutlineStyle,
} from "react-icons/md";
import { CgQuoteO } from "react-icons/cg";

const Capabilities = () => {
  return (
    <section id="capabilities3">
      <div className="section bg-black text-white">
        <h2 className="pt-20 text-5xl tracking-widest">OUR CAPABILITIES</h2>

        <ul className="lg:my-8 md:grid grid-cols-2 gap-8 pb-20">
          <li className="my-8 md:my-0 p-8 bg-white bg-opacity-5">
            <div className="flex items-center gap-2 text-yellow-300 text-3xl mb-4 pb-4 border-b border-yellow-300 w-fit">
              <span>
                <MdOutlineAutoGraph size={50} />
              </span>
              <h3>Branding</h3>
            </div>
            <p>
              A well designed brand becomes an important asset to the success
              and longevity of any business. We specialise in identity design
              that effortlessly tell your brand story and keeps you on top.
            </p>
          </li>

          <li className="my-8 md:my-0 p-8 bg-white bg-opacity-5">
            <div className="flex items-center gap-2 text-yellow-300 text-3xl mb-4 pb-4 border-b border-yellow-300 w-fit">
              <span>
                <MdOutlineSlowMotionVideo size={50} />
              </span>
              <h3>Animation</h3>
            </div>
            <p>
              Communicate your message quickly, simply, and on-brand with our
              animation. From simple motion graphics to 2D & 3D animated videos,
              We have the solutions you need to fit your project & budget.
            </p>
          </li>

          <li className="my-8 md:my-0 p-8 bg-white bg-opacity-5">
            <div className="flex items-center gap-2 text-yellow-300 text-3xl mb-4 pb-4 border-b border-yellow-300 w-fit">
              <span>
                <MdOutlineDraw size={50} />
              </span>
              <h3>Illustration</h3>
            </div>
            <p>
              Our team of creatives devise illustration styles that can reflect
              any brand and campaign. So no matter your requirement, we will be
              able produce illustrations that will hit your all marketing goals.
            </p>
          </li>

          <li className="my-8 md:my-0 p-8 bg-white bg-opacity-5">
            <div className="flex items-center gap-2 text-yellow-300 text-3xl mb-4 pb-4 border-b border-yellow-300 w-fit">
              <span>
                <MdOutlineStyle size={50} />
              </span>
              <h3>UI/UX Design</h3>
            </div>
            <p>
              With our amazing UI/UX solutions, we help brands cut through the
              noise with designs that blend user experience with expert design.
              And we approach all of our projects with a collaborative mindset.
            </p>
          </li>
        </ul>
      </div>

      <div className="section bg-black text-yellow-300">
        <div
          className="text-2xl font-bold lg:flex justify-between items-start gap-8 mb-20
        border border-yellow-300 p-6 rounded-sm">
          <CgQuoteO size={80} className="my-6 lg:w-[10%]" />

          <p className="my-6 lg:w-[45%]">
            ASTRON MEDIA is a team of brand and design experts. Our experts'
            combined experience, insight and industry knowledge goes into
            shaping our craft and what we deliver. We use a proven creative
            process that guarantees a positive return on your investment.
          </p>
          <p className="my-6 lg:w-[45%]">
            We are experienced in helping individuals and businesses stand out
            through smart and engaging content and brand design. Our talented
            team carefully researches each business and industry in order to
            deliver the best possible results.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Capabilities;
