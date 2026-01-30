"use client";
import Link from "next/link";
import Image from "next/image";
import { motion as Motion } from "motion/react";

const textVarients = {
  hidden: { opacity: 0, x: -50 },
  visible: { opacity: 1, x: 0 },
};

// const h2Varients = {
//   hidden: { opacity: 0, y: -20 },
//   visible: { opacity: 1, y: 0 },
// };

const Home = () => {
  return (
    <div>
      <section className="min-h-screen bg-linear-to-b from-[#fbfbfe] to-[#dafdc9] dark:from-[#010104] dark:to-[#314628] flex items-center justify-between px-8 pt-16 gap-8">      <div className="md:flex-1">
        <Motion.h1
          className="text-3xl md:text-4xl font-bold mb-4 text-[#040316] dark:text-[#eae9fc]"
          variants={textVarients}
          initial="hidden"
          animate="visible"
          transition={{
            delay: 0.6,
            type: "spring",
            stiffness: 400,
            damping: 10
          }}
        >
          We build the software your business deserves
        </Motion.h1>
        <Motion.p
          className="text-lg md:text-lg text-[#718e80] dark:text-[#718d80] mb-8"
          variants={textVarients}
          initial="hidden"
          animate="visible"
          transition={{
            delay: 0.8,
            type: "spring",
            stiffness: 400,
            damping: 10
          }}
        >
          Custom software development, modern web & mobile solutions, and ongoing support — we partner with you every step of the way.
        </Motion.p>
        <Link href="/contact">
          <Motion.button
            type="button"
            className="text-white bg-[#92ac4d] py-3 px-6 rounded-md cursor-pointer text-lg"
            initial={{ opacity: 0, x: -50 }}
            animate={{
              opacity: 1,
              x: 0,
              transition: { delay: 1 }
            }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{
              type: "spring",
              stiffness: 400,
              damping: 10
            }}
          >
            Start a Project
          </Motion.button>
        </Link>
      </div>
        <Motion.div
          initial={{
            opacity: 0,
            y: -20,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{ delay: 0.7 }}
        >
          <Image
            src="/assets/hero-software-dev.svg"
            alt="Hero Image"
            width={700}
            height={675}
            className="h-full max-h-[60vh] w-auto object-contain aspect-[1.5/1] "
          />
        </Motion.div>
      </section>
    </div>
  )
}

export default Home