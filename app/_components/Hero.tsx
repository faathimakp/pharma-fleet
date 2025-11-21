import Image from "next/image";
import aboutImg from "@public/homehero.jpg"; 
import TextStaggerAnimation from "../components/animations/TextStaggerAnimation";
import CardAnimation from "../components/animations/CardAnimation";

export default function Hero() {
  return (
    <section className="relative overflow-hidden py-14 md:py-28 px-[1.25rem] sm:px-10 md:px-16 lg:px-24">
      {/* Background blob */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 left-1/3 w-96 h-96 bg-green-300/40 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-green-600/30 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-16 items-center">
        {/* Left Content */}
        <div className="relative">
          <TextStaggerAnimation
            text=" Empowering Pharmacies With Secure, On-Time Deliveries"
            className="text-3xl sm:text-5xl lg:text-6xl  font-serif font-bold text-[#0d4d2e] leading-tight "
          />

          <p className="mt-6 text-gray-600 text-lg sm:text-xl leading-relaxed mb-8">
           We empower pharmacies with reliable, efficient, and fully transparent medicine delivery services. From pickup to doorstep delivery, our platform streamlines your logistics so you can serve your patients better and grow your business.
          </p>

          <div className="flex gap-1.5 sm:gap-4 flex-wrap">
            <CardAnimation index={0} delay={0.2}>
              <a
                href="/contact"
                className="bg-[#00A36C] text-white font-semibold px-4 md:px-6 py-2.5 md:py-3  rounded-lg hover:bg-[#00A36C] transition"
              >
                Contact Us
              </a>
            </CardAnimation>
            <CardAnimation index={1} delay={0.4}>
              <a
                href="/about"
                className="border  border-[#00A36C] px-4 md:px-6 py-2.5 md:py-3 rounded-lg hover:bg-white hover:text-[#14213d] transition"
              >
                Learn More
              </a>
            </CardAnimation>
          </div>
        </div>

        {/* Right Image with Overlay */}
        <div className="relative">
          <div className="absolute -top-5 -right-5 w-40 h-40 bg-green-400/20 blur-2xl rounded-full"></div>

          <div className="rounded-3xl overflow-hidden shadow-2xl border border-white/50 backdrop-blur-xl">
            <Image
              src={aboutImg}
              alt="About"
              className="object-cover"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}
