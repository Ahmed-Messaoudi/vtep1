import Quizz from "@/components/quizz";
import Hero from "@/components/Hero";
import Description from "@/components/description";
import Link from "next/link";

export default function Home() {
    return (
        <>
            <div className="main-content flex flex-col">
                <Hero />
                <Description />
            </div>
            <div className="flex justify-center mt-8">
                <Link href="/quizz">
                    <button
                        className="px-8 py-4 bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 text-white font-bold rounded-lg shadow-lg border border-transparent hover:bg-gradient-to-l hover:from-blue-600 hover:via-blue-700 hover:to-blue-800 transition-all duration-300 ease-in-out transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-50">
                        FAIS LE QUIZ ET SAUVE NOTRE OCÉAN 😥
                    </button>
                </Link>
            </div>
        </>
    );
}
