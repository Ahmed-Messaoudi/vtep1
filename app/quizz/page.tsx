import Quizz from "@/components/quizz";

export default function QuizPage() {
    return (
        <div className=" flex min-h-full justify-center px-6 py-12 lg:px-8 overflow-hidden">
            <div className="bg-blue-100 shadow-lg rounded-lg p-6 w-full max-w-lg flex flex-col justify-between h-full">
                <h1 className="text-3xl font-extrabold text-blue-700 mb-4 drop-shadow-md">WELCOME TO THE QUIZZZZ</h1>
                <p className="text-lg text-blue-600 mb-6 italic">REUSSI TOUS LES QUIZZ POUR SAUVER NOTRE OCEAN</p>
                <Quizz />
            </div>
        </div>
    );
}
