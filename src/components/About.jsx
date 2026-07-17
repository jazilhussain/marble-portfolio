import { FaAward, FaGem, FaUsers } from "react-icons/fa";

function About() {
  return (
    <section id="about" data-aos="fade-up" data-aos="fade-up" className="bg-[#111111] text-white py-24 px-8">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">

        {/* Left Side */}
        <div>
          <p className="text-yellow-600 uppercase tracking-[4px] mb-3">
            About BM Marble
          </p>

          <h2 className="text-5xl font-bold mb-6 leading-tight">
            Creating Luxury
            <br />
            Through Natural Stone
          </h2>

          <p className="text-gray-400 leading-8 mb-6">
            BM Marble specializes in premium marble, granite and
            luxury stone solutions for residential and commercial
            projects. Our commitment to quality craftsmanship and
            elegant designs helps transform spaces into timeless masterpieces.
          </p>

          <button className="bg-yellow-600 px-7 py-3 rounded-lg hover:bg-yellow-700 transition">
            Learn More
          </button>
        </div>

        {/* Right Side */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          <div className="bg-[#1a1a1a] p-8 rounded-2xl text-center">
            <FaGem className="text-4xl text-yellow-600 mx-auto mb-5" />
            <h3 className="text-3xl font-bold mb-2">500+</h3>
            <p className="text-gray-400">Premium Designs</p>
          </div>

          <div className="bg-[#1a1a1a] p-8 rounded-2xl text-center">
            <FaUsers className="text-4xl text-yellow-600 mx-auto mb-5" />
            <h3 className="text-3xl font-bold mb-2">100+</h3>
            <p className="text-gray-400">Happy Clients</p>
          </div>

          <div className="bg-[#1a1a1a] p-8 rounded-2xl text-center">
            <FaAward className="text-4xl text-yellow-600 mx-auto mb-5" />
            <h3 className="text-3xl font-bold mb-2">10+</h3>
            <p className="text-gray-400">Years Experience</p>
          </div>
        </div>

      </div>
    </section>
  );
}

export default About;