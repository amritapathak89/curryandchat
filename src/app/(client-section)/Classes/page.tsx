"use client";
import React from "react";

const Classes = () => {
    return (
    <main className="min-h-screen bg-gray-50">
        <section className="min-h-screen flex flex-col md:flex-row">
        <div className="md:w-1/2 bg-orange-100 px-6 py-12 md:px-12">
            <h1 className="text-3xl font-semibold text-orange-500 mb-6">
                Learn English while cooking real food, in a real home
            </h1>
            <p className="text-gray-800 mb-6 leading-relaxed">
                Curry & Chat is a relaxed, in-person experience where you practice English naturally
                while cooking together. The classNamees take place at my home and are designed for
                individuals or small groups of up to 3 people, so everyone has time to speak,
                ask questions, and feel comfortable.
            </p>
            <p className="text-gray-800 mb-10">
                All English levels are welcome — beginner to advanced.
            </p>
            <h2 className="text-2xl font-semibold text-orange-500 mb-4">
                How the session works
            </h2>
            <div className="space-y-8 text-gray-800">
                <div>
                    <h3 className="font-semibold mb-1">1. Welcome & conversation (10–15 minutes)</h3>
                    <p>
                        We start with a friendly chat to get to know each other, your English level,
                        your interests, and what you would like to improve. No pressure — just
                        natural conversation.
                    </p>
                </div>
                <div>
                    <h3 className="font-semibold mb-1">2. Cooking together</h3>
                    <ul className="list-disc list-inside space-y-1">
                        <li>Talk about the recipe and its origins</li>
                        <li>Learn cooking and food-related vocabulary</li>
                        <li>Discuss interests and food passions</li>
                        <li>Practice real, useful English</li>
                    </ul>
                </div>
                <div>
                    <h3 className="font-semibold mb-1">3. Break & language focus</h3>
                    <p>
                        We discuss your difficulties and needs. Adults can choose one Business
                        English topic, and you take the lead while I guide and support you.
                    </p>
                </div>
                <div>
                    <h3 className="font-semibold mb-1">4. Enjoy the food</h3>
                    <p>
                        Share the meal together or take it home to enjoy later.
                    </p>
                </div>
            </div>
        </div>
        <div className="md:w-1/2 bg-white px-6 py-12 md:px-12">
            <h1 className="text-3xl font-semibold text-orange-500 mb-6">
                Apprenez l’anglais en cuisinant de vrais plats, dans une vraie maison
            </h1>
            <p className="text-gray-800 mb-6 leading-relaxed">
                Curry & Chat est une expérience conviviale et en présentiel qui vous permet
                de pratiquer l’anglais naturellement tout en cuisinant. Les cours ont lieu
                chez moi et sont proposés en individuel ou en petits groupes de maximum
                3 personnes.
            </p>
            <p className="text-gray-800 mb-10">
                Tous les niveaux d’anglais sont les bienvenus, du débutant à l’avancé.
            </p>
            <h2 className="text-2xl font-semibold text-orange-500 mb-4">
                Déroulement de la séance
            </h2>
            <div className="space-y-8 text-gray-800">
                <div>
                    <h3 className="font-semibold mb-1">1. Accueil & discussion (10–15 minutes)</h3>
                    <p>
                        Nous commençons par une discussion pour faire connaissance, comprendre
                        votre niveau, vos objectifs et vos centres d’intérêt.
                    </p>
                </div>
                <div>
                    <h3 className="font-semibold mb-1">2. Cuisiner ensemble</h3>
                    <ul className="list-disc list-inside space-y-1">
                        <li>Découverte de la recette et de son origine</li>
                        <li>Vocabulaire culinaire</li>
                        <li>Discussions autour de vos passions</li>
                        <li>Pratique naturelle de l’anglais</li>
                    </ul>
                </div>
                <div>
                    <h3 className="font-semibold mb-1">3. Pause & focus linguistique</h3>
                    <p>
                        Nous parlons de vos difficultés et besoins. Les adultes peuvent choisir
                        un thème d’anglais professionnel pour la suite du cours.
                    </p>
                </div>
                <div>
                    <h3 className="font-semibold mb-1">4. Dégustation</h3>
                    <p>
                        Vous pouvez partager le repas ou l’emporter chez vous.
                    </p>
                </div>
            </div>
        </div>
        </section>
    </main>
    );
};

export default Classes;
