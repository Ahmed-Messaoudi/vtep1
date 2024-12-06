// Navbar.tsx
import Link from "next/link";

const Navbar = () => {
    return (
        <nav className="bg-cyan-600 p-4">
            <div className="flex justify-between items-center">
                {/* Logo à gauche */}
                <div className="text-white text-xl font-bold">
                    <button className="px-6 py-2 text-white bg-blue-700 rounded-full hover:bg-blue-800 focus:outline-none">
                        EcoTides
                    </button>
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
