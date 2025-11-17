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
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-10">
          {[
            {
              step: "01",
              title: "Upload Prescription",
              desc: "Securely upload your doctor’s prescription to start your order.",
            },
            {
              step: "02",
              title: "We Prepare Your Order",
              desc: "Our partner pharmacies verify and prepare your medications quickly.",
            },
            {
              step: "03",
              title: "Delivered To Your Door",
              desc: "A trained delivery partner brings your medicines safely to you.",
            },
          ].map((item, i) => (
            <CardAnimation key={i} index={i} delay={0.2}>
              <div
                key={i}
                className="p-8 bg-white rounded-2xl shadow-lg hover:shadow-xl transition duration-300 border border-gray-100"
              >
                {/* Step Circle */}
                <div className="w-20 h-20 mx-auto bg-[#478778] text-white rounded-full flex items-center justify-center text-3xl font-bold mb-6">
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
