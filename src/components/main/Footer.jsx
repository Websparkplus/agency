import Link from "next/link";

const Footer = () => {
  return (
    <footer className="mt-12 p-6 text-center text-sm">
      <div>
        <span>All Rights Reserved </span>
        <span>&copy; {new Date().getFullYear()} Webspark+.</span>
      </div>
      <div>
        <Link href="/terms">
          <span className="block  hover:text-gray-400">
            Privacy Policy | Terms
          </span>
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
