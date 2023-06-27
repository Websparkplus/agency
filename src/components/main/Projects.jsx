import { TbExternalLink } from "react-icons/tb";
import Link from "next/link";

const Projects = () => {
  return (
    <section id="projects" className="px-6 md:px-12 lg:px-24 py-20">
      <div>
        <h2 className="text-3xl lg:text-4xl font-bold tracking-widest">
          FEATURED PROJECTS
        </h2>
        <p className="py-2.5 text-lg text-neutral-500 tracking-wide border-b border-neutral-500">
          Selected custom website projects designed and created by us
        </p>
      </div>

      <ul className="lg:grid grid-cols-3 gap-6">
        <li className="p-6 rounded-sm border-2 border-neutral-200 hover:border-neutral-600 my-12 relative">
          <Link href="/projects/astron-media" target="_blank">
            <div className="absolute inset-0 w-full h-full bg-neutral-900 bg-opacity-80 hover:-z-10"></div>
            <div className="hover:relative hover:z-20">
              <img
                src="/main/project-astron.jpg"
                alt="project-cover-image"
                className="block object-cover w-full h-60 bg-transparent"
              />

              <div className="flex items-center justify-between mt-4">
                <h3
                  className="font-medium tracking-widest relative z-10 cursor-pointer
                 text-sky-200 hover:text-white">
                  ASTRON MEDIA
                </h3>

                <span className="relative z-10 cursor-pointer text-sky-200 hover:text-white">
                  <TbExternalLink size={22} />
                </span>
              </div>
            </div>
          </Link>
        </li>

        <li className="p-6 rounded-sm border-2 border-neutral-200 hover:border-neutral-600 my-12 relative">
          <Link href="/projects/litspring-network" target="_blank">
            <div className="absolute inset-0 w-full h-full bg-neutral-900 bg-opacity-80 hover:-z-10"></div>
            <div className="hover:relative hover:z-20">
              <img
                src="/main/project-litspring.jpg"
                alt="project-cover-image"
                className="block object-cover w-full h-60 bg-transparent"
              />

              <div className="flex items-center justify-between mt-4">
                <h3
                  className="font-medium tracking-widest relative z-10 cursor-pointer
                 text-sky-200 hover:text-white">
                  LITSPRING NETWORK
                </h3>

                <span className="relative z-10 cursor-pointer text-sky-200 hover:text-white">
                  <TbExternalLink size={22} />
                </span>
              </div>
            </div>
          </Link>
        </li>

        <li className="p-6 rounded-sm border-2 border-neutral-200 hover:border-neutral-600 my-12 relative">
          <Link href="/projects/helm-spaces" target="_blank">
            <div className="absolute inset-0 w-full h-full bg-neutral-900 bg-opacity-80 hover:-z-10"></div>
            <div className="hover:relative hover:z-20">
              <img
                src="/main/project-helm.jpg"
                alt="project-cover-image"
                className="block object-cover w-full h-60 bg-transparent"
              />

              <div className="flex items-center justify-between mt-4">
                <h3
                  className="font-medium tracking-widest relative z-10 cursor-pointer
                 text-sky-200 hover:text-white">
                  HELM SPACES
                </h3>

                <span className="relative z-10 cursor-pointer text-sky-200 hover:text-white">
                  <TbExternalLink size={22} />
                </span>
              </div>
            </div>
          </Link>
        </li>
      </ul>
    </section>
  );
};

export default Projects;
