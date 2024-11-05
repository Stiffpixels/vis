"use client"
import { cn } from "@/lib/utils"
import { usePathname } from "next/navigation"
import React from "react"
import { ChevronDown, Menu } from "lucide-react"
import Link from "next/link"

export function Navbar() {
    const path = usePathname()
    return (
        <div >
            <span className={cn(path === "/" ? "inline-block" : "hidden", "marquee w-full bg-[#F8C2C2] font-bold")}>
            <p>
                Admissions open 2025-26 Call : +91-number / +91-number Email id - admin@vivekanandinternation.com  Click here for details
            </p>
            </span>

            <div className="flex justify-center items-center gap-8 w-view md:w-view-md lg:w-view-lg mx-auto py-4">
                <div className="w-1/6 max-w-28">
                    <img
                        src="/images/logo.png"
                        alt="logo"
                    />
                </div>
                <div  className="flex flex-col gap-2">
                    <div className="flex items-center justify-start gap-2 sm:gap-8">
                        <h2 className="text-xl sm:text-2xl md:text-4xl xl:text-5xl font-bold uppercase">
                            Vivekanand International School
                        </h2>
                        <Menu className="lg:hidden" />
                    </div>

                    <nav className="hidden lg:block">
                        <ul className="flex items-center">
                            <div className="text-white bg-[var(--dark-accent)] md:py-2 md:px-4 md:pr-2 lg:py-4 lg:px-8 lg:pr-4 flex gap-4 rounded-primnavl w-auto">
                                <NavLink href="/">Home</NavLink>
                                <NavLink href="/academics">Academics</NavLink>
                                <NavLink href="/admission">Admission</NavLink>
                                <NavLink href="/contact">Contact</NavLink>
                                <NavLink href="/career">Career</NavLink>
                                <NavLink href="/newsletter">Newsletter</NavLink>
                            </div>

                            <div className="text-white bg-[var(--blue-accent)] md:py-2 md:px-4 md:pl-2 lg:p-4 lg:px-8 lg:pl-4 flex gap-4 rounded-primnavr w-auto">
                                <NavLink href="/admission">Admission Enquiry</NavLink>
                            </div>
                        </ul>
                    </nav>
                </div>
            </div>
        </div>
    )
}


function NavLink({ href, children, className }: { href: string, children: React.ReactNode, className?: string }) {
    return (
        <li className={cn("flex items-center gap-2 " + className)}>
            <Link href={href}>{children}</Link>
            <ChevronDown size={16} />
        </li>
    )
}
