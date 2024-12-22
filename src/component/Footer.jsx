import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaHome, FaInfoCircle, FaQuestionCircle } from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-slate-900 text-white py-4">
      <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8">
        
        {/* About Section */}
        <div>
          <h4 className="text-4xl font-bold text-pink-800 font-bold text-lg mb-4">About Us</h4>
          <p className="text-sm leading-relaxed">
            Welcome to TRISHA'S | CLOTHING SHOP, your ultimate destination for fashion enthusiasts. 
            Explore a wide range of stylish clothing, discover the latest trends, and find your next favorite outfit. 
            Dive into a world of style, comfort, and elegance today!
          </p>
        </div>

        {/* Links Section */}
        <div>
          <h4 className="text-4xl font-bold text-pink-800 font-bold text-lg mb-4">Quick Links</h4>
          <ul className="space-y-2 text-sm">
            <li className="flex items-center gap-2">
              <FaHome /> <a href="#" className="hover:text-gray-300">Home</a>
            </li>
            <li className="flex items-center gap-2">
              <FaInfoCircle /> <a href="#" className="hover:text-gray-300">About</a>
            </li>
            <li className="flex items-center gap-2">
              <FaPhoneAlt /> <a href="#" className="hover:text-gray-300">Contact</a>
            </li>
            <li className="flex items-center gap-2">
              <FaQuestionCircle /> <a href="#" className="hover:text-gray-300">FAQ</a>
            </li>
          </ul>
        </div>

        {/* Contact Section */}
        <div>
          <h4 className="text-4xl font-bold text-pink-800 font-bold text-lg mb-4">Get in Touch</h4>
          <ul className="space-y-2 text-sm">
            <li className="flex items-center gap-2">
              <FaEnvelope /> support@trishasclothingshop.com
            </li>
            <li className="flex items-center gap-2">
              <FaPhoneAlt /> +1 987 654 3210
            </li>
            <li className="flex items-center gap-2">
              <FaMapMarkerAlt /> 456 Trisha's, Fashion Street
            </li>
          </ul>
        </div>
      </div>

      <div className="text-4xl font-bold text-pink-800 mt-8 text-center text-sm pt-4">
        &copy; {new Date().getFullYear()} TRISHA'S | CLOTHING SHOP. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;
