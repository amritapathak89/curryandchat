// app/page.tsx
import React from "react";

const HomePage = () => {
  return (
    <main className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-orange-100 py-20">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-orange-600 mb-4">Curry & Chat</h1>
          <p className="text-lg md:text-xl text-gray-700 mb-8">Cook delicious Indian meals & improve your English!</p>
          <div className="flex justify-center gap-4">
            <button className="bg-orange-500 text-white px-6 py-3 rounded-lg hover:bg-orange-600 transition">
              Join a Class
            </button>
            <button className="bg-white border border-orange-500 px-6 py-3 rounded-lg hover:bg-orange-50 transition">
              Learn More
            </button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-semibold mb-6">What We Offer</h2>
          <p className="text-gray-700 mb-8">
            Fun home cooking classes in Indian cuisine while improving your English skills.
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition">
              <h3 className="font-bold text-xl mb-2">Home Cooking</h3>
              <p className="text-gray-600">Learn authentic Indian recipes from scratch.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition">
              <h3 className="font-bold text-xl mb-2">Fun English</h3>
              <p className="text-gray-600">Improve your English while cooking and chatting.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition">
              <h3 className="font-bold text-xl mb-2">Interactive Classes</h3>
              <p className="text-gray-600">Small groups, live interaction, and hands-on practice.</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default HomePage;
