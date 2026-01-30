"use client";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import ThemeToggle from "./utils/ThemeToggle";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion as Motion } from "motion/react";

const menuVariants = {
    closed: { opacity: 0, x: "100%" },
    open: {
        opacity: 1,
        x: "0%",
        transition: { staggerChildren: 0.1, delayChildren: 0.2 }
    }
};

const linkVariants = {
    closed: { opacity: 0, x: 20 },
    open: { opacity: 1, x: 0 },
};


const Navbar = () => {
    const pathname = usePathname();
    const [isOpen, setIsOpen] = useState(false);

    const navLinks = [
        { href: "/", label: "Home" },
        { href: "/softwares", label: "Softwares" },
        { href: "/about", label: "About" },
        { href: "/contact", label: "Contact" },
    ];

    const isActive = (href: string) => {
        return href === "/" ? pathname === "/" : pathname.startsWith(href);
    };

    return (
        <nav className="md:fixed md:top-8 md:left-[5vw] md:w-[90vw] w-full h-15 bg-white text-black dark:bg-black dark:text-white px-4 md:rounded-2xl flex items-center shadow-2xl z-50">
            <div className="flex items-center justify-start grow gap-2.5" title="Logic Realm">
                <Motion.div whileHover={{ rotate: 10, scale: 1.1 }}>
                    <Image src="/logo.svg" alt="Logo" width={45} height={45} priority />
                </Motion.div>
                <article className="uppercase font-bold font-sans  text-xl flex">
                    <p className="text-[#0016e0] dark:text-[#007fff]">Logic</p>
                    &nbsp;
                    <p className="text-[#92ac4d] dark:text-[#d6ff65]">Realm</p>
                </article>
            </div>

            <ThemeToggle />

            <ul className="hidden md:flex items-center justify-center list-none space-x-4 px-4 font-normal">
                {navLinks.map((link) => (
                    <Motion.li key={link.label} whileHover={{ scale: 1.05 }} title={link.label}>
                        <Link
                            href={link.href}
                            className={isActive(link.href) ? "text-[#0016e0] dark:text-[#d6ff65]" : "hover:text-[#92ac4d] dark:hover:text-[#656fff]"}
                            passHref
                        >
                            {link.label}
                        </Link>
                    </Motion.li>
                ))}
            </ul>
            <Motion.div
                className="md:hidden z-70"
                whileTap={{ scale: 0.8 }}
                onClick={() => setIsOpen(!isOpen)}
            >
                {isOpen ? <Image src="/icons/cross.svg" alt="Menu" width={30} height={30} priority /> : <Image src="/icons/menu.svg" className="dark:invert" alt="Menu" width={30} height={30} priority />}
            </Motion.div>

            <AnimatePresence>
                {
                    isOpen && <Motion.ul
                        className="fixed top-0 right-0 max-w-md min-w-2xs w-full h-full bg-[#324400] flex flex-col items-center justify-center list-none space-y-5 py-4 shadow-2xl md:hidden rounded-b-2xl z-60"
                        variants={menuVariants}
                        initial="closed"
                        animate="open"
                        exit="closed"
                    >
                        {navLinks.map((link) => (
                            <Motion.li
                                key={link.label}
                                title={link.label}
                                variants={linkVariants}
                                className="w-full flex text-center justify-center"
                            >
                                <Link
                                    href={link.href}
                                    className={(isActive(link.href) ? "text-[#d6ff65] " : "text-white ") + "text-2xl py-3 w-full"}
                                    onClick={() => setIsOpen(!isOpen)}
                                    passHref
                                >
                                    {link.label}
                                </Link>
                            </Motion.li>
                        ))}
                    </Motion.ul>
                }

            </AnimatePresence>
        </nav>
    )
}

export default Navbar