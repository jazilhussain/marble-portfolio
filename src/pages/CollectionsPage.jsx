import { Link } from "react-router-dom";

import italian from "../assets/collections/italian-marble/italian3.jpg";
import granite from "../assets/collections/granite/granite3.jpg";
import onyx from "../assets/collections/onyx/onyx1.jpg";
import chess from "../assets/collections/marble-chess/chess1.jpg";
import eggs from "../assets/collections/marble-eggs/egg1.jpg";
import horses from "../assets/collections/marble-horses/horse1.jpg";
import vase from "../assets/collections/flower-vases/vase2.jpg";
import decor from "../assets/collections/decorative/decor1.jpg";
import fountain from "../assets/collections/fountains/fountain1.jpg";
import custom from "../assets/collections/custom-art/custom1.jpg";


function CollectionsPage() {

  const categories = [
    {
      title: "Italian Marble",
      slug: "italian-marble",
      image: italian,
    },
    {
      title: "Granite",
      slug: "granite",
      image: granite,
    },
    {
      title: "Onyx",
      slug: "onyx",
      image: onyx,
    },
    {
      title: "Marble Chess Sets",
      slug: "marble-chess",
      image: chess,
    },
    {
      title: "Marble Eggs",
      slug: "marble-eggs",
      image: eggs,
    },
    {
      title: "Marble Horses",
      slug: "marble-horses",
      image: horses,
    },
    {
      title: "Marble Flower Vases",
      slug: "flower-vases",
      image: vase,
    },
    {
      title: "Decorative Items",
      slug: "decorative",
      image: decor,
    },
    {
      title: "Marble Fountains",
      slug: "fountains",
      image: fountain,
    },
    {
      title: "Custom Marble Art",
      slug: "custom-art",
      image: custom,
    },
  ];


  return (
    <section className="bg-black min-h-screen text-white py-28 px-6">
      <div className="max-w-7xl mx-auto">


        <div className="text-center mb-14">

          <p className="text-[#C9A227] uppercase tracking-[4px] mb-3">
            Our Collection
          </p>

          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Full Product Collection
          </h1>

          <p className="text-gray-400">
            Explore our premium marble products and decorative creations.
          </p>

        </div>


        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">

          {categories.map((item, index) => (

            <Link
              key={index}
              to={`/collections/${item.slug}`}
              className="
                group
                bg-[#151515]
                rounded-2xl
                border border-gray-800
                p-5
                text-center
                hover:border-[#C9A227]
                hover:-translate-y-2
                transition-all duration-300
              "
            >

              <div
                className="
                  h-32
                  rounded-xl
                  overflow-hidden
                  mb-4
                "
              >

                <img
                  src={item.image}
                  alt={item.title}
                  className="
                    w-full
                    h-full
                    object-cover
                    group-hover:scale-110
                    transition
                    duration-500
                  "
                />

              </div>


              <h3
                className="
                  text-sm
                  md:text-base
                  font-semibold
                  group-hover:text-[#C9A227]
                  transition
                "
              >
                {item.title}
              </h3>


            </Link>

          ))}

        </div>


      </div>
    </section>
  );
}

export default CollectionsPage;