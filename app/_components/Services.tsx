import Image from "next/image";
import serviceMain from "@public/about.jpg";
import Bg from "@public/61808.jpg";
import CardAnimation from "../components/animations/CardAnimation";

const services = [
 {
  icon: "24",
  iconClass: "w-12 h-12 sm:w-16 sm:h-16",
  title: "Efficient Same-Day Pickup & Delivery",
  desc: "We provide fast, same-day medicine pickup and delivery services so pharmacies can guarantee timely service to their patients.",
},
{
  icon: "✓",
  iconClass: "w-12 h-12 sm:w-16 sm:h-16",
  title: "Safe & Secure Handling",
  desc: "From pickup to drop-off, every order is tracked, verified, and handled with strict safety protocols to protect sensitive medications.",
},
{
  icon: "L",
  iconClass: "w-12 h-12 sm:w-16 sm:h-16",
  title: "Scheduled & Recurring Deliveries",
  desc: "Set daily, weekly, or on-demand delivery schedules that align with your pharmacy’s workflow—ensuring uninterrupted service for your customers.",
},

];

export default function ServiceSection() {
  return (
    <section className="relative py-14 md:py-24 px-6 sm:px-10 md:px-16 lg:px-24 xl:px-32">
      <div className="absolute inset-0 -z-10">
        <Image
          src={Bg}
          alt="Background"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/30"></div>
      </div>
      <div className="relative z-10 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-20 items-center">
        {/* RIGHT SIDE IMAGE WITH PREMIUM DESIGN */}
        <div className="relative">
          <div className="absolute -top-6 -right-6 w-40 sm:w-48 lg:w-56 h-40 sm:h-48 lg:h-56 bg-green-700 rounded-xl hidden md:block"></div>

          <div className="absolute bottom-10 -left-8 w-20 sm:w-24 h-20 sm:h-24 bg-green-500/20 rounded-full blur-md hidden md:block"></div>

          <div className="relative rounded-2xl overflow-hidden shadow-2xl">
            <Image
              src={serviceMain}
              alt="Pharmacy Delivery Service"
              className="object-cover"
              priority
            />
          </div>
        </div>

        {/* LEFT SIDE CONTENT */}
        <div className=" space-y-8 md:space-y-16">
          {services.map((item, i) => (
            <CardAnimation key={i} index={i} delay={0.2}>
              <div className="flex gap-4 sm:gap-8">
                {/* Icon */}
                <div
                  className={`flex-shrink-0 ${item.iconClass} rounded-full border-2 border-green-600 flex items-center justify-center text-green-700 text-xl font-bold bg-white shadow-sm`}
                >
                  {item.icon}
                </div>

                {/* Text */}
                <div>
                  <h3 className=" font-serif font-semibold text-[#0d4d2e] mb-2 md:mb-4 text-xl sm:text-2xl lg:text-3xl">
                    {item.title}
                  </h3>
                  <p className="text-gray-950 leading-relaxed text-base sm:text-lg">
                    {item.desc}
                  </p>
                </div>
              </div>
            </CardAnimation>
          ))}
        </div>
      </div>
    </section>
  );
}
