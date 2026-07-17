import { useState } from "react";
import {
  FaChevronLeft,
  FaChevronRight,
} from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

import gallery1 from "../assets/gallery/gallery1.jpg";
import gallery2 from "../assets/gallery/gallery2.jpg";
import gallery3 from "../assets/gallery/gallery3.jpg";
import gallery4 from "../assets/gallery/gallery4.jpg";
import gallery5 from "../assets/gallery/gallery5.jpg";
import gallery7 from "../assets/gallery/gallery7.jpg";
import gallery8 from "../assets/gallery/gallery8.jpg";
import gallery9 from "../assets/gallery/gallery9.jpg";
import gallery10 from "../assets/gallery/gallery10.jpg";
import gallery11 from "../assets/gallery/gallery11.jpg";
import gallery12 from "../assets/gallery/gallery12.jpg";
import gallery13 from "../assets/gallery/gallery13.jpg";
import gallery14 from "../assets/gallery/gallery14.jpg";
import gallery15 from "../assets/gallery/gallery15.jpg";
import gallery17 from "../assets/gallery/gallery18.jpg";
import gallery18 from "../assets/gallery/gallery19.jpg";
import gallery19 from "../assets/gallery/gallery20.jpg";
import gallery20 from "../assets/gallery/gallery20.jpg";
import gallery21 from "../assets/gallery/gallery21.jpg";
import gallery26 from "../assets/gallery/gallery26.jpeg";
import gallery27 from "../assets/gallery/gallery27.jpeg";
import gallery30 from "../assets/gallery/gallery30.jpeg";
import gallery31 from "../assets/gallery/gallery31.jpeg";
import gallery32 from "../assets/gallery/gallery32.jpeg";


const images = [
  gallery1,
  gallery2,
  gallery3,
  gallery4,
  gallery5,
  gallery7,
  gallery8,
  gallery9,
  gallery10,
  gallery11,
  gallery12,
  gallery13,
  gallery14,
  gallery15,
  gallery17,
  gallery18,
  gallery19,
  gallery20,
  gallery21,
  gallery26,
  gallery27,
  gallery30,
  gallery31,
  gallery32,
];


function Gallery() {

  const [selectedImage, setSelectedImage] = useState(null);
  const [page, setPage] = useState(0);

  const imagesPerPage = 3;

  const start = page * imagesPerPage;

  const visibleImages = images.slice(
    start,
    start + imagesPerPage
  );


  return (
    <section className="bg-black text-white pt-12 pb-6 px-8">

      <div className="max-w-7xl mx-auto">


        {/* Heading */}

        <div className="text-center mb-16">

          <p className="text-yellow-600 uppercase tracking-[4px] mb-3">
            Gallery
          </p>

          <h2 className="text-4xl md:text-5xl font-bold mb-5">
            Marble Inspiration Gallery
          </h2>

          <p className="flex justify-center">
            Explore our premium marble installations and luxury interiors.
          </p>

        </div>



        {/* Gallery Images */}

        <AnimatePresence mode="wait">

          <motion.div

            key={page}

            initial={{
              opacity:0,
              x:80
            }}

            animate={{
              opacity:1,
              x:0
            }}

            exit={{
              opacity:0,
              x:-80
            }}

            transition={{
              duration:0.5,
              ease:"easeInOut"
            }}

            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"

          >


            {visibleImages.map((img,index)=>(

              <motion.div

                key={index}

                onClick={()=>setSelectedImage(img)}

                whileHover={{
                  scale:1.03
                }}

                className="
                  relative
                  overflow-hidden
                  rounded-3xl
                  group
                  cursor-pointer
                  border border-gray-800
                  hover:border-yellow-600
                  transition-all duration-500
                "

              >


                <img

                  src={img}

                  alt="Marble Interior"

                  className="
                    w-full
                    h-80
                    object-cover
                    group-hover:scale-110
                    transition duration-700
                  "

                />


                <div

                  className="
                    absolute inset-0
                    bg-black/50
                    opacity-0
                    group-hover:opacity-100
                    transition duration-500
                    flex items-center justify-center
                  "

                >

                  <h3 className="text-2xl font-semibold">
                    View Image
                  </h3>

                </div>


              </motion.div>


            ))}


          </motion.div>

        </AnimatePresence>





        {/* Slider Buttons */}

        {images.length > imagesPerPage && (

          <div className="flex justify-center gap-4 mt-4">


            <button

              disabled={page === 0}

              onClick={()=>setPage(page-1)}

              className="
                w-10
                h-10
                rounded-full
                border
                border-gray-700
                flex
                items-center
                justify-center
                hover:border-yellow-600
                transition
                disabled:opacity-30
              "

            >

              <FaChevronLeft size={14}/>

            </button>



            <button

              disabled={
                start + imagesPerPage >= images.length
              }

              onClick={()=>setPage(page+1)}

              className="
                w-10
                h-10
                rounded-full
                bg-yellow-600
                text-black
                flex
                items-center
                justify-center
                hover:bg-yellow-500
                transition
                disabled:opacity-30
              "

            >

              <FaChevronRight size={14}/>

            </button>


          </div>

        )}






        {/* Image Modal */}

        {selectedImage && (

          <div

            onClick={()=>setSelectedImage(null)}

            className="
              fixed
              inset-0
              bg-black/90
              z-50
              flex
              items-center
              justify-center
              p-6
            "

          >


            <button

              className="
                absolute
                top-6
                right-8
                text-white
                text-5xl
              "

            >

              ×

            </button>



            <img

              src={selectedImage}

              alt="Selected Marble"

              className="
                max-w-[90%]
                max-h-[90vh]
                rounded-3xl
              "

            />


          </div>

        )}



      </div>

    </section>
  );
}


export default Gallery;