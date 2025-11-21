import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-[#097969]" id="contact">
      <div className="relative z-10 px-6 md:px-12 lg:px-20 pt-10 md:pt-14 lg:pt-16 pb-6">
        <div className="flex flex-col-reverse md:flex-row  md:justify-between w-full mb-10">
          {/* Contact Info */}
          <div className="text-white font-serif text-lg md:text-xl leading-relaxed flex flex-col">
            <div className="flex items-center flex-wrap gap-2 md:gap-4">
              {/* Phone Icon */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
                className="w-5 h-5 md:w-6 md:h-5 text-white"
              >
                <path
                  fill="#eaeaeb"
                  d="M160.2 25C152.3 6.1 131.7-3.9 112.1 1.4l-5.5 1.5c-64.6 17.6-119.8 80.2-103.7 156.4 37.1 175 174.8 312.7 349.8 349.8 76.3 16.2 138.8-39.1 156.4-103.7l1.5-5.5c5.4-19.7-4.7-40.3-23.5-48.1l-97.3-40.5c-16.5-6.9-35.6-2.1-47 11.8l-38.6 47.2C233.9 335.4 177.3 277 144.8 205.3L189 169.3c13.9-11.3 18.6-30.4 11.8-47L160.2 25z"
                />
              </svg>

              {/* Phone Numbers */}
              <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-6">
                <Link href="tel:+14164751370" className="hover:text-green-200">
                  +1 (416) 475-1370
                </Link>

                <Link href="tel:+16475127882" className="hover:text-green-200">
                  +1 (647) 512-7882
                </Link>
              </div>
            </div>

            <Link
              href="mailto:thepharmafleet@gmail.com"
              className="mt-2 hover:text-green-200"
            >
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
