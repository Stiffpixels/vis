import React from "react"
export function HomeH2({ children }: { children: React.ReactNode }) {
    return (
        <h2 className="text-2xl md:text-4xl text-accent-dark font-bold">
            {children}
        </h2>
    )
}
