import { IoMdCheckmarkCircleOutline } from "react-icons/io";
import { AiFillSetting } from "react-icons/ai";
import { BiHeartCircle } from "react-icons/bi";
import {
  RiTimerFlashLine,
  RiExchangeDollarFill,
  RiMedalLine,
} from "react-icons/ri";

export default function Expertise() {
  return (
    <section className="px-6 md:px-12 lg:px-24 py-20">
      <div>
        <div className="mt-6">
          <h2 className="text-3xl lg:text-4xl font-bold tracking-widest">
            WHY CHOOSE US
          </h2>
          <p className="py-2.5 text-lg text-neutral-500 tracking-wide border-b border-neutral-500">
            We are commited to excellence and helping businesses grow
          </p>
        </div>

        <div className="col-span-10">
          <ul className="md:grid md:grid-cols-2 lg:grid-cols-3">
            <li className="grid place-items-center text-center p-10">
              <div className="bg-sky-400 h-20 w-20 rounded-full grid place-items-center">
                <RiMedalLine size={40} />
              </div>
              <h3 className="my-4 text-2xl font-medium">
                Experience & Expertise
              </h3>
              <p className="text-sm">
                We are a team of skilled developers well-versed in using the
                latest industry technologies and trends to deliver exceptional
                web solutions that exceed client expectations.
              </p>
            </li>

            <li className="grid place-items-center text-center p-10">
              <div className="bg-sky-200 text-sky-500 h-20 w-20 rounded-full grid place-items-center">
                <AiFillSetting size={40} />
              </div>
              <h3 className="my-4 text-2xl font-medium">
                Customized Solutions
              </h3>
              <p className="text-sm">
                Every business is unique, and therefore, we do our best to work
                closely with our clients to understand their specific needs and
                tailor our services to meet those needs.
              </p>
            </li>

            <li className="grid place-items-center text-center p-10">
              <div className="bg-sky-100 text-sky-400 h-20 w-20 rounded-full grid place-items-center">
                <RiExchangeDollarFill size={40} />
              </div>
              <h3 className="my-4 text-2xl font-medium">Competitive Pricing</h3>
              <p className="text-sm">
                We believe that quality web development services should be
                accessible to businesses of all sizes. That's why we offer
                flexible and afforable pricing for our services.
              </p>
            </li>

            <li className="grid place-items-center text-center p-10">
              <div className="bg-sky-200 text-sky-500 h-20 w-20 rounded-full grid place-items-center">
                <RiTimerFlashLine size={40} />
              </div>
              <h3 className="my-4 text-2xl font-medium">Timely Delivery</h3>
              <p className="text-sm">
                We understand that time is of the essence in business. That's
                why we work hard to ensure that our clients receive their
                projects within agreed-upon timeframes.
              </p>
            </li>

            <li className="grid place-items-center text-center p-10">
              <div className="bg-sky-100 text-sky-400 h-20 w-20 rounded-full grid place-items-center">
                <IoMdCheckmarkCircleOutline size={40} />
              </div>
              <h3 className="my-4 text-2xl font-medium">Quality Assurance</h3>
              <p className="text-sm">
                To ensure that every project we deliver is of the highest
                quality, we implement a rigorous quality assurance process that
                helps us follow the best practises in all our work.
              </p>
            </li>

            <li className="grid place-items-center text-center p-10">
              <div className="bg-sky-400 text-white h-20 w-20 rounded-full grid place-items-center">
                <BiHeartCircle size={45} />
              </div>
              <h3 className="my-4 text-2xl font-medium">Social Impact</h3>
              <p className="text-sm">
                Making a positive impact matters to us. That is why we are
                dedicated to helping non-profits and small business. Every
                support we recieve goes back into supporting others.
              </p>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
