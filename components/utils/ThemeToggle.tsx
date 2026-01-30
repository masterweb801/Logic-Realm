"use client";
import Image from "next/image";
import { useTheme } from "next-themes";
import { useState, useEffect } from "react";
import { motion as Motion, AnimatePresence } from "motion/react";

const ThemeToggle = () => {
    const { setTheme, resolvedTheme } = useTheme();
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        queueMicrotask(() => setMounted(true));
    }, []);

    if (!mounted) {
        return <div className="w-15 h-15" />;
    }

    const isDark = resolvedTheme === "dark";

    return (
        <div
            className="flex items-center justify-end justify-self-end p-4 cursor-pointer"
            title={isDark ? "Switch to Light Mode" : "Switch to Dark Mode"}
            onClick={() => setTheme(isDark ? "light" : "dark")}
        >
            <AnimatePresence mode="wait" initial={false}>
                <Motion.div
                    key={isDark ? "sun" : "moon"}
                    animate={{ rotate: isDark ? 180 : -360 }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                >
                    <Image
                        src={isDark ? "/icons/sun.svg" : "/icons/moon.svg"}
                        className="dark:invert"
                        alt="Toggle Theme"
                        width={30}
                        height={30}
                        priority
                    />
                </Motion.div>
            </AnimatePresence>
        </div>
    )
}

export default ThemeToggle