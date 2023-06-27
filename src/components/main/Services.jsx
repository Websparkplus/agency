import { AiOutlineMinus } from "react-icons/ai";

export default function Services() {
  return (
    <section id="services" className="mx-6 md:mx-12 lg:mx-24 pb-20">
      <div className="col-span-2 my-6">
        <h2 className="text-3xl lg:text-4xl font-bold tracking-widest">
          WHAT WE DO
        </h2>
        <p className="py-2.5 text-lg text-neutral-500 tracking-wide border-b border-neutral-500">
          Areas we specialize in and services we can provide:
        </p>
      </div>
      <div>
        <ul className="lg:grid grid-cols-3 gap-10">
          <li className="p-10 my-12 lg:my-4 rounded-sm border border-neutral-500 shadow-md">
            <span className="text-4xl font-extrabold text-neutral-500 border-b-2 border-neutral-500">
              01
            </span>
            <h3 className="text-2xl font-medium my-4">
              Custom Website Development
            </h3>
            <p className="text-sm mb-4">
              From custom design to user-friendly functionality, we provide
              top-of-the-line website development solutions that cater to your
              unique business needs. With a focus on delivering visually
              stunning and highly responsive websites, we make sure that your
              website stands out from the competition.
            </p>
          </li>

          <li className="p-10 my-12 lg:my-4 rounded-sm border border-neutral-500 shadow-md">
            <span className="text-4xl font-extrabold text-neutral-500 border-b-2 border-neutral-500">
              02
            </span>
            <h3 className="text-2xl font-medium my-4">
              Site Management & Hosting
            </h3>
            <p className="text-sm mb-4">
              We handle all aspects of website management, including hosting,
              regular updates, maintenance, and security checks, so you can
              focus on running your business. With our proactive approach to
              website management, we ensure that your website stays up-to-date,
              secure, and optimized for maximum performance.
            </p>
          </li>

          <li className="p-10 my-12 lg:my-4 rounded-sm border border-neutral-500 shadow-md">
            <span className="text-4xl font-extrabold text-neutral-500 border-b-2 border-neutral-500">
              03
            </span>
            <h3 className="text-2xl font-medium my-4">
              Search Engine Optimization
            </h3>
            <p className="text-sm mb-4">
              Our SEO services are designed to improve your website's visibility
              and rank higher on search engine results pages. We use proven and
              advanced SEO techniques to boost your online presence. With our
              SEO services, your website is optimized to attract more organic
              traffic, and ultimately increase your revenue.
            </p>
          </li>
        </ul>
      </div>
    </section>
  );
}
