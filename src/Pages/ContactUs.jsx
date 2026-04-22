import { useRef } from "react";
import emailjs from "@emailjs/browser";
import Hero from "../Components/Hero";
import BranchesData from "../Components/BranchesData";
import contactbg from "../assets/Images/contact/herobg.jpg";

export default function ContactUs() {
  const form = useRef();

  // Use only one branch (headOffice)
  const branch = BranchesData.headOffice;

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_li5g4zc",
        "template_r4e13yg",
        form.current,
        "jwYvar0Yfs1fzvtTW"
      )
      .then(
        () => {
          alert("Message sent successfully");
          form.current.reset();
        },
        () => {
          alert("Failed to send message");
        }
      );
  };

  return (
    <div className="bg-white text-gray-900">

      {/* HERO */}
      <Hero
        title="Contact us"
        subtitle="Connect with our team."
        backgroundImage={contactbg}
      />

      {/* BIG STATEMENT */}
      <section className="max-w-5xl mx-auto px-6 py-24">
        <h1 className="text-3xl md:text-5xl font-semibold leading-tight text-[#085733]">
          We’re here to support your business with reliable and scalable solutions.
        </h1>
      </section>

      {/* QUICK CONTACT OPTIONS */}
      <section className="max-w-6xl mx-auto px-6 py-16 grid md:grid-cols-3 gap-8">

        {[
          { title: "Call Us", value: branch.phone },
          { title: "Email", value: branch.email },
          { title: "Visit Office", value: "Riyadh, Saudi Arabia" },
        ].map((item, i) => (
          <div
            key={i}
            className="p-6 border rounded-xl hover:shadow-lg transition"
          >
            <h3 className="text-lg font-semibold text-[#085733] mb-2">
              {item.title}
            </h3>
            <p className="text-gray-600">{item.value}</p>
          </div>
        ))}

      </section>

      {/* WHY CONTACT US */}
      <section className=" py-20 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-10 text-center">

          {[
            "Fast Response Time",
            "Dedicated Project Support",
            "Scalable Enterprise Solutions",
          ].map((item, i) => (
            <div key={i}>
              <h3 className="text-xl font-semibold text-[#085733] mb-3">
                {item}
              </h3>
              <p className="text-gray-600">
                We ensure efficient communication and professional handling of every inquiry.
              </p>
            </div>
          ))}

        </div>
      </section>

      {/* FORM SECTION */}
      <section className="max-w-5xl mx-auto px-6 py-24 border-t text-[#085733]">
        <h2 className="text-3xl md:text-4xl font-semibold mb-12">
          Send a Message
        </h2>

        <form ref={form} onSubmit={sendEmail} className="grid gap-6">
          <div className="grid md:grid-cols-2 gap-6">
            <input
              type="text"
              name="user_name"
              placeholder="Name"
              required
              className="border-b border-gray-300 py-3 focus:outline-none focus:border-[#085733]"
            />
            <input
              type="email"
              name="user_email"
              placeholder="Email"
              required
              className="border-b border-gray-300 py-3 focus:outline-none focus:border-black"
            />
          </div>

          <input
            type="tel"
            name="mobile"
            placeholder="Phone"
            required
            className="border-b border-gray-300 py-3 focus:outline-none focus:border-black"
          />

          <textarea
            name="message"
            placeholder="Message"
            rows="5"
            required
            className="border-b border-gray-300 py-3 focus:outline-none focus:border-black"
          />

          <button
            type="submit"
            className="cursor-pointer group mt-6 w-fit inline-flex items-center justify-center px-6 py-3 bg-[#857333] text-white font-semibold rounded-lg shadow-md hover:bg-[#085733] hover:shadow-lg transition-all duration-300 active:scale-95"
          >
            Send Message
            <span className="ml-2 group-hover:translate-x-1 transition-transform duration-300">
              →
            </span>
          </button>
        </form>
      </section>

      {/* PROCESS */}
      <section className="max-w-6xl mx-auto px-6 py-24 border-t text-[#085733]">
        <h2 className="text-3xl md:text-4xl font-semibold mb-16 text-center">
          How We Work
        </h2>

        <div className="grid md:grid-cols-4 gap-10 text-center">

          {[
            "Submit Inquiry",
            "Initial Consultation",
            "Project Planning",
            "Execution & Delivery",
          ].map((step, i) => (
            <div key={i}>
              <div className="text-3xl font-bold text-[#085733] mb-3">
                0{i + 1}
              </div>
              <p className="text-gray-600">{step}</p>
            </div>
          ))}

        </div>
      </section>


      {/* SINGLE BRANCH */}
      <section className="max-w-6xl mx-auto px-6 py-16 text-[#085733]">
        <div className="grid md:grid-cols-2 gap-12 items-start">

          {/* MAP */}
          <div>
            <iframe
              className="w-full h-100"
              src={branch.mapEmbedUrl}
              loading="lazy"
              title="map"
            />
          </div>

          {/* DETAILS */}
          <div className="space-y-4 text-[#085733]">
            <h3 className="text-2xl font-semibold text-[#085733]">
              Riyadh Office Address
            </h3>

            <p>{branch.address}</p>
            <p>{branch.phone}</p>
            <p>{branch.email}</p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-4xl mx-auto px-6 py-24 text-[#085733]">
        <h2 className="text-3xl md:text-4xl font-semibold mb-10 text-center">
          Frequently Asked Questions
        </h2>

        <div className="space-y-6">

          {[
            {
              q: "How quickly do you respond?",
              a: "Our team typically responds within 24 hours.",
            },
            {
              q: "Do you handle international projects?",
              a: "Yes, we operate across Saudi Arabia and global markets.",
            },
            {
              q: "Can I request a custom solution?",
              a: "Absolutely. We specialize in tailored, scalable solutions.",
            },
          ].map((faq, i) => (
            <div key={i} className="border-b pb-4 text-[#085733]">
              <h3 className="font-semibold text-[#085733]">{faq.q}</h3>
              <p className="text-gray-600 mt-2">{faq.a}</p>
            </div>
          ))}

        </div>
      </section>

      {/* FINAL STATEMENT */}
      <section className="max-w-4xl mx-auto px-6 py-24 text-center text-[#085733]">
        <h2 className="text-3xl md:text-5xl font-semibold leading-tight text-[#085733]">
          Let’s build something meaningful together.
        </h2>
      </section>
    </div>
  );
}
