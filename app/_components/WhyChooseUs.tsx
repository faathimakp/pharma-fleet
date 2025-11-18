import CardAnimation from "../components/animations/CardAnimation";

export default function HowItWorks() {
  return (
    <section className="py-16 md:py-24 px-6 sm:px-12 lg:px-24 bg-white">
      <div className="max-w-6xl mx-auto">
        {/* Section Title */}
        <h2 className="text-center text-3xl sm:text-4xl lg:text-5xl font-serif font-semibold text-[#0d4d2e]">
          How It Works
        </h2>

        {/* Cards */}
        <div className=" mt-10 md:mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10">
          {[
            {
              step: "01",
              title: "Create a Delivery Request",
              desc: "Pharmacies can quickly create a delivery request through our platform—simply enter patient details and generate a shipping label instantly.",
            },
            {
              step: "02",
              title: "We Pick Up From Your Pharmacy",
              desc: "Our trained fleet partners arrive at your pharmacy, collect the prepared order, and ensure it’s handled with care and compliance.",
            },
            {
              step: "03",
              title: "Secure Delivery to Your Patient",
              desc: "We deliver the medicines directly to your patient’s doorstep with real-time tracking, proof of delivery, and complete reliability.",
            },
          ].map((item, i) => (
            <CardAnimation key={i} index={i} delay={0.2}>
              <div
                key={i}
                className="p-8 bg-white rounded-2xl shadow-lg hover:shadow-xl transition duration-300 border border-gray-100 h-full"
              >
                {/* Step Circle */}
                <div className=" h-15 w-15 md:w-20 md:h-20 mx-auto bg-[#478778] text-white rounded-full flex items-center justify-center text-3xl font-bold mb-6">
                  {item.step}
                </div>

                {/* Content */}
                <h3 className="text-xl font-serif font-semibold text-[#0d4d2e] text-center mb-3">
                  {item.title}
                </h3>
                <p className="text-gray-600 text-center leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </CardAnimation>
          ))}
        </div>
      </div>
    </section>
  );
}
