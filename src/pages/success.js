import { TbCircleCheckFilled } from "react-icons/tb";
import { useRouter } from "next/router";
import Link from "next/link";

const Payment = () => {
  const router = useRouter();
  const clientName = router.query.name;

  return (
    <div
      className="p-4 bg-yellow flex flex-col items-center justify-center 
    gap-8 lg:h-screen">
      <Link href="/">
        <img
          src="/main/logo-white.jpg"
          alt="Webspark+ logo"
          className="w-44 mt-8 lg:-mt-8"
        />
      </Link>

      <div>
        <h2 className="uppercase text-3xl lg:text-4xl tracking-wider font-medium text-center">
          <span>Hi, {clientName}.</span> <br />
          Thank you for <br /> choosing our services.
        </h2>
      </div>

      <span className="text-sky-300 bg-sky-200 bg-opacity-50 h-36 w-36 grid place-items-center rounded-full">
        <TbCircleCheckFilled size={100} />
      </span>

      <div className="text-center text-xl tracking-wide">
        <p>
          Your submission has been sent successfully. We will get back to you shortly. <br />
          Project details and progress will be sent to your email.
        </p>
      </div>
    </div>
  );
};

export default Payment;
