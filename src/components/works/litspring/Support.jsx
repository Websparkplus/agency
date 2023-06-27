import {
  FaHandshake,
  FaHandHoldingHeart,
  FaHandHoldingUsd,
} from "react-icons/fa";

const Feedback = () => {
  return (
    <section id="support1" className="section text-center">
      <div className="my-10">
        <h2 className="text-4xl text-cyan-950 font-bold bg-cyan-200 p-4 w-fit mx-auto lg:mx-0 mb-4">
          BE PART OF SOMETHING BIGGER
        </h2>

        <ul className="lg:grid grid-cols-3 gap-6 mx-6 lg:mx-0">
          <li className="my-8 border-2 border-cyan-500 shadow-md p-8 rounded-xl">
            <h3 className="text-2xl font-medium tracking-wider">
              BECOME <br /> A PARTNER
            </h3>
            <span>
              <FaHandshake
                size={80}
                className="mx-auto my-8 p-8 h-36 w-36 bg-cyan-500 text-white rounded-full"
              />
            </span>
            <p className="text-lg mb-6">
              You can join forces with LitSpring Network as a partner to help us
              amplify our work.
            </p>
            <button className="py-2.5 px-10 rounded-full bg-cyan-500 text-white text-xl font-bold hover:bg-gray-600">
              Apply Here
            </button>
          </li>

          <li className="my-8 border-2 border-cyan-600 shadow-md rounded-xl p-8">
            <h3 className="text-2xl font-medium tracking-wider">
              BECOME <br /> AN AMBASSADOR
            </h3>
            <span>
              <FaHandHoldingHeart
                size={75}
                className="mx-auto my-8 p-8 h-36 w-36 bg-cyan-600 text-white rounded-full"
              />
            </span>
            <p className="text-lg mb-6">
              Share your time and skills as an ambassador to transform other
              people’s lives.
            </p>
            <button className="py-2.5 px-10 rounded-full bg-cyan-600 text-white text-xl font-bold hover:bg-gray-600">
              Apply Here
            </button>
          </li>

          <li className="my-8 border-2 border-cyan-700 rounded-xl shadow-md p-8">
            <h3 className="text-2xl font-medium tracking-wider">
              DONATE <br /> MONTHLY
            </h3>
            <span>
              <FaHandHoldingUsd
                size={75}
                className="mx-auto my-8 p-8 h-36 w-36 bg-cyan-700 text-white rounded-full"
              />
            </span>
            <p className="text-lg mb-6">
              The little amount you donate can go a long way to completely
              transform a child's life.
            </p>
            <button className="py-2.5 px-10 rounded-full bg-cyan-700 text-white text-xl font-bold hover:bg-gray-600">
              Donate Now
            </button>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Feedback;
