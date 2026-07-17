import { FaArrowRight } from "react-icons/fa";

import italian from "../assets/products/italian.jpg";
import granite from "../assets/products/granite.jpg";
import onyx from "../assets/products/onyx.jpg";
import travertine from "../assets/products/travertine.jpg";
import signature from "../assets/products/signature.jpg";


const products = [
  {
    title: "Italian Marble",
    desc: "Premium imported marble with luxurious finishes.",
    image: italian,
  },
  {
    title: "Granite",
    desc: "Durable and elegant stone for modern spaces.",
    image: granite,
  },
  {
    title: "Onyx Marble",
    desc: "Exclusive natural stone with stunning patterns.",
    image: onyx,
  },
  {
    title: "Travertine",
    desc: "Classic stone perfect for timeless interiors.",
    image: travertine,
  },
  {
  title: "Custom Designs",
  desc: "Tailored stone solutions for unique projects.",
  image: signature,
},
  {
    title: "Onyx Marble",
    desc: "Exclusive natural stone with stunning patterns.",
    image: onyx,
  },
];

function Products() {
  return (
    <section id="collection" data-aos="zoom-in" className="bg-black text-white py-24 px-8">
      <div className="max-w-7xl mx-auto">
       <div className="text-center mb-16">
  <p className="text-[#C9A227] uppercase tracking-[4px] mb-4">
    Our Collection
  </p>

  <h2 className="text-4xl md:text-5xl font-bold mb-6">
    Premium Marble Collection
  </h2>

  <div className="flex justify-center">
    <p className="text-gray-400 text-lg leading-8 w-full md:w-[700px]">
      Discover our exclusive range of marble and stone solutions
      crafted for luxury interiors and commercial projects.
    </p>
  </div>
</div>

     <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
  {products.map((item, index) => (
    <div
      key={index}
      className="
        group
        bg-[#151515]
        rounded-3xl
        border border-gray-800
        overflow-hidden
        hover:border-[#C9A227]
        hover:-translate-y-3
        hover:shadow-2xl
        transition-all duration-500
      "
    >
      <div className="h-56 overflow-hidden">
        <img
          src={item.image}
          alt={item.title}
          className="
            w-full
            h-full
            object-cover
            group-hover:scale-110
            transition-transform
            duration-700
          "
        />
      </div>

      <div className="p-8">
        <h3 className="text-2xl font-bold mb-4 group-hover:text-[#C9A227] transition-colors duration-300">
          {item.title}
        </h3>

        <p className="text-gray-400 mb-6 leading-7">
          {item.desc}
        </p>

        <button className="flex items-center gap-2 text-[#C9A227] font-medium group-hover:gap-4 transition-all duration-300">
          View Details
          <FaArrowRight />
        </button>
      </div>
    </div>
  ))}
</div>

      </div>
    </section>
  );
}

export default Products;
