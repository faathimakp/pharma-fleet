import Image from "next/image";
import Whatsapp from "@public/instagram.svg";
import Facebook from "@public/facebook.svg";
import Instagram from "@public/instagram.svg";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-[#097969]" id="contact">
      {/* Top Section */}
      <div className="relative z-10 px-6 md:px-12 lg:px-20 pt-10 md:pt-14 lg:pt-16 pb-6 md:pb-10">

        <div className="flex flex-col items-center md:items-end">
          
          {/* Contact + Logo Row */}
          <div className="flex flex-col-reverse md:flex-row md:justify-between w-full mb-10">
            
            {/* Contact Info */}
            <div className="text-white font-serif text-lg md:text-xl leading-relaxed flex flex-col">
              <Link href="tel:+35699936017">+356 9993 6017</Link>
              <Link href="mailto:Info@malbrizventuresltd.com">
                Info@pharmafleet.com
              </Link>
            </div>

            {/* Logo */}
            <div className="w-40 md:w-56 h-auto mb-6 md:mb-0">
              {/* <Image src={Logo} alt="Malbriz Ventures" className="object-contain" /> */}
               <div className="flex items-center gap-2 mb-4">
            <div className="bg-white rounded-full p-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-green-700"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                  d="M9 12h6m-3-3v6m9-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <span className="text-2xl font-bold text-white">PharmaFleet</span>
          </div>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="flex font-serif flex-wrap justify-center md:justify-center gap-x-6 gap-y-2 text-sm md:text-base text-[#FAFAFA] font-medium uppercase border-b border-white/30 pb-4 w-full md:w-fit">
            <Link href="/" className="hover:text-green-200">Home</Link>
            <Link href="/about" className="hover:text-green-200">About</Link>
            <Link href="/contact" className="hover:text-green-200">Contact</Link>
          </div>

          {/* Social Icons */}
          <div className="flex items-center gap-6 mt-6">
            <Link href="https://www.facebook.com/...">
              <Image src={Facebook} alt="Facebook" className="w-6 h-6" />
            </Link>
            <Link href="https://www.instagram.com/...">
              <Image src={Instagram} alt="Instagram" className="w-6 h-6" />
            </Link>
            <Link href="https://wa.me/+35699936017">
              <Image src={Whatsapp} alt="Whatsapp" className="w-6 h-6" />
            </Link>
          </div>
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
