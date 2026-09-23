import Navbar from "../components/Navbar";


export default function About() {
  return (
    <><Navbar />
    <main className="min-h-screen bg-white">
          <section className="bg-gray-100 py-20 px-6 text-center">
              <h1 className="text-5xl font-bold text-gray-900">
                  About Ahimie Perfumeries
              </h1>

              <p className="mt-6 max-w-2xl mx-auto text-lg text-gray-600">
                  Discover fragrances carefully selected to help you express your
                  personality, confidence, and individuality.
              </p>
          </section>

          <section className="max-w-6xl mx-auto px-6 py-16 grid md:grid-cols-2 gap-12 items-center">
              <div>
                  <h2 className="text-3xl font-bold mb-6">
                      Our Story
                  </h2>

                  <p className="text-gray-600 leading-8">
                      At Ahimie Perfumeries, we believe fragrance is more than just a
                      scent. It is a personal signature that can create memories,
                      express personality, and make every moment special.
                  </p>

                  <p className="text-gray-600 leading-8 mt-4">
                      Our collection brings together carefully selected fragrances for
                      everyday wear, special occasions, and memorable moments.
                  </p>
              </div>

              <img
                  src="/pef4.jpeg"
                  alt="Ahimie Perfumeries"
                  className="w-full h-96 object-cover rounded-2xl" />
          </section>

          <section className="bg-gray-900 text-white py-16 px-6 text-center">
              <h2 className="text-3xl font-bold">
                  Our Mission
              </h2>

              <p className="max-w-2xl mx-auto mt-5 text-gray-300 leading-8">
                  To make beautiful and memorable fragrances accessible while
                  providing every customer with a simple and enjoyable shopping
                  experience.
              </p>
          </section>
      </main></>
  );
}