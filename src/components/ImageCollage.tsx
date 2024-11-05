import React from "react"

export function ImageCollage({className}:{className?:string}) {
    return (
        <div className={"image-collage "+className}>
            <div className="image-collage__a h-full">
                <img src="/images/school.jpg" alt="School" loading="lazy" className="rounded-xl h-full object-cover"/>
            </div>

            <div className="image-collage__b h-full bg-accent-blue text-white flex items-center py-2 gap-4 rounded-xl justify-center">
                <h2 className="text-4xl font-bold">25</h2>
                <p>Years of <br /> experience</p>
            </div>

            <div className="image-collage__c h-full">
                <img src="/images/school2.jpg" alt="School" loading="lazy" className="rounded-xl h-full object-cover"/>
            </div>
        </div>
    )
}
