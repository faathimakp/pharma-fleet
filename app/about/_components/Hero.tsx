import Image from "next/image";
import aboutImg from "@public/service.jpg";
import CardAnimation from "@/app/components/animations/CardAnimation";
import Link from "next/link";
import TextStaggerAnimation from "@/app/components/animations/TextStaggerAnimation";

export default function Hero() {
  return (
    <main className="">

      {/** ------------------- HERO ------------------- **/}
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
            text="  Strengthening Pharmacies With Seamless Delivery Support"
            className="text-3xl sm:text-5xl lg:text-6xl font-serif font-bold text-[#0d4d2e] leading-tight "
           
          /> 
          
            <p className= "mt-6 text-gray-600 text-lg sm:text-xl leading-relaxed">
             We optimize last-mile delivery for pharmacies by providing secure handling, rapid pickups, and transparent tracking. Your patients receive their medications on time, and your team stays efficient and stress-free.
            </p>

            <div className="mt-6 md:mt-10 flex items-center  gap-2 md:gap-4">
              <div className=" h-10 md:h-14 w-14 bg-green-600 text-white rounded-full flex items-center justify-center text-2xl font-bold shadow-lg">
                ✓
              </div>
              <p className="text-gray-700 text-md md:text-lg">
                Trusted by thousands for safe & fast delivery
              </p>
            </div>
          </div>

          {/* Right Image with Overlay */}
          <div className="relative">
            <div className="absolute -top-5 -right-5 w-40 h-40 bg-green-400/20 blur-2xl rounded-full"></div>

            <div className="rounded-3xl overflow-hidden shadow-2xl border border-white/50 backdrop-blur-xl">
              <Image src={aboutImg} alt="About" className="object-cover" priority />
            </div>
          </div>
        </div>
      </section>



      {/** ------------------- MISSION (GLASS CARD) ------------------- **/}
      <section className="py-14 md:py-28 px-[1.25rem] sm:px-10 md:px-16 lg:px-24 bg-gray-50 relative">
        
        {/* Floating shape */}
        <div className="absolute top-0 right-0 w-56 h-56 bg-green-200/40 blur-3xl rounded-full -z-10"></div>

       <CardAnimation index={0} delay={0.2}>
            <div className="max-w-6xl mx-auto">
              <div className="bg-white/70 backdrop-blur-xl shadow-2xl border border-white/50 rounded-3xl p-6 sm:p-12 lg:p-16">
                
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-semibold text-[#0d4d2e] text-center">
                  Our Mission
                </h2>
    
                <p className=" mt-4 md:mt-8 text-gray-700 text-lg sm:text-xl leading-relaxed text-center max-w-4xl mx-auto">
                 We empower pharmacies with a seamless delivery ecosystem that simplifies logistics and enhances patient service. With real-time tracking, trained delivery professionals, and secure handling protocols, PharmaFleet ensures reliable deliveries from your counter to your patient’s doorstep.
                </p>
              </div>
            </div>
       </CardAnimation >
      </section>



      {/** ------------------- VALUES CARDS ------------------- **/}



      {/** ------------------- CTA ------------------- **/}
      <section className="py-14 md:py-28  px-[1.25rem] bg-[#478778] text-center text-white relative overflow-hidden">
        
        {/* Glow effect */}
        <div className="absolute inset-0 bg-gradient-to-t from-green-600/20 to-transparent"></div>

        <div className="max-w-5xl mx-auto relative z-10">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-semibold leading-tight">
        Trusted Last-Mile Delivery <br /> for Growing Pharmacies
          </h2>
          <p className="mt-4 text-lg text-gray-200 max-w-2xl mx-auto">
            Join thousands who trust our fast, safe, and secure medical delivery service.
          </p>

         <Link href={"/contact"}>
              <button className=" mt-8 md:mt-10 px-6 md:px-12 py-2 md:py-4 bg-white text-[#0d4d2e] rounded-full text-lg font-semibold hover:bg-gray-100 shadow-xl transition">
                Start Your Order
              </button>
         </Link>
        </div>
      </section>

    </main>
  );
}
