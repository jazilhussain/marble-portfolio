import {
  FaProjectDiagram,
  FaUsers,
  FaAward,
  FaGem,
} from "react-icons/fa";

function Stats() {
  const stats = [
    {
      icon: <FaProjectDiagram />,
      number: "500+",
      title: "Projects Completed",
    },
    {
      icon: <FaAward />,
      number: "15+",
      title: "Years Experience",
    },
    {
      icon: <FaUsers />,
      number: "1000+",
      title: "Happy Clients",
    },
    {
      icon: <FaGem />,
      number: "50+",
      title: "Premium Designs",
    },
  ];

  return (
    <section className="bg-[#0c0c0c] py-20 px-6">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 lg:grid-cols-4 gap-8">

        {stats.map((item, index) => (
          <div
            key={index}
            className="
              bg-[#151515]
              border border-gray-800
              rounded-3xl
              p-8
              text-center
              hover:border-yellow-600
              hover:-translate-y-2
              transition-all duration-500
            "
          >
            <div className="text-4xl text-yellow-600 mb-5 flex justify-center">
              {item.icon}
            </div>

            <h3 className="text-4xl font-bold text-white mb-2">
              {item.number}
            </h3>

            <p className="text-gray-400">
              {item.title}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Stats;