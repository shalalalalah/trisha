function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-pink-50 to-pink-100">
      {/* Header */}
      <header className="flex items-center justify-center py-6">
        <h1 className="text-4xl font-bold text-pink-800">TRISHA'S | CLOTHING SHOP</h1>
      </header>

      {/* Hero Section */}
      <section className="text-center py-20">
        <h2 className="text-5xl font-extrabold text-pink-800">
          Discover Your Perfect Style
        </h2>
        <p className="mt-4 text-lg text-pink-600">
          Explore our curated collection of trendy and stylish clothing for every occasion.
        </p>
        <a
          href="/Products"
          className="mt-6 inline-block px-8 py-3 bg-pink-600 text-white font-semibold text-lg rounded-lg shadow-lg hover:bg-pink-700 transition"
        >
          Shop Now
        </a>
      </section>

      {/* Featured Section */}
      <section className="py-16 bg-white text-gray-800">
        <h3 className="text-3xl font-bold text-center text-pink-800 mb-8">
          Featured Collections
        </h3>
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 px-6">
          <div className="p-6 bg-pink-50 rounded-lg shadow-lg hover:shadow-xl transition">
            <h4 className="text-xl font-semibold text-pink-800 mb-2">
              Dresses
            </h4>
            <p className="text-gray-700">
              Elegant and stylish dresses for every occasion. Find your perfect fit.
            </p>
          </div>
          <div className="p-6 bg-pink-50 rounded-lg shadow-lg hover:shadow-xl transition">
            <h4 className="text-xl font-semibold text-pink-800 mb-2">
              Outerwear
            </h4>
            <p className="text-gray-700">
              Stay fashionable in our collection of jackets and coats for all seasons.
            </p>
          </div>
          <div className="p-6 bg-pink-50 rounded-lg shadow-lg hover:shadow-xl transition">
            <h4 className="text-xl font-semibold text-pink-800 mb-2">
              Accessories
            </h4>
            <p className="text-gray-700">
              Complete your look with the perfect accessories – bags, scarves, and more.
            </p>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="text-center py-16 bg-gradient-to-b from-pink-100 to-pink-200">
        <h3 className="text-4xl font-bold text-pink-800 mb-6">
          Join Our Fashion Community
        </h3>
        <p className="text-lg text-pink-600 mb-6">
          Stay updated with the latest trends and exclusive offers.
        </p>
        <a
          href="/About"
          className="inline-block px-8 py-3 bg-pink-600 text-white font-semibold text-lg rounded-lg shadow-lg hover:bg-pink-700 transition"
        >
          Learn More About Us
        </a>
      </section>
    </div>
  );
}

export default HomePage;
