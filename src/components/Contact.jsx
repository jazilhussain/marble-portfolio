import {
  FaPhoneAlt,
  FaWhatsapp,
  FaEnvelope,
  FaMapMarkerAlt,
} from "react-icons/fa";

function Contact() {
  return (
    <section id="contact" data-aos="fade-up" className="bg-black text-white py-24 px-8">
      <div className="max-w-7xl mx-auto">

        {/* Heading */}
        <div className="text-center mb-14">
          <p className="text-yellow-600 uppercase tracking-[3px] text-sm mb-3">
            Contact Us
          </p>

          <h2 className="text-3xl md:text-4xl font-bold mb-5">
            Get In Touch
          </h2>

          <div className="flex justify-center">
            <p className="text-gray-400 text-base leading-7 w-full md:w-[650px]">
              Contact BM Marble for premium marble solutions,
              project inquiries and expert consultation.
            </p>
          </div>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">

          {/* Phone */}
          <div
            className="
              bg-[#151515]
              p-6
              rounded-3xl
              text-center
              border border-gray-800
              hover:border-yellow-600
              hover:-translate-y-2
              transition-all duration-500
            "
          >
            <FaPhoneAlt className="text-3xl text-yellow-600 mx-auto mb-4" />

            <h3 className="text-lg font-semibold mb-2">
              Phone
            </h3>

            <p className="text-sm text-gray-400">
              +92 XXX XXXXXXX
            </p>
          </div>

          {/* WhatsApp */}
          <div
            className="
              bg-[#151515]
              p-6
              rounded-3xl
              text-center
              border border-gray-800
              hover:border-yellow-600
              hover:-translate-y-2
              transition-all duration-500
            "
          >
            <FaWhatsapp className="text-3xl text-yellow-600 mx-auto mb-4" />

            <h3 className="text-lg font-semibold mb-2">
              WhatsApp
            </h3>

            <p className="text-sm text-gray-400">
              +92 XXX XXXXXXX
            </p>
          </div>

          {/* Email */}
          <div
            className="
              bg-[#151515]
              p-6
              rounded-3xl
              text-center
              border border-gray-800
              hover:border-yellow-600
              hover:-translate-y-2
              transition-all duration-500
            "
          >
            <FaEnvelope className="text-3xl text-yellow-600 mx-auto mb-4" />

            <h3 className="text-lg font-semibold mb-2">
              Email
            </h3>

            <p className="text-sm text-gray-400 break-words">
              info@bmmarble.com
            </p>
          </div>

          {/* Address */}
          <div
            className="
              bg-[#151515]
              p-6
              rounded-3xl
              text-center
              border border-gray-800
              hover:border-yellow-600
              hover:-translate-y-2
              transition-all duration-500
            "
          >
            <FaMapMarkerAlt className="text-3xl text-yellow-600 mx-auto mb-4" />

            <h3 className="text-lg font-semibold mb-2">
              Address
            </h3>

            <p className="text-sm text-gray-400">
              Karachi, Pakistan
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}

export default Contact;