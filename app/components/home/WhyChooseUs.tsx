const features = [
  { title: "Genuine Products", desc: "Quality-checked products" },
  { title: "Secure Payments", desc: "Safe payment experience" },
  { title: "Fast Delivery", desc: "Convenient doorstep delivery" },
];

export default function WhyChooseUs() {
  return (
    <section className="mx-auto w-[calc(100%-32px)] max-w-[1280px] py-16 sm:w-[calc(100%-48px)] lg:w-[calc(100%-64px)]">
      <h2 className="text-3xl font-bold text-center">
        Why Choose Us?
      </h2>

      <div className="grid md:grid-cols-3 gap-8 mt-10">
        {features.map((feature) => (
          <div key={feature.title} className="text-center p-6 border rounded-xl">
            <h3 className="font-bold text-xl text-green-700">
              {feature.title}
            </h3>
            <p className="text-gray-500 mt-3">
              {feature.desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}