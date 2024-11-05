import { HeroCards } from "@/components/home/HeroCards";
import { SchoolSummary } from "@/components/home/SchoolSummary";
import ImageSlider, { sliderImages as SliderImages } from "@/components/ImageSlider/ImageSlider";

export default function Home() {
    const sliderImages: SliderImages[] = [
        {
            url: "/images/imageSlider/hero.jpg",
            alt: "School activity",
            content: "Say Hello to a World full of learning and opportunities",
            link: "/admission"
        },
        {
            url: "/images/school2.jpg",
            alt: "School interior",
            content: "Facilities to allow exploration of important skills",
            link: "/admission"
        }
    ]

    return (
        <div className="w-view md:w-view-md lg:w-view-lg mx-auto">
            <header>
                <section id="hero" className="space-y-8">
                    <ImageSlider images={sliderImages} />
                    <HeroCards/>
                    <SchoolSummary />
                </section>
            </header>
            <main className="space-y-16">
            </main>
        </div>
    );
}
