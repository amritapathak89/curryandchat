"use client";
import React from "react";
import ContactForm from "../components/molecules/ContactForm";

const Contact = () => {
  return (
    <main className="min-h-screen bg-gray-50 flex items-center justify-center">
      <section className="max-w-5xl w-full px-6 py-12 grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-orange-100 p-6 rounded-lg">
          <ContactForm />
        </div>
        <div className="bg-white p-8 rounded-lg shadow hover:shadow-lg transition">
          <h2 className="text-2xl font-semibold mb-4">How Curry & Chat Works</h2>
          <p className="text-gray-600 mb-6">Cook. Chat. Learn.</p>
          <div className="space-y-4 text-gray-700 text-sm leading-relaxed">
            <p>
              Curious about our language-through-cooking classes or ready to join a session? Send us a message — we’d
              love to cook and chat with you.
            </p>
            <p>
              You’ll learn a new language while cooking authentic dishes together. We focus on real conversation,
              cultural context, and hands-on learning — no textbooks, just talk and taste.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Contact;
