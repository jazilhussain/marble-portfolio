import { FaWhatsapp } from "react-icons/fa";

function FloatingWhatsapp() {
  return (
    <a
      href="https://wa.me/923001234567"
      target="_blank"
      rel="noreferrer"
      className="
        fixed
        bottom-6
        right-6
        w-14
        h-14
        bg-green-500
        rounded-full
        flex
        items-center
        justify-center
        text-white
        text-3xl
        shadow-2xl
        hover:scale-110
        transition-all
        duration-300
        z-50
      "
    >
      <FaWhatsapp />
    </a>
  );
}

export default FloatingWhatsapp;