import { useState } from "react";
import { FaWhatsapp, FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";


function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-black/70 backdrop-blur-xl border-b border-gray-800">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-8 py-4 flex justify-between items-center">
        {/* Logo */}
<div className="flex flex-col">
  <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-wide leading-none">
    BM <span className="text-[#C9A227]">Marble</span>
  </h2>

  <p className="text-[8px] sm:text-[9px] text-gray-400 tracking-[2.5px] mt-2 leading-tight">
    PREMIUM MARBLE & GRANITE
  </p>
</div>


        {/* Mobile Toggle Button */}
        <button
          className="md:hidden text-2xl text-white z-50"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>


        {/* Menu */}
        <ul
          className={`
            fixed md:static top-0 right-0 h-screen md:h-auto
            w-3/4 sm:w-1/2 md:w-auto
            bg-black/95 md:bg-transparent
            backdrop-blur-xl md:backdrop-blur-none
            flex flex-col md:flex-row
            items-center md:items-center
            justify-center md:justify-start
            gap-8 md:gap-8
            text-[16px] md:text-[14px]
            font-medium text-gray-300
            transition-transform duration-300 ease-in-out
            ${menuOpen ? "translate-x-0" : "translate-x-full"}
            md:translate-x-0
          `}
        >

  <li>
    <a
      href="/#home"
      onClick={closeMenu}
      className="
        relative transition hover:text-[#C9A227]
        after:absolute after:left-0 after:-bottom-1
        after:w-0 after:h-[1px]
        after:bg-[#C9A227]
        after:transition-all
        hover:after:w-full
      "
    >
      Home
    </a>
  </li>

  <li>
    <a
      href="/#about"
      onClick={closeMenu}
      className="
        relative transition hover:text-[#C9A227]
        after:absolute after:left-0 after:-bottom-1
        after:w-0 after:h-[1px]
        after:bg-[#C9A227]
        after:transition-all
        hover:after:w-full
      "
    >
      About
    </a>
  </li>

  <li>
    <Link
      to="/collections"
      onClick={closeMenu}
      className="
        relative transition hover:text-[#C9A227]
        after:absolute after:left-0 after:-bottom-1
        after:w-0 after:h-[1px]
        after:bg-[#C9A227]
        after:transition-all
        hover:after:w-full
      "
    >
      Collections
    </Link>
  </li>

  <li>
    <a
      href="/#projects"
      onClick={closeMenu}
      className="
        relative transition hover:text-[#C9A227]
        after:absolute after:left-0 after:-bottom-1
        after:w-0 after:h-[1px]
        after:bg-[#C9A227]
        after:transition-all
        hover:after:w-full
      "
    >
      Projects
    </a>
  </li>

  <li>
    <a
      href="/#contact"
      onClick={closeMenu}
      className="
        relative transition hover:text-[#C9A227]
        after:absolute after:left-0 after:-bottom-1
        after:w-0 after:h-[1px]
        after:bg-[#C9A227]
        after:transition-all
        hover:after:w-full
      "
    >
      Contact
    </a>
  </li>

</ul>



        {/* WhatsApp Button */}
       <a
  href="/#contact"
  className="
    hidden sm:flex items-center gap-2
    bg-[#C9A227]
    text-black
    px-4 py-2
    rounded-full
    text-sm
    font-semibold
    hover:scale-105
    hover:bg-[#b8921f]
    transition-all duration-300
    order-3 md:order-none
  "
>
  <FaWhatsapp size={16} />
  WhatsApp
</a>


      </div>

    </nav>
  );
}

export default Navbar;