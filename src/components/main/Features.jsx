import { AiOutlineSafetyCertificate } from "react-icons/ai";
import { LuPackageSearch } from "react-icons/lu";
import { CgComponents } from "react-icons/cg";
import { MdOutlineRocketLaunch } from "react-icons/md";

export default function Features() {
  return (
    <section className="md:px-12 lg:px-24 py-20 my-12">
      <div className="bg-gradient-to-br from-black via-neutral-900 to-neutral-950 px-10 py-16 rounded-sm">
        <h2
          className="mb-4 mx-8 pb-4 text-3xl lg:text-4xl text-gray font-bold 
        tracking-widest border-b border-neutral-600">
          EVERYTHING WE CREATE IS OF <br /> TOP-NOTCH QUALITY
        </h2>

        <div className="col-span-10">
          <ul className="md:grid md:grid-cols-2 lg:grid-cols-4">
            <li className="p-6">
              <div className="text-sky-200">
                <CgComponents size={60} />
              </div>
              <h3 className="my-6 text-2xl font-medium">
                User-Friendly <br /> Design
              </h3>
              <p className="text-sm">
                We build responsive websites that are accessible, easy to use,
                and designed to boost businesses.
              </p>
            </li>

            <li className="p-6">
              <div className="text-sky-200">
                <MdOutlineRocketLaunch size={60} />
              </div>
              <h3 className="my-6 text-2xl font-medium">
                Fast Loading <br /> Speed
              </h3>
              <p className="text-sm">
                Optimized for fast loading, so users can quickly and easily
                access the information they need.
              </p>
            </li>

            <li className="p-6">
              <div className="text-sky-200">
                <LuPackageSearch size={60} />
              </div>
              <h3 className="my-6 text-2xl font-medium">
                Search Engine <br /> Optimized
              </h3>
              <p className="text-sm">
                Using effective SEO strategies, we help businesses improve their
                online visibilty and appeal.
              </p>
            </li>

            <li className="p-6">
              <div className="text-sky-200">
                <AiOutlineSafetyCertificate size={60} />
              </div>
              <h3 className="my-6 text-2xl font-medium">
                Secure & <br /> Reliable
              </h3>
              <p className="text-sm">
                We implement security protocols that protect your website from
                any potential cyber threats.
              </p>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
