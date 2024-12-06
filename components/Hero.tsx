import { GlobeAltIcon, ShieldCheckIcon, AcademicCapIcon } from '@heroicons/react/24/solid';

export default function Hero() {
    return (
        <div className="relative isolate overflow-hidden px-6 py-24 sm:py-32 lg:overflow-visible lg:px-0">
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
                            <p className="font-bold text-blue-700 text-2xl">Explore the Ocean Within</p>
                            <h1 className="mt-2 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
                                Discover the Body's Oceanic Connections
                            </h1>
                        </div>
                    </div>
                </div>
                <div className="-ml-12 -mt-12 p-12 lg:sticky lg:top-4 lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:overflow-hidden">
                    <img
                        alt="An artistic representation of a vibrant coral reef, teeming with marine life"
                        src="/ocean-humain.webp" // Replace with a relevant image URL
                        className="w-[48rem] max-w-none rounded-xl bg-gray-900 shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem]"
                    />
                </div>
                <div className="lg:col-span-2 lg:col-start-1 lg:row-start-2 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
                    <div className="lg:pr-4">
                        <div className="max-w-xl rounded-lg bg-blue-200 from-blue-50 to-teal-100 p-8 shadow-lg lg:max-w-lg">
                            <p className="text-lg text-black">
                                Just as the ocean supports countless ecosystems, each part of our body contributes to a greater whole.
                                Discover how the lungs mimic the rhythmic waves, the heart pulses like ocean currents, and our skin
                                protects us as the ocean's surface shields its depths.
                            </p>
                            <ul role="list" className="mt-8 space-y-8 text-gray-600">
                                <li className="flex gap-x-3">
                                    <GlobeAltIcon aria-hidden="true" className="mt-1 h-6 w-6 flex-none text-teal-600" />
                                    <span>
                                        <strong className="font-semibold text-gray-900">Currents of Knowledge.</strong>
                                        Gain insights into the body through ocean-inspired analogies that make learning captivating and relatable.
                                    </span>
                                </li>
                                <li className="flex gap-x-3">
                                    <ShieldCheckIcon aria-hidden="true" className="mt-1 h-6 w-6 flex-none text-teal-600" />
                                    <span>
                                        <strong className="font-semibold text-gray-900">Protective Layers.</strong>
                                        Understand how the body's defenses align with the ocean's resilient ecosystems.
                                    </span>
                                </li>
                                <li className="flex gap-x-3">
                                    <AcademicCapIcon aria-hidden="true" className="mt-1 h-6 w-6 flex-none text-teal-600" />
                                    <span>
                                        <strong className="font-semibold text-gray-900">Endless Depths.</strong>
                                        Explore the parallels between the vastness of the ocean and the complexity of the human body.
                                    </span>
                                </li>
                            </ul>
                            <p className="mt-8 text-lg text-gray-700">
                                Embark on this unique adventure and unlock the secrets of the ocean and your body. Learning has never been this immersive.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
