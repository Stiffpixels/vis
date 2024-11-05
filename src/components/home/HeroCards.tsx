import { cn } from "@/lib/utils";
import { Brain, Earth, Lightbulb } from "lucide-react";
import React from "react"

type HeroCard = {
    title: string;
    description: string;
    Icon: React.FC;
    className?:string;
}


export function HeroCards() {
    const heroCards:HeroCard[] = [
        {
            title:"World Class Education",
            description:`
                Our curriculum is carefully crafted to blend academic rigor
                with the values and life skills essential for thriving in a diverse society.
                 we employ innovative and effective teaching methods to engage students,
                encouraging critical thinking and creativity.
            `,
            Icon: Earth,
            className:"bg-[#FFDC69]"
        },
        {
            title:"Help your child learn great values",
            description:`
            At Vivekananda International School children learn through a combination
            of structured lessons and social interactions. Educators instill
            principles like respect, empathy, and responsibility by modeling
            these behaviors and creating a positive classroom environment.,
            `,
            Icon: Lightbulb,
            className:"bg-[#FFDC69]"
        },
        {
            title:"Experienced Faculty",
            description:`
                Our faculty is dedicated to understanding each student’s needs,
                ensuring that they feel supported, valued, and inspired in every
                step of their educational journey.
            `,
            Icon: Brain,
            className:"bg-[#FFDC69]"
        }
    ]

    return (
    <section id="main-features" className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {
            heroCards.map((heroCard, index)=>{
                return <HeroCard heroCard={heroCard} key={index}/>
            })
        }
    </section>
    )
}

function HeroCard({ heroCard}: { heroCard: HeroCard, }) {
    return (
        <Card className={heroCard.className}>
            <>
                <div className="p-4 mb-4 w-fit bg-accent-blue text-white rounded-full">
                    <heroCard.Icon/>
                </div>
                <h3 className="text-lg font-semibold mb-2">{heroCard.title}</h3>
                <p>{heroCard.description}</p>
            </>
        </Card>
    )
}

function Card({ className, children }: { className?: string, children: React.ReactNode }) {
    return (
        <div className={cn("rounded-xl p-8 bg-card " + className)}>
            {children}
        </div>
    )
}
