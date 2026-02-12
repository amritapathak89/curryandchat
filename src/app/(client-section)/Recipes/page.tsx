"use client";
import React from "react";
import NextImage from "next/image";

const Recipes = () => {
  return (
    <main className="min-h-screen bg-gray-50">
      Recipes
      <div className="min-h-screen grid grid-cols-1 md:grid-cols-2">
        <section className="bg-orange-100 p-8 md:p-12 space-y-8">
          <h1 className="text-3xl font-semibold text-orange-500">Our Recipes & Dishes</h1>
          <p className="text-black max-w-xl">
            At Curry & Chat, cooking is a way to practice English naturally. We choose recipes together and focus on
            conversation, culture, and real-life language.
          </p>
          <div className="w-full max-w-md h-56 bg-white rounded-xl shadow flex items-center justify-center">
            <NextImage
              width={200}
              height={200}
              src="/assets/butterchicken.jpg"
              alt="Dish preview"
              className="w-full h-full object-cover rounded-xl hidden"
            />
            <span className="text-gray-400">Image preview</span>
          </div>
          <div className="space-y-6">
            <h2 className="text-2xl text-orange-500 font-medium">Non-Vegetarian Starters</h2>
            <div>
              <h3 className="font-semibold text-black">Chicken Tikka</h3>
              <p className="text-sm text-black">(Chicken, yogurt, ginger, garlic, spices)</p>
              <p className="text-sm text-gray-700">Spice level: 🌶️🌶️</p>
            </div>
            <div>
              <h3 className="font-semibold text-black">Lamb Chops</h3>
              <p className="text-sm text-black">(Lamb, garlic, herbs, spices)</p>
              <p className="text-sm text-gray-700">Spice level: 🌶️🌶️🌶️ (Medium–Hot)</p>
            </div>
            <div>
              <h3 className="font-semibold text-black">Chicken Cutlets</h3>
              <p className="text-sm text-black">(Chicken, onions, spices, pastry)</p>
              <p className="text-sm text-gray-700">Spice level: 🌶️ (Mild)</p>
            </div>
            <div>
              <h3 className="font-semibold text-black">Chicken Samosas</h3>
              <p className="text-sm text-black">(Minced meat, potatoes, spices)</p>
              <p className="text-sm text-gray-700">Spice level: 🌶️🌶️ (Medium)</p>
            </div>
            <div>
              <h3 className="font-semibold text-black">Meat Chops</h3>
              <p className="text-sm text-black">(Chicken, potatoes, breadcrumbs, spices)</p>
              <p className="text-sm text-gray-700">Spice level: 🌶️🌶️ (Medium)</p>
            </div>
            <div>
              <h3 className="font-semibold text-black">Tuna Cutlets</h3>
              <p className="text-sm text-black">(Tuna, potatoes, herbs, spices)</p>
              <p className="text-sm text-gray-700">Spice level: 🌶️🌶️ (Medium)</p>
            </div>
            <div>
              <h3 className="font-semibold text-black">Fish Fry</h3>
              <p className="text-sm text-black">(Salmon,  spices)</p>
              <p className="text-sm text-gray-700">Spice level: 🌶️🌶️ (Medium)</p>
            </div>
          </div>
          <div className="space-y-6">
            <h2 className="text-2xl text-orange-500 font-medium">Main Dishes</h2>

            <div>
              <h3 className="font-semibold text-black">Butter Chicken & Naan</h3>
              <p className="text-sm text-black">(Chicken, tomato, butter, cream, spices)</p>
              <p className="text-sm text-gray-700">Spice level: 🌶️🌶️</p>
            </div>

            <div>
              <h3 className="font-semibold text-black">Vegetable Jalfrezi</h3>
              <p className="text-sm text-black">(Mixed vegetables, tomato base)</p>
              <p className="text-sm text-gray-700">Spice level: 🌶️🌶️</p>
            </div>
          </div>
        </section>
        <section className="bg-white p-8 md:p-12 space-y-8">
          <h1 className="text-3xl font-semibold text-orange-500">Recettes & Plats</h1>
          <p className="text-black max-w-xl">
            Chez Curry & Chat, la cuisine est un moyen naturel de pratiquer l’anglais. Les recettes sont choisies
            ensemble, dans une ambiance détendue et conviviale.
          </p>
          <div className="w-full max-w-md h-56 bg-orange-100 rounded-xl shadow flex items-center justify-center">
            <NextImage
              width={200}
              height={200}
              src="/assets/butterchicken.jpg"
              alt="Aperçu du plat"
              className="w-full h-full object-cover rounded-xl hidden"
            />
            <span className="text-gray-500">Aperçu de l’image</span>
          </div>
          <div className="space-y-6">
            <h2 className="text-2xl text-orange-500 font-medium">Entrées</h2>

            <div>
              <h3 className="font-semibold text-black">Chicken Tikka</h3>
              <p className="text-sm text-black">(Poulet, yaourt, gingembre, ail, épices)</p>
              <p className="text-sm text-gray-700">Niveau d’épices : 🌶️🌶️</p>
            </div>

            <div>
              <h3 className="font-semibold text-black">Paneer Tikka</h3>
              <p className="text-sm text-black">(Fromage paneer, yaourt, épices)</p>
              <p className="text-sm text-gray-700">Niveau d’épices : 🌶️🌶️</p>
            </div>
          </div>
          <div className="space-y-6">
            <h2 className="text-2xl text-orange-500 font-medium">Plats Principaux</h2>

            <div>
              <h3 className="font-semibold text-black">Butter Chicken & Naan</h3>
              <p className="text-sm text-black">(Poulet, tomate, beurre, crème, épices)</p>
              <p className="text-sm text-gray-700">Niveau d’épices : 🌶️🌶️</p>
            </div>
            <div>
              <h3 className="font-semibold text-black">Légumes Jalfrezi</h3>
              <p className="text-sm text-black">(Légumes variés, sauce tomate)</p>
              <p className="text-sm text-gray-700">Niveau d’épices : 🌶️🌶️</p>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}

export default Recipes;