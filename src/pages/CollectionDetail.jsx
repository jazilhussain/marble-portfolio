import { useParams } from "react-router-dom";
import { FaWhatsapp } from "react-icons/fa";
import { collectionImages } from "../data/collectionImages";


const collectionData = {

  "italian-marble": {
    title: "Italian Marble",
    description:
      "Premium imported Italian marble with luxurious finishes and elegant textures.",
  },

  granite: {
    title: "Granite",
    description:
      "Durable and elegant natural stone ideal for modern interiors and commercial projects.",
  },

  onyx: {
    title: "Onyx Marble",
    description:
      "Exclusive natural stone featuring stunning patterns and premium aesthetics.",
  },

  "marble-chess": {
    title: "Marble Chess Sets",
    description:
      "Luxury handcrafted marble chess sets made with premium stones.",
  },

  "marble-eggs": {
    title: "Marble Eggs",
    description:
      "Decorative marble eggs available in various colors and finishes.",
  },

  "marble-horses": {
    title: "Marble Horses",
    description:
      "Beautiful handcrafted marble horse sculptures for decoration.",
  },

  "flower-vases": {
    title: "Marble Flower Vases",
    description:
      "Elegant marble flower vases for homes, offices, and luxury interiors.",
  },

  decorative: {
    title: "Decorative Items",
    description:
      "Premium decorative marble handicrafts and artistic pieces.",
  },

  fountains: {
    title: "Marble Fountains",
    description:
      "Luxury marble fountains suitable for villas and commercial projects.",
  },

  "custom-art": {
    title: "Custom Marble Art",
    description:
      "Custom-designed marble products according to client requirements.",
  },

};


function CollectionDetail() {

  const { slug } = useParams();

  const item = collectionData[slug];

  const images = collectionImages[slug] || [];


  if (!item) {

    return (
      <section className="bg-black min-h-screen text-white flex items-center justify-center">

        <h1 className="text-3xl font-bold">
          Collection Not Found
        </h1>

      </section>
    );

  }


  return (

    <section className="bg-black min-h-screen text-white py-28 px-6">

      <div className="max-w-7xl mx-auto">


        {/* Header */}

        <div className="text-center mb-14">


          <p className="
            text-[#C9A227]
            uppercase
            tracking-[4px]
            mb-3
          ">
            BM Marble Collection
          </p>


          <h1 className="
            text-4xl
            md:text-5xl
            font-bold
            mb-5
          ">
            {item.title}
          </h1>


          <p className="
            text-gray-400
            max-w-3xl
            mx-auto
            leading-8
          ">
            {item.description}
          </p>


          <a
            href="#contact"
            className="
              inline-flex
              items-center
              gap-2
              mt-8
              bg-[#C9A227]
              text-black
              px-6
              py-3
              rounded-full
              font-semibold
              hover:scale-105
              transition-all
              duration-300
            "
          >

            <FaWhatsapp />

            Inquire on WhatsApp

          </a>


        </div>



        {/* Gallery */}

        {
          images.length > 0 ? (

            <div className="
              grid
              grid-cols-2
              md:grid-cols-3
              lg:grid-cols-4
              xl:grid-cols-5
              gap-5
            ">


              {
                images.map((image,index)=>(

                  <div
                    key={index}
                    className="
                      h-48
                      rounded-xl
                      overflow-hidden
                      border
                      border-gray-800
                      hover:border-[#C9A227]
                      hover:-translate-y-2
                      transition-all
                      duration-300
                    "
                  >

                    <img
                      src={image}
                      alt={`${item.title} ${index + 1}`}
                      className="
                        w-full
                        h-full
                        object-cover
                        hover:scale-110
                        transition-transform
                        duration-500
                      "
                    />

                  </div>

                ))
              }


            </div>

          ) : (

            <div className="
              text-center
              text-gray-500
              py-20
            ">

              No images available

            </div>

          )
        }


      </div>

    </section>

  );

}


export default CollectionDetail;