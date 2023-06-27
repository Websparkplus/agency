import { FaPeopleCarry, FaGraduationCap, FaSchool } from "react-icons/fa";
import { HiLibrary } from "react-icons/hi";
import { GiRead } from "react-icons/gi";

const Figures = () => {
  return (
    <section className="section">
      <ul className="lg:grid grid-cols-5 bg-cyan-800 text-white rounded-md py-6 mx-16 lg:mx-0">
        <li className="flex flex-col gap-2 items-center p-8">
          <FaPeopleCarry size={50} className="text-cyan-200" />
          <span className="text-5xl font-medium">86</span>
          <span className="text-xl">Volunteers</span>
        </li>
        <li className="flex flex-col gap-2 items-center p-8">
          <FaGraduationCap size={50} className="text-cyan-200" />
          <span className="text-5xl font-medium">277</span>
          <span className="text-xl">Alumni</span>
        </li>
        <li className="flex flex-col gap-2 items-center p-8">
          <FaSchool size={50} className="text-cyan-200" />
          <span className="text-5xl font-medium">35</span>
          <span className="text-xl">Schools</span>
        </li>
        <li className="flex flex-col gap-2 items-center p-8">
          <HiLibrary size={50} className="text-cyan-200" />
          <span className="text-5xl font-medium">11</span>
          <span className="text-xl">Libraries</span>
        </li>
        <li className="flex flex-col gap-2 items-center p-8">
          <GiRead size={50} className="text-cyan-200" />
          <span className="text-5xl font-medium">8,405</span>
          <span className="text-xl">Students</span>
        </li>
      </ul>
    </section>
  );
};

export default Figures;
