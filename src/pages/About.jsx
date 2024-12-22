function Posts() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 text-gray-800 px-8 py-16">
      {/* Header Section */}
      <section className="text-center mb-16">
        <h1 className="text-5xl font-extrabold text-gray-900">TRISHA'S | CLOTHING SHOP</h1>
        <p className="mt-4 text-lg text-gray-600 font-medium">
          Discover the latest fashion trends, curated just for you.
        </p>
      </section>

      {/* Posts Section */}
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
        {/* Sample Post */}
        <div className="bg-white shadow-xl rounded-lg overflow-hidden transition-transform transform hover:scale-105 duration-300">
          <div className="p-6">
            <h3 className="text-2xl font-semibold text-gray-800 mb-2">Stylish Summer Dress</h3>
            <p className="text-gray-600 text-base mb-4">
              A perfect summer dress for those warm, sunny days. Lightweight, comfortable, and stylish for any occasion.
            </p>
            <div className="mt-4">
              <button className="px-6 py-2 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-500 transition-colors duration-300">
                View Details
              </button>
            </div>
          </div>
        </div>

        <div className="bg-white shadow-xl rounded-lg overflow-hidden transition-transform transform hover:scale-105 duration-300">
          <div className="p-6">
            <h3 className="text-2xl font-semibold text-gray-800 mb-2">Trendy Winter Jacket</h3>
            <p className="text-gray-600 text-base mb-4">
              Stay warm and stylish this winter with our trendy winter jacket. Perfect for chilly days and nights.
            </p>
            <div className="mt-4">
              <button className="px-6 py-2 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-500 transition-colors duration-300">
                View Details
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Comments Section */}
      <section className="mt-16 text-center">
        <h2 className="text-3xl font-semibold text-gray-900 mb-6">Customer Comments</h2>
        
        {/* Comment Display */}
        <div className="max-w-3xl mx-auto space-y-6">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <p className="text-gray-800">"Love the dress! It's perfect for my summer vacation."</p>
            <span className="text-sm text-gray-600">- Jane Doe</span>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <p className="text-gray-800">"The jacket is so cozy! Highly recommend it for winter."</p>
            <span className="text-sm text-gray-600">- John Smith</span>
          </div>
        </div>
        
        {/* Comment Box */}
        <h3 className="text-xl font-semibold text-gray-900 mt-12 mb-4">Leave a Comment</h3>
        <form className="max-w-lg mx-auto bg-white p-8 rounded-lg shadow-lg">
          <div className="mb-6">
            <label htmlFor="name" className="block text-lg text-gray-700 font-medium mb-2">
              Your Name
            </label>
            <input
              type="text"
              id="name"
              className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your name"
            />
          </div>
          <div className="mb-6">
            <label htmlFor="comment" className="block text-lg text-gray-700 font-medium mb-2">
              Comment
            </label>
            <textarea
              id="comment"
              rows="4"
              className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your comment"
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full py-3 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-500 transition-colors duration-300"
          >
            Submit Comment
          </button>
        </form>
      </section>
    </div>
  );
}

export default Posts;
