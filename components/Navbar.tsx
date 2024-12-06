// Navbar.tsx
import Link from "next/link";

const Navbar = () => {
    return (
        <nav className="bg-blue-800 p-4">
            <div className="flex justify-between items-center">
                {/* Logo à gauche */}
                <div className="text-white text-xl font-bold">
                    <button className="px-6 py-2 text-white bg-blue-700 rounded-full hover:bg-blue-800 focus:outline-none">
                        Logo
                    </button>
                </div>

                {/* Boutons à droite */}
                <div className="space-x-4">
                    <Link href="/quizz">
                        <button
                            className="px-6 py-2 bg-blue-700 text-white rounded-full hover:bg-blue-900 focus:outline-none">
                            Quiz
                        </button>
                    </Link>

                    <Link href="/about">
                        <button
                            className="px-6 py-2 bg-blue-700 text-white rounded-full hover:bg-blue-900 focus:outline-none">
                            About
                        </button>
                    </Link>

                    <Link href="/login">
                        <button
                            className="px-6 py-2 bg-blue-700 text-white rounded-full hover:bg-blue-900 focus:outline-none">
                            Login
                        </button>
                    </Link>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
