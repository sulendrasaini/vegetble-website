import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-100 py-12 px-6">
      <div className="max-w-[1400px] mx-auto grid md:grid-cols-4 gap-10">

        {/* Logo & Description */}
        <div>
          <h1 className="text-3xl font-bold">
            Gr<span className="bg-gradient-to-b from-green-700 to-green-950 bg-clip-text text-transparent">O</span>cify
          </h1>
          <p className="text-gray-600 mt-4 text-sm leading-6">
            Bred for a high content of beneficial substances.
            Our products are all fresh and healthy.
          </p>
          <p className="text-gray-500 mt-6 text-sm">
            2025 © All Right Reserved
          </p>
        </div>

        {/* Company */}
        <div>
          <h2 className="font-semibold text-lg mb-4">Company</h2>
          <ul className="text-gray-600 space-y-2 text-sm">
            <li className="cursor-pointer hover:text-black">About</li>
            <li className="cursor-pointer hover:text-black">FAQ's</li>
          </ul>
        </div>

        {/* Support */}
        <div>
          <h2 className="font-semibold text-lg mb-4">Support</h2>
          <ul className="text-gray-600 space-y-2 text-sm">
            <li className="cursor-pointer hover:text-black">Support center</li>
            <li className="cursor-pointer hover:text-black">Feedback</li>
            <li className="cursor-pointer hover:text-black">Contact us</li>
          </ul>
        </div>

        {/* Stay Connected */}
        <div>
          <h2 className="font-semibold text-lg mb-4">Stay Connected</h2>
          <p className="text-gray-600 text-sm mb-4">
            Questions or Feedback? we'd love to hear from you.
          </p>

          <div className="flex">
            <input
              type="email"
              placeholder="Email address"
              className="w-full px-4 py-2 rounded-l-md border border-gray-300 outline-none"
            />
            <button className="bg-orange-500 text-white px-4 rounded-r-md">
              ➤
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;