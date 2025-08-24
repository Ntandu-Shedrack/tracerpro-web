"use client";

import React, { useRef } from "react";
import { ArrowRight } from "lucide-react";
import cogImage from "@/components/icons/cog.png";
import cylinderImage from "@/components/icons/cylinder.png";
import noodleImage from "@/components/icons/noodle.png";
import { motion, useScroll, useTransform } from "framer-motion";

export const Hero = () => {
  const heroRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start end", "end start"],
  });

  // Parallax speeds
  const cogY = useTransform(scrollYProgress, [0, 1], [-80, 80]);
  const cylinderY = useTransform(scrollYProgress, [0, 1], [-150, 150]);
  const noodleY = useTransform(scrollYProgress, [0, 1], [-100, 100]);

  return (
    <section
      ref={heroRef}
      className="pt-8 pb-20 md:pt-5 md:pb-10 bg-[radial-gradient(ellipse_200%_100%_at_bottom_left,#183EC2,#EAEEFE_100%)] overflow-x-clip"
    >
      <div className="container mx-auto px-4 md:px-6 lg:px-8 lg:max-w-[1440px]">
        <div className="md:flex items-center">
          {/* Text Content */}
          <motion.div
            className="md:w-[478px]"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="text-sm inline-flex border border-[#222]/10 px-3 py-1 rounded-lg tracking-tight">
              Version 2.0 is here
            </div>

            <h1 className="text-5xl md:text-7xl font-bold tracking-tighter bg-gradient-to-b from-black to-[#001E80] text-transparent bg-clip-text mt-4">
              Pathway to Productivity
            </h1>

            <p className="text-xl text-[#010D3E] tracking-tight mt-6">
              Celebrate the joy of accomplishment with an app designed to track
              your progress, motivate your efforts, and celebrate your successes.
            </p>

            {/* Call to Actions */}
            <div className="flex items-center gap-1 mt-[30px]">
              <motion.a
              href="/sign-up"
                whileHover={{ scale: 1.05 }}
                className="btn btn-primary hover:bg-[#001E80] transition"
              >
                Get Started
              </motion.a>
              <motion.button
                whileHover={{ scale: 1.05 }}
                className="btn btn-text flex items-center gap-2 hover:underline font-medium"
              >
                <span>Learn More</span> <ArrowRight className="h-5 w-5" />
              </motion.button>
            </div>
          </motion.div>

          {/* Image */}
          <div className="mt-20 md:mt-0 md:h-[648px] md:flex-1 relative md:ml-10 lg:ml-70">
            {/* Cog - Floating Loop + Scroll */}
            <motion.img
              src={cogImage.src}
              alt="Cog Illustration"
              className="md:absolute md:h-full md:w-auto md:max-w-none md:-left-6 lg:left-0"
              style={{ y: cogY }}
              animate={{
                y: [-10, 10],
                scale: [1, 1.02, 1],
              }}
              transition={{
                y: { repeat: Infinity, repeatType: "mirror", duration: 4, ease: "easeInOut" },
                scale: { repeat: Infinity, duration: 3, ease: "easeInOut" },
              }}
            />

            {/* Cylinder - Parallax */}
            <motion.img
              src={cylinderImage.src}
              alt="Cylinder Illustration"
              height={220}
              width={220}
              className="hidden md:block -top-8 -left-32 md:absolute"
              style={{ y: cylinderY }}
            />

            {/* Noodle - Rotate + Parallax */}
            <motion.img
              src={noodleImage.src}
              alt="Noodle Illustration"
              width={220}
              className="hidden lg:block absolute top-[524px] left-[448px]"
              style={{ rotate: 30, y: noodleY }}
              animate={{
                rotate: [25, 35, 25],
              }}
              transition={{
                rotate: { repeat: Infinity, duration: 6, ease: "easeInOut" },
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};
