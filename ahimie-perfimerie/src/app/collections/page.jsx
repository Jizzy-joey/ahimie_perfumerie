import Navbar from "../components/Navbar";

export default function Collections() {
  return (
    <div className="min-h-screen">
      <Navbar />

      <section className="py-20 px-6 text-center">
        <h1 className="text-5xl font-bold">
          Our Collections
        </h1>

        <p className="mt-5 text-gray-600">
          Discover fragrances curated for every mood and occasion.
        </p>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto mt-12">
          <div className="p-8 bg-gray-100 rounded-2xl">
            <h2 className="text-2xl font-bold">
              Everyday Collection
            </h2>

            <p className="mt-3 text-gray-600">
              Fresh fragrances for your everyday moments.
            </p>
          </div>

          <div className="p-8 bg-gray-100 rounded-2xl">
            <h2 className="text-2xl font-bold">
              Luxury Collection
            </h2>

            <p className="mt-3 text-gray-600">
              Sophisticated scents for special occasions.
            </p>
          </div>

          <div className="p-8 bg-gray-100 rounded-2xl">
            <h2 className="text-2xl font-bold">
              Signature Collection
            </h2>

            <p className="mt-3 text-gray-600">
              Distinctive fragrances designed to leave an impression.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}