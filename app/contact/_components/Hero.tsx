"use client";
import Image from "next/image";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
// import Whatsapp from "@public/instagram.svg";
// import Facebook from "@public/instagram.svg";
// import Instagram from "@public/instagram.svg";

import Link from "next/link";

const Hero = () => {
  const mySchema = z.object({
    name: z
      .string()
      .nonempty({ message: "Name is required" })
      .regex(/^[A-Za-z\s]+$/, {
        message: "Only letters and spaces are allowed",
      }),
    email: z
      .string()
      .nonempty({ message: "Email is required" })
      .email({ message: "Invalid email address" }),
    address: z.string().nonempty({ message: "Address is required" }),
    message: z.string().nonempty({ message: "Message is required" }),
    number: z
      .string()
      .nonempty({ message: "Number is required" })
      .regex(/^\d+$/, { message: "Only digits are allowed" })
      .min(10, { message: "Number must be at least 10 digits" }),
  });

  type TmySchema = z.infer<typeof mySchema>;

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<TmySchema>({
    resolver: zodResolver(mySchema),
  });

  const onSubmit = (data: TmySchema) => {
    const subject = encodeURIComponent("Contact Form Submission");
    const body = encodeURIComponent(
      `Name: ${data.name}\nEmail: ${data.email}\nPhone: ${data.number}\nAddress: ${data.address}\nMessage:\n${data.message}`
    );

    const mailtoLink = `mailto:thepharmafleet@gmail.com?subject=${subject}&body=${body}`;
    window.location.href = mailtoLink;

    setTimeout(() => reset(), 500);
    alert("Message sent!");
  };

  return (
    <section className="bg-white">
      {/* FORM SECTION */}
      <div className="max-w-3xl mx-auto pt-12 md:pt-20 px-4" id="getintouch">
        <div className="text-center mb-10">
          <p className="text-sm text-[#0d4d2e] font-semibold tracking-widest uppercase mb-2">
            Let’s Get In Touch
          </p>

          <h2 className="text-3xl md:text-4xl font-bold font-serif text-[#0d4d2e] mb-4">
            Send Us a Message
          </h2>

          <p className="text-gray-500 text-md">
            We’re here to help—contact us anytime for support, questions, or
            feedback.
          </p>
        </div>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          {/* form grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex flex-col">
              <input
                {...register("name")}
                type="text"
                placeholder="Your Name"
                className="w-full px-4 py-3 border border-gray-300 rounded-md"
              />
              {errors.name && (
                <p className="text-red-600">*{errors.name.message}</p>
              )}
            </div>

            <div className="flex flex-col">
              <input
                {...register("email")}
                type="email"
                placeholder="Email Address"
                className="w-full px-4 py-3 border border-gray-300 rounded-md"
              />
              {errors.email && (
                <p className="text-red-600">*{errors.email.message}</p>
              )}
            </div>

            <div className="flex flex-col">
              <input
                {...register("number")}
                type="tel"
                placeholder="Phone Number"
                className="w-full px-4 py-3 border border-gray-300 rounded-md"
              />
              {errors.number && (
                <p className="text-red-600">*{errors.number.message}</p>
              )}
            </div>

            <div className="flex flex-col">
              <input
                {...register("address")}
                type="text"
                placeholder="Address"
                className="w-full px-4 py-3 border border-gray-300 rounded-md"
              />
              {errors.address && (
                <p className="text-red-600">*{errors.address.message}</p>
              )}
            </div>
          </div>

          <div className="flex flex-col">
            <textarea
              {...register("message")}
              placeholder="Write a Message"
              rows={5}
              className="w-full px-4 py-3 border border-gray-300 rounded-md"
            ></textarea>
            {errors.message && (
              <p className="text-red-600">*{errors.message.message}</p>
            )}
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className="bg-[#0d4d2e] text-white text-lg font-medium px-6 py-3 rounded-md"
          >
            SEND A MESSAGE
          </button>
        </form>

        {/* SOCIAL ICONS */}
        {/* <div className="mt-10 text-center">
          <div className="flex justify-center gap-4 flex-wrap">
            <Link
              href="https://www.instagram.com/malbrizventuresltd/?igsh=MTd5OGh3aWJnY2ZyYg%3D%3D#"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#0d4d2e] shadow-md hover:bg-pink-600 transition rounded-full p-3 w-12 h-12 flex items-center justify-center"
            >
              <Image src={Instagram} alt="Instagram" width={20} height={20} />
            </Link>

            <a
              href="https://www.facebook.com/people/Malbriz-Ventures-Ltd/61565047468684/?mibextid=wwXIfr"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#0d4d2e] shadow-md hover:bg-blue-600 transition rounded-full p-3 w-12 h-12 flex items-center justify-center"
            >
              <Image src={Facebook} alt="Facebook" width={20} height={20} />
            </a>

            <a
              href="https://wa.me/+35699936017"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#0d4d2e] shadow-md hover:bg-green-600 transition rounded-full p-3 w-12 h-12 flex items-center justify-center"
            >
              <Image src={Whatsapp} alt="WhatsApp" width={20} height={20} />
            </a>
          </div>
        </div> */}
      </div>
      {/* MAP SECTION */}
<div className="w-full mt-8">
  <h3 className="text-center text-2xl md:text-3xl font-serif font-semibold text-[#0d4d2e] mb-6">
    Our Location
  </h3>

  <div className="w-full h-64 md:h-96  overflow-hidden shadow-lg px-0 md:px-28">
    <iframe
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.835434509374!2d144.9537363159049!3d-37.8162797420217!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad65d43f1f1c7ab%3A0x5045675218ce6e0!2sMelbourne%20VIC!5e0!3m2!1sen!2s!4v1700000000000!5m2!1sen!2s"
      width="100%"
      height="100%"
      allowFullScreen={false}
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
    ></iframe>
  </div>
</div>

    </section>
  );
};

export default Hero;
