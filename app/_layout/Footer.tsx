import Image from "next/image";
// import Whatsapp from "@public/instagram.svg";
// import Facebook from "@public/facebook.svg";
// import Instagram from "@public/instagram.svg";
import Link from "next/link";
import Logo from "@public/pf-logo-2.png";

const Footer = () => {
  return (
    <footer className="bg-[#097969]" id="contact">
      {/* Top Section */}
      <div className="relative z-10 px-6 md:px-12 lg:px-20 pt-10 md:pt-14 lg:pt-16 pb-6">
        {/* Contact + Logo Row */}
        <div className="flex flex-col-reverse md:flex-row md:justify-between w-full mb-10">
          {/* Contact Info */}
          <div className="text-white font-serif text-lg md:text-xl leading-relaxed flex flex-col">
            <div className="flex flex-wrap gap-2 sm:gap-4 ">
              <Link href="tel:+35699936017">+1 (416) 475-1370</Link>
              <Link href="tel:+35699936017">+1 (647) 512-7882</Link>
            </div>
            <Link href="mailto:Info@malbrizventuresltd.com">
              thepharmafleet@gmail.com
            </Link>
          </div>
          <div className="flex font-serif flex-wrap justify-center md:justify-center gap-x-6 gap-y-2 text-sm md:text-base text-[#FAFAFA] font-medium uppercase pb-8  md:pb-4 w-full md:w-fit">
            <Link href="/" className="hover:text-green-200">
              Home
            </Link>
            <Link href="/about" className="hover:text-green-200">
              About
            </Link>
            <Link href="/contact" className="hover:text-green-200">
              Contact
            </Link>
          </div>
          <div className="w-40 md:w-56 h-auto mb-6 md:mb-0">
            <Link href={"/"}>
              {" "}
              <Image
                src={Logo}
                alt="pharmafleet Logo"
                className="h-12 w-36 md:w-52  md:h-16 object-cover"
              />
            </Link>
          </div>
          {/* Logo */}
        </div>
      </div>

      {/* Bottom Section */}
      <div className="pb-8 px-6 md:px-12 lg:px-20">
        <h2 className="text-center text-white text-sm md:text-base lg:text-lg font-poppins leading-tight">
          © 2025 Pharma Fleet | Crafted by{" "}
          <Link
            className="font-semibold underline-offset-2 hover:underline"
            target="_blank"
            href=""
          >
            Pharma Fleet
          </Link>
        </h2>
      </div>
    </footer>
  );
};

export default Footer;
