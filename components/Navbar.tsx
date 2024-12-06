// Navbar.tsx
import Link from "next/link";

const Navbar = () => {
    return (
        <nav className="bg-cyan-600 p-4">
            <div className="flex justify-between items-center">
                {/* Logo à gauche */}
                <div className="flex items-center">
                    <img
                        alt="Logo d'EcoTides"
                        src="/logo.jpg" // Remplacez par une URL d'image pertinente
                        className="w-12 h-12 rounded-full mr-2" // Taille et marge
                    />
                    <h1 className="text-white text-2xl font-bold">EcoTides</h1>
                </div>

                {/* Boutons à droite */}
                <div className="space-x-4">
                    <Link href="/">
                        <button
                            className="px-6 py-2 bg-blue-700 text-white rounded-full hover:bg-blue-900 focus:outline-none">
                            Home
                        </button>
                    </Link>
                    <Link href="/quizz">
                        <button
                            className="px-6 py-2 bg-blue-700 text-white rounded-full hover:bg-blue-900 focus:outline-none">
                            Quiz
                        </button>
                    </Link>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
