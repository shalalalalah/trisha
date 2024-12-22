import { useEffect, useState } from "react";

function PostsPage() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch("https://fakestoreapi.com/products");
        const data = await response.json();
        setProducts(data); // Assuming the API returns an array of products
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();
  }, []);

  return (
    <div>
      <h1 className="text-2xl px-6 py-10"></h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-6">
        {products.map((product) => (
          <div key={product.id} className="p-4 border rounded-md shadow-md">
            <h2 className="font-bold text-lg">{product.title}</h2>
            <p className="text-gray-700">Price: ${product.price}</p>
            <p className="text-gray-700">Category: {product.category}</p>
            <p className="text-gray-700">Description: {product.description}</p>
            <img src={product.image} alt={product.title} className="w-full h-auto mt-4" />
          </div>
        ))}
      </div>
    </div>
  );
}

export default PostsPage;
