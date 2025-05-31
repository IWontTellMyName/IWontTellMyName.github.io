"use client";

import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { CiMenuFries } from "react-icons/ci";
import { useState } from "react";

const links = [
    {
        name: "home",
        path: "/"
    },
    {
        name: "internships",
        path: "./internships"
    },
    {
        name: "education",
        path: "./education"
    },
    {
        name: "publications",
        path: "./publications"
    },
    {
        name: "certifications",
        path: "./certifications"
    },
    {
        name: "projects",
        path: "./projects"
    },
    {
        name: "contact",
        path: "./contact"
    },
]

const MobileNav = () => {

    const pathName = usePathname();
    const [open, setOpen] = useState(false); // Track open state

    const handleClose = () => {
        setOpen(false); // Close the menu
    };

    return (
        <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger className="flex justify-center items-center">
                <CiMenuFries className="text-[32px] text-accent" />
            </SheetTrigger>
            <SheetContent className="flex flex-col">
                {/* Logo */}
                <div className="mt-20 mb-20 text-center text-2xl">
                    <Link href="/">
                        <h1 className="text-4xl font-semibold">
                            <span className="text-accent">Snehal</span> Ghosh
                        </h1>
                    </Link>
                </div>
                {/* Navbar */}
                <nav className="flex flex-col justify-center items-center gap-8">
                    {links.map((link, index) => {
                        return (
                            <Link
                                href={link.path}
                                key={index}
                                className={`${link.path === pathName && "text-accent border-b-2 border-accent"
                                    } capitalize font-medium hover:text-accent transition-all`}
                                onClick={handleClose}
                            >
                                {link.name}
                            </Link>
                        );
                    })}
                </nav>
            </SheetContent>
        </Sheet>
    )
}

export default MobileNav;