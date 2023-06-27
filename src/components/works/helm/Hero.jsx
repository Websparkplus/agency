import Link from "next/link";

const Hero = () => {
  return (
    <main className="section lg:h-[85vh] lg:grid place-items-center">
      <div className="lg:flex justify-between items-center gap-4">
        <div className="lg:w-2/5">
          <h1 className="text-5xl lg:text-6xl text-gray-600 font-medium mb-8 lg:mb-12 tracking-tight leading-[3.25rem]">
            Experience our amazing co-working spaces and community
          </h1>

          <div className="flex items-center gap-4 font-medium">
            <Link href="/projects/helm-spaces">
              <button className="bg-red-700 text-white text-xl font-sans p-3 w-48 hover:bg-gradient-to-br from-red-400 to-red-800 rounded-md">
                Make Enquiries
              </button>
            </Link>

            <Link href="/projects/helm-spaces">
              <button className="bg-black text-white text-xl font-sans p-3 w-48 hover:bg-gradient-to-br from-gray-700 to-black rounded-md">
                Book Space
              </button>
            </Link>
          </div>
        </div>

        <div className="w-full mt-28 mb-12 lg:my-0 lg:w-2/5 grid grid-cols-2 gap-6 p-4">
          <img
            src="/projects/helm-img1.jpg"
            alt="helm-space image"
            className="block object-cover rounded-tl-md"
          />
          <img
            src="/projects/helm-img2.jpg"
            alt="helm-space image"
            className="block object-cover rounded-tr-md"
          />
          <img
            src="/projects/helm-img3.jpg"
            alt="helm-space image"
            className="block object-cover rounded-bl-md"
          />
          <img
            src="/projects/helm-img4.jpg"
            alt="helm-space image"
            className="block object-cover rounded-br-md"
          />
        </div>
      </div>
    </main>
  );
};

export default Hero;
