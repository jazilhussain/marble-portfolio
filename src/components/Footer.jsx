import {
  FaFacebookF,
  FaInstagram,
  FaWhatsapp,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
} from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-[#080808] text-white border-t border-gray-800">

      <div className="max-w-7xl mx-auto px-8 py-12 grid md:grid-cols-2 lg:grid-cols-4 gap-10">


        {/* Brand */}

        <div>

          <h2 className="text-2xl font-bold mb-2">
            BM <span className="text-yellow-600">Marble</span>
          </h2>

          <div className="w-14 h-1 bg-yellow-600 rounded-full mb-4"></div>


          <p className="text-sm text-gray-400 leading-6">
            Premium marble and granite solutions for
            luxury homes, villas and commercial spaces.
          </p>


          <div className="flex gap-3 mt-5">

            <div className="
              w-9 h-9
              rounded-full
              border border-gray-700
              flex items-center justify-center
              hover:text-yellow-600
              hover:border-yellow-600
              transition
              cursor-pointer
            ">
              <FaFacebookF size={14}/>
            </div>


            <div className="
              w-9 h-9
              rounded-full
              border border-gray-700
              flex items-center justify-center
              hover:text-yellow-600
              hover:border-yellow-600
              transition
              cursor-pointer
            ">
              <FaInstagram size={14}/>
            </div>


            <div className="
              w-9 h-9
              rounded-full
              border border-gray-700
              flex items-center justify-center
              hover:text-yellow-600
              hover:border-yellow-600
              transition
              cursor-pointer
            ">
              <FaWhatsapp size={14}/>
            </div>

          </div>


        </div>




        {/* Navigation */}

        <div>

          <h3 className="text-sm font-semibold uppercase tracking-wider mb-5">
            Navigation
          </h3>


          <ul className="space-y-3 text-sm text-gray-400">

            <li className="hover:text-yellow-600 cursor-pointer transition">
              Home
            </li>

            <li className="hover:text-yellow-600 cursor-pointer transition">
              About
            </li>

            <li className="hover:text-yellow-600 cursor-pointer transition">
              Collections
            </li>

            <li className="hover:text-yellow-600 cursor-pointer transition">
              Projects
            </li>

            <li className="hover:text-yellow-600 cursor-pointer transition">
              Contact
            </li>

          </ul>


        </div>





        {/* Collections */}

        <div>

          <h3 className="text-sm font-semibold uppercase tracking-wider mb-5">
            Collections
          </h3>


          <ul className="space-y-3 text-sm text-gray-400">

            <li className="hover:text-yellow-600 transition">
              Italian Marble
            </li>

            <li className="hover:text-yellow-600 transition">
              Granite
            </li>

            <li className="hover:text-yellow-600 transition">
              Onyx Marble
            </li>

            <li className="hover:text-yellow-600 transition">
              Travertine
            </li>

          </ul>

        </div>






        {/* Contact */}

        <div>

          <h3 className="text-sm font-semibold uppercase tracking-wider mb-5">
            Contact
          </h3>


          <div className="space-y-4 text-sm text-gray-400">


            <div className="flex gap-3 items-center">

              <FaPhoneAlt className="text-yellow-600"/>

              <span>
                +92 XXX XXXXXXX
              </span>

            </div>



            <div className="flex gap-3 items-center">

              <FaEnvelope className="text-yellow-600"/>

              <span>
                info@bmmarble.com
              </span>

            </div>



            <div className="flex gap-3 items-center">

              <FaMapMarkerAlt className="text-yellow-600"/>

              <span>
                Karachi, Pakistan
              </span>

            </div>


          </div>


        </div>


      </div>





      {/* Bottom Bar */}

      <div className="
        border-t
        border-gray-800
        py-5
        text-center
      ">

        <p className="text-xs text-gray-500">
          © 2026 BM Marble. All Rights Reserved.
        </p>

      </div>


    </footer>
  );
}

export default Footer;