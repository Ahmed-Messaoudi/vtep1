// components/Descriptions.tsx
import React from 'react';
import './description.module.css'

export const similaritesCorpsOcean = [
    {
        humain: { nom: "Cœur", image: "/coeur.jpg", lien: "https://www.google.com/search?q=fonctionnement+du+coeur" },
        ocean: { nom: "Courants océaniques", description: "Le cœur pompe le sang dans tout le corps, assurant la circulation, tandis que les courants océaniques déplacent l'eau, les nutriments et la chaleur autour du globe." },
    },
    {
        humain: { nom: "Poumons", image: "/poumons.webp", lien: "https://www.google.com/search?q=fonctionnement+des+poumons" },
        ocean: { nom: "Récifs coralliens et phytoplancton", description: "Les poumons facilitent l'échange d'oxygène et de dioxyde de carbone, tandis que les récifs coralliens et le phytoplancton produisent plus de 50 % de l'oxygène que nous respirons." },
    },
    {
        humain: { nom: "Sang", image: "/sang.jpg", lien: "https://www.google.com/search?q=composition+du+sang" },
        ocean: { nom: "Eau de mer", description: "Le sang et l'eau de mer sont chimiquement similaires, contenant tous deux du sodium, du chlorure, du potassium et du magnésium." },
    },
    {
        humain: { nom: "Peau", image: "/peau-epiderme-derme-hypoderme.jpg", lien: "https://www.google.com/search?q=fonctionnement+de+la+peau" },
        ocean: { nom: "Surface de l’océan", description: "La peau agit comme une barrière protectrice, et la surface de l'océan régule les échanges thermiques et protège les écosystèmes marins en dessous." },
    },
    {
        humain: { nom: "Cerveau", image: "/cerveau.webp", lien: "https://www.google.com/search?q=fonctionnement+du+cerveau" },
        ocean: { nom: "Profondeurs océaniques", description: "Le cerveau et les profondeurs océaniques sont vastes, mystérieux et essentiels à la vie, avec de nombreux aspects encore inexplorés." },
    },
    {
        humain: { nom: "Estomac", image: "/estomac.jpg", lien: "https://www.google.com/search?q=fonctionnement+de+l%27estomac" },
        ocean: { nom: "Cheminées hydrothermales", description: "L'estomac décompose les aliments pour produire de l'énergie, et les cheminées hydrothermales transforment les minéraux en énergie pour des écosystèmes uniques." },
    },
    {
        humain: { nom: "Vaisseaux sanguins", image: "/vaissaux.jpg", lien: "https://www.google.com/search?q=fonctionnement+des+vaisseaux+sanguins" },
        ocean: { nom: "Rivières et courants océaniques", description: "Les vaisseaux sanguins transportent les nutriments dans le corps, tandis que les rivières et les courants distribuent les nutriments et l'énergie dans les écosystèmes marins." },
    },
    {
        humain: { nom: "Os", image: "os-corps-humain.jpg", lien: "https://www.google.com/search?q=fonction+des+os" },
        ocean: { nom: "Récifs coralliens", description: "Les os fournissent structure et soutien au corps, tout comme les récifs coralliens servent de cadre et d'habitat pour la vie marine." },
    },
    {
        humain: { nom: "Foie", image: "/foie.jpg", lien: "https://www.google.com/search?q=fonctionnement+du+foie" },
        ocean: { nom: "Zones humides côtières et mangroves", description: "Le foie filtre les toxines et maintient l'équilibre chimique, tandis que les zones humides et les mangroves filtrent les polluants et maintiennent la qualité de l'eau." },
    },
    {
        humain: { nom: "Reins", image: "/reins.jpg", lien: "https://www.google.com/search?q=fonctionnement+des+reins" },
        ocean: { nom: "Marées", description: "Les reins régulent l'équilibre des fluides et éliminent les déchets, tandis que les marées circulent les nutriments et éliminent les débris des zones côtières." },
    },
    {
        humain: { nom: "Système nerveux", image: "/systeme-nerveux.jpg", lien: "https://www.google.com/search?q=fonctionnement+du+système+nerveux" },
        ocean: { nom: "Communication marine", description: "Le système nerveux transmet des signaux dans tout le corps, tandis que les espèces marines utilisent les ondes sonores pour communiquer et naviguer." },
    },
    {
        humain: { nom: "Yeux", image: "/oeil.jpg", lien: "https://www.google.com/search?q=fonctionnement+des+yeux" },
        ocean: { nom: "Bioluminescence", description: "Les yeux permettent aux humains de percevoir leur environnement, tandis que les organismes bioluminescents illuminent l'obscurité de l'océan." },
    },
    {
        humain: { nom: "Glandes sudoripares", image: "/peau-epiderme-derme-hypoderme.jpg", lien: "https://www.google.com/search?q=fonctionnement+des+glandes+sudoripares" },
        ocean: { nom: "Évaporation de l'océan", description: "Les glandes sudoripares régulent la température corporelle en libérant de l'humidité, tandis que l'évaporation de l'océan alimente le cycle de l'eau et la régulation du climat." },
    }
];



const Descriptions = () => {
    return (
        <div className="p-4">
            <h1 className="text-8xl font-bold text-center mb-6 text-blue-700">Similitudes entre le corps humain et l'océan</h1>
            <h2 className="text-2xl text-center mb-8 text-blue-800">Découvrez les analogies fascinantes entre les deux</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {similaritesCorpsOcean.map((item, index) => (
                    <div key={index} className=" bg-cyan-100 rounded-lg shadow-md p-6 hover:scale-105 transition-transform">
                        <h3 className="text-4xl font-semibold text-center mb-4 text-cyan-600">{item.humain.nom}</h3>
                        <img src={item.humain.image} alt={item.humain.nom} className="mx-auto rounded-lg mb-4 w-36" />
                        <a href={item.humain.lien} target="_blank" rel="noopener noreferrer" className="text-blue-600 text-lg hover:underline">
                            {item.ocean.nom}
                        </a>
                        <div className="relative inline-block mt-4">
                            <span className="tooltip-text bg-black text-white text-sm rounded py-1 px-2 absolute top-0 left-1/2 transform -translate-x-1/2 opacity-0 transition-opacity hover:opacity-100">
                                {item.ocean.description}
                            </span>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Descriptions;




