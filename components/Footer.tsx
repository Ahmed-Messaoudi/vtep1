// components/Footer.tsx
import React from 'react';

const Footer: React.FC = () => {
    return (
        <footer className=" bg-cyan-600 text-white py-6">
            <div className="container mx-auto px-4 text-center">
                <p className="text-sm">
                    &copy; {new Date().getFullYear()} NUIT DE L'INFO 2024. TEAM VENDREDI TOUT EST PERMIS
                </p>
                <nav className="mt-4">
                    <ul className="flex justify-center space-x-4">
                        <li>
                            <a href="/about" className="hover:underline">
                                À propos
                            </a>
                        </li>
                        <li>
                            <a href="/contact" className="hover:underline">
                                Contact
                            </a>
                        </li>
                        <li>
                            <a href="/privacy" className="hover:underline">
                                Politique de confidentialité
                            </a>
                        </li>
                    </ul>
                </nav>
            </div>
        </footer>
    );
};

export default Footer;
