"use client";

import React from "react";
import { useRouter } from "next/router";

const IntroScreen = () => {
    const router = useRouter();

    const startQuiz = () => {
        router.push("/quizz"); // Redirige vers la page du quiz
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <div className="text-center">
                <img
                    src="/quizz.jpg" // Assurez-vous que l'image est dans le dossier public
                    alt="Quiz Introduction"
                    className="w-3/4 max-w-lg mx-auto rounded-lg shadow-lg mb-6"
                />
                <button
                    onClick={startQuiz}
                    className="px-6 py-3 bg-blue-500 text-white font-bold rounded-lg hover:bg-blue-600 transition duration-200"
                >
                    Start Quiz
                </button>
            </div>
        </div>
    );
};

export default IntroScreen;
