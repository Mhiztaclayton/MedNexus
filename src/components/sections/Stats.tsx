
const statItems = [
  { value: "100%", label: "Data Ownership" },
  { value: "60%", label: "Reduced Admin Costs" },
  { value: "99.9%", label: "Uptime Guarantee" },
  { value: "15min", label: "Average Integration Time" },
];

const Stats = () => {
  return (
    <section className="py-16 bg-gradient-to-r from-medblue-500 to-medteal-500 text-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {statItems.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-4xl md:text-5xl font-bold mb-2">{stat.value}</div>
              <div className="text-blue-100">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
