"use client";

import React, { useState, useEffect } from "react";
import { quizofbodyOceanSimilarities } from "@/components/data";

const Quizz = () => {
    const quiz = quizofbodyOceanSimilarities[0];
    const [showIntro, setShowIntro] = useState(true);
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [selectedAnswers, setSelectedAnswers] = useState({});
    const [score, setScore] = useState(0);
    const [previousScore, setPreviousScore] = useState(0);
    const [timeLeft, setTimeLeft] = useState(15);
    const [quizFinished, setQuizFinished] = useState(false);

    const currentQuestion = quiz.questions[currentQuestionIndex];

    // Timer logic
    useEffect(() => {
        if (quizFinished || showIntro) return;

        if (timeLeft === 0) {
            handleNextQuestion(false);
        }

        const timer = setTimeout(() => {
            setTimeLeft((prev) => prev - 1);
        }, 1000);

        return () => clearTimeout(timer);
    }, [timeLeft, quizFinished, showIntro]);

    const handleOptionClick = (option) => {
        const isCorrect = option.isCorrect;

        if (isCorrect) {
            setScore((prevScore) => prevScore + 1);
        }

        setSelectedAnswers({
            ...selectedAnswers,
            [currentQuestion.id]: option.text,
        });

        handleNextQuestion(true);
    };

    const handleNextQuestion = (answered) => {
        if (!answered) {
            setSelectedAnswers({
                ...selectedAnswers,
                [currentQuestion.id]: null,
            });
        }

        if (currentQuestionIndex < quiz.questions.length - 1) {
            setCurrentQuestionIndex((prevIndex) => prevIndex + 1);
            setTimeLeft(15);
        } else {
            setQuizFinished(true);
            setPreviousScore(score);
        }
    };

    const getPollutionEmoji = () => {
        if (score >= quiz.questions.length * 0.75) {
            return {
                emoji: "🌊💚",
                text: "Ocean is healthy!",
                textClass: "text-green-500"
            };
        } else if (score >= quiz.questions.length * 0.5) {
            return {
                emoji: "🌊💛",
                text: "Ocean is slightly polluted.",
                textClass: "text-yellow-500"
            };
        } else if (score >= quiz.questions.length * 0.25) {
            return {
                emoji: "🌊🟡",
                text: "Ocean is polluted.",
                textClass: "text-yellow-600"
            };
        } else {
            return {
                emoji: "🌊💔",
                text: "Ocean is severely polluted!",
                textClass: "text-red-600"
            };
        }
    };

    if (showIntro) {
        return (
            <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
                <img
                    src="/quizz.jpg"
                    alt="Quiz Introduction"
                    className="w-full max-w-md mx-auto rounded-lg shadow-lg mb-4"
                />
                <button
                    onClick={() => setShowIntro(false)}
                    className="px-6 py-2 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600 transition duration-200"
                >
                    Start Quiz
                </button>
            </div>
        );
    }

    // Récupération de l'émoji, du texte et de la classe de couleur
    const { emoji, text, textClass } = getPollutionEmoji();

    return (
        <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
            <div className="w-full max-w-lg bg-white rounded-lg shadow-md p-6 flex flex-col justify-between h-full">
                {!quizFinished ? (
                    <>
                        <h1 className="text-2xl font-semibold mb-2 text-center text-blue-600">
                            {quiz.title}
                        </h1>
                        <div className="text-right text-red-600 text-sm mb-4">
                            Time left: {timeLeft}s
                        </div>
                        <div className="mb-4">
                            <h2 className="text-xl font-semibold mb-2 text-black">
                                Question {currentQuestionIndex + 1} / {quiz.questions.length}
                                <span className="text-sm text-gray-500 ml-2">
                                    (Previous score: {previousScore}/{quiz.questions.length})
                                </span>
                            </h2>
                            <p className="mb-4 text-gray-700 text-sm">
                                {currentQuestion.description}
                            </p>
                            <div className="grid grid-cols-2 gap-4">
                                {currentQuestion.options.map((option, index) => (
                                    <button
                                        key={index}
                                        onClick={() => handleOptionClick(option)}
                                        className={`px-4 py-2 border rounded-lg text-white font-medium transition duration-200 ${
                                            option.isCorrect
                                                ? "bg-green-500 hover:bg-green-600"
                                                : "bg-red-500 hover:bg-red-600"
                                        } text-sm`}
                                    >
                                        {option.text}
                                    </button>
                                ))}
                            </div>
                        </div>
                    </>
                ) : (
                    <div className="relative">
                        <h2 className="text-2xl font-semibold mb-2 text-center text-black">
                            Quiz Finished!
                        </h2>
                        <p className="text-lg text-center mb-4 text-black">
                            Your score: {score}/{quiz.questions.length}
                        </p>
                        <p className="text-sm text-center mb-4 text-gray-500">
                            Previous score: {previousScore}/{quiz.questions.length}
                        </p>
                        <div className="flex justify-center mb-4">
                            <img
                                src="/ocean.jpg"
                                alt="Ocean"
                                className="w-full max-w-md rounded-lg shadow-lg"
                            />
                            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-6xl">
                                {emoji}
                            </div>
                        </div>
                        <div className={`text-center text-xl mt-4 ${textClass}`}>
                            <span className="font-semibold">{text}</span>
                        </div>

                        <button
                            onClick={() => {
                                setCurrentQuestionIndex(0);
                                setSelectedAnswers({});
                                setScore(0);
                                setTimeLeft(5);
                                setQuizFinished(false);
                                setShowIntro(true);
                            }}
                            className="w-full py-2 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600 transition duration-200"
                        >
                            Restart Quiz
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Quizz;
