import { GlobeAltIcon, ShieldCheckIcon, AcademicCapIcon } from '@heroicons/react/24/solid';

export default function Hero() {
    return (
        <div className="bg-cyan-50 relative isolate overflow-hidden px-6 py-24 sm:py-32 lg:overflow-visible lg:px-0">
            <div className="absolute inset-0 -z-10 overflow-hidden">
                <svg
                    aria-hidden="true"
                    className="absolute left-[max(50%,25rem)] top-0 h-[64rem] w-[128rem] -translate-x-1/2 stroke-blue-200 [mask-image:radial-gradient(64rem_64rem_at_top,white,transparent)]"
                >
                    <defs>
                        <pattern
                            x="50%"
                            y={-1}
                            id="ocean-pattern"
                            width={200}
                            height={200}
                            patternUnits="userSpaceOnUse"
                        >
                            <path d="M100 200V.5M.5 .5H200" fill="none" />
                        </pattern>
                    </defs>
                    <rect fill="url(#ocean-pattern)" width="100%" height="100%" strokeWidth={0} />
                </svg>
            </div>
            <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-start lg:gap-y-10">
                <div className="lg:col-span-2 lg:col-start-1 lg:row-start-1 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
                    <div className="lg:pr-4">
                        <div className="lg:max-w-lg">
                            <p className="font-bold text-blue-700 text-2xl">Explorez l'Océan Intérieur</p>
                            <h1 className="mt-2 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
                                Découvrez les Connexions Océaniques du Corps
                            </h1>
                        </div>
                    </div>
                </div>
                <div className="-ml-12 -mt-12 p-12 lg:sticky lg:top-4 lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:overflow-hidden">
                    <img
                        alt="Une représentation artistique d'un récif corallien vibrant, foisonnant de vie marine"
                        src="/ocean-humain.webp" // Remplacez par une URL d'image pertinente
                        className="w-[48rem] max-w-none rounded-xl bg-gray-900 shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem]"
                    />
                </div>
                <div className="lg:col-span-2 lg:col-start-1 lg:row-start-2 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
                    <div className="lg:pr-4">
                        <div className="max-w-xl rounded-lg bg-blue-200 from-blue-50 to-teal-100 p-8 shadow-lg lg:max-w-lg">
                            <p className="text-lg text-black">
                                Tout comme l'océan soutient d'innombrables écosystèmes, chaque partie de notre corps contribue à un tout plus grand.
                                Découvrez comment les poumons imitent les vagues rythmiques, le cœur pulse comme les courants marins, et notre peau
                                nous protège comme la surface de l'océan protège ses profondeurs.
                            </p>
                            <ul role="list" className="mt-8 space-y-8 text-gray-600">
                                <li className="flex gap-x-3">
                                    <GlobeAltIcon aria-hidden="true" className="mt-1 h-6 w-6 flex-none text-teal-600" />
                                    <span>
                                        <strong className="font-semibold text-gray-900">Courants de Connaissance.</strong>
                                        Obtenez des aperçus sur le corps à travers des analogies inspirées de l'océan qui rendent l'apprentissage captivant et accessible.
                                    </span>
                                </li>
                                <li className="flex gap-x-3">
                                    <ShieldCheckIcon aria-hidden="true" className="mt-1 h-6 w-6 flex-none text-teal-600" />
                                    <span>
                                        <strong className="font-semibold text-gray-900">Couches Protectrices.</strong>
                                        Comprenez comment les défenses du corps s'alignent avec les écosystèmes résilients de l'océan.
                                    </span>
                                </li>
                                <li className="flex gap-x-3">
                                    <AcademicCapIcon aria-hidden="true" className="mt-1 h-6 w-6 flex-none text-teal-600" />
                                    <span>
                                        <strong className="font-semibold text-gray-900">Profondeurs Infinies.</strong>
                                        Explorez les parallèles entre l'immensité de l'océan et la complexité du corps humain.
                                    </span>
                                </li>
                            </ul>
                            <p className="mt-8 text-lg text-gray-700">
                                Embarquez pour cette aventure unique et découvrez les secrets de l'océan et de votre corps. L'apprentissage n'a jamais été aussi immersif.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
