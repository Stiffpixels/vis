import React from "react"
import { ImageCollage } from "@/components/ImageCollage"
import { HomeH2 } from "./Title"
import { ArrowRight, BusFront, Check, School } from "lucide-react"
import Link from "next/link"

export function SchoolSummary() {
    return (
        <section id="school-summary" className="flex flex-col md:flex-row justify-center gap-4 md:gap-16">
            <ImageCollage className="md:w-1/2 lg:w-[35%]" />
            <SchoolSummaryDesc />
        </section>
    )
}

type SmallFeatureCardData = {
    title: string;
    Icon: React.FC;
    features: string[];

}

function SchoolSummaryDesc() {
    const cardData: SmallFeatureCardData[] = [
        {
            title: "Easy Transport",
            Icon: BusFront,
            features: [
                "Nearby Vashi Station",
                "School Bus Available"
            ]
        },
        {
            title: "CBSE Board",
            Icon: School,
            features: [
                "First CBSE school in Vashi",
                "Guaranteed best education"
            ]
        }
    ]
    return (
        <div className="md:w-1/2 max-w-3xl">
            <div className="mb-6">
                <p className="text-xs flex gap-2 items-center text-accent-dark">
                    <School size={8} />
                    Welcome To
                </p>
                <HomeH2>
                    Vivekanand International School
                </HomeH2>
            </div>
            <p>
                Vivekanand International School, is the first CBSE-affiliated school
                in the area, setting a benchmark in education with a commitment to
                personalized and holistic teaching methods. We believe that each
                student is unique, with individual strengths and learning needs.
                Our curriculum is thoughtfully designed to adapt to diverse learning
                styles, ensuring every child reaches their full potential.
            </p>
            <div className="mt-8 flex gap-4 flex-row justify-start items-start">
                {
                    cardData.map(card => (<SmallFeatureCard cardData={card} />))
                }
            </div>
            <Link href="/about/school" className="inline-block mt-4 w-fit p-4 border border-accent-dark text-sm rounded-[3em] flex items-center gap-2">
                Read More
                <ArrowRight size={8} />
            </Link>
        </div>
    )
}

function SmallFeatureCard({ cardData }: { cardData: SmallFeatureCardData }) {
    return (
        <div className="rounded-xl border border-border p-8">
            <div>
                <div className="flex items-center gap-4">
                    <div className="px-6 py-4 bg-accent-blue rounded-full text-white">
                        <cardData.Icon />
                    </div>
                    <span className="text-lg md:text-xl font-semibold md:font-bold text-accent-dark">
                        {cardData.title}
                    </span>
                </div>

                <ul className="mt-8 space-y-1">
                    {
                        cardData.features.map(feature => <SmallFeatureCardListItem>{feature}</SmallFeatureCardListItem>)
                    }
                </ul>
            </div>
        </div>
    )
}

function SmallFeatureCardListItem({ children }: { children: React.ReactNode }) {
    return (
        <li className="flex items-center gap-2">
            <Check size={8} />
            {children}
        </li>
    )
}
