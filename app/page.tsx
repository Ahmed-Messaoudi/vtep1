import Quizz from "@/components/quizz";
import Hero from "@/components/Hero";
import Description from "@/components/description";

export default function Home() {
    return (
        <>
            <div className="main-content flex flex-col">
                <Hero />
                <Description />
            </div>
        </>
    );
}
