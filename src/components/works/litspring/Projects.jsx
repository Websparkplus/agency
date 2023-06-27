import { RiStarSFill } from "react-icons/ri";

const Projects = () => {
  return (
    <section id="programmes1" className="section">
      <div className="pt-10 pb-32 border-b border-cyan-800">
        <h2 className=" mx-auto lg:mx-0 text-4xl text-cyan-950 font-bold bg-cyan-200 p-4 w-fit">
          OUR PROGRAMMES
        </h2>

        <div className="lg:grid grid-cols-2 gap-10 mt-8">
          <div className="my-8 lg:my-0 bg-cyan-900 bg-opacity-5 p-8 border-b-4 border-cyan-900 shadow-md">
            <h4 className="text-3xl font-medium pb-4 border-b border-cyan-900">
              iRead Campaign
            </h4>
            <p className="py-4 italic">
              iRead Campaign is a strategic program introduced by One Light
              Network to foster the habit of reading in children. To this end,
              we renovate and build school libraries, and try to establish the
              Reading and Writing Clubs in these schools.
            </p>
            <div className="flex items-center gap-2 font-medium">
              <div className="flex">
                <RiStarSFill />
                <RiStarSFill />
                <RiStarSFill />
              </div>
            </div>
          </div>

          <div className="my-8 lg:my-0 bg-cyan-900 bg-opacity-5 p-8 border-b-4 border-cyan-900 shadow-md">
            <h4 className="text-3xl font-medium pb-4 border-b border-cyan-900">
              Mentor Connect
            </h4>
            <p className="py-4 italic">
              Mentor me is a unique mentorship session where mentors who are
              often tertiary students get to meet and counsel younger students
              at the basic level. Topics treated during the Mentor Me sessions
              are taken from our Mentorship Guide.
            </p>
            <div className="flex items-center gap-2 font-medium">
              <div className="flex">
                <RiStarSFill />
                <RiStarSFill />
                <RiStarSFill />
              </div>
            </div>
          </div>

          <div className="my-8 lg:my-0 bg-cyan-900 bg-opacity-5 p-8 border-b-4 border-cyan-900 shadow-md">
            <h4 className="text-3xl font-medium pb-4 border-b border-cyan-900">
              Scholar Initiative
            </h4>
            <p className="py-4 italic">
              We are on a mission to make quality education accessible to
              children in hard-to-reach communities. To this end, we try to find
              good scholarship programmes that these underprivileged children
              can benefit from and help them apply or join.
            </p>
            <div className="flex items-center gap-2 font-medium">
              <div className="flex">
                <RiStarSFill />
                <RiStarSFill />
                <RiStarSFill />
              </div>
            </div>
          </div>

          <div className="my-8 lg:my-0 bg-cyan-900 bg-opacity-5 p-8 border-b-4 border-cyan-900 shadow-md">
            <h4 className="text-3xl font-medium pb-4 border-b border-cyan-900">
              Back-2-School Drive
            </h4>
            <p className="py-4 italic">
              ReadSpring Network provides school uniforms, bags, exercise books,
              text books, and other learning materials to school children in
              deprived communities at the beginning of each academic year, to
              encourage them to focus on their education.
            </p>
            <div className="flex items-center gap-2 font-medium">
              <div className="flex">
                <RiStarSFill />
                <RiStarSFill />
                <RiStarSFill />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
