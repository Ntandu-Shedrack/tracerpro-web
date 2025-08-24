"use client";

import { ArrowRight } from "lucide-react";
import starImage from "@components/icons/star.png";
import springImage from "@components/icons/spring.png";
import {motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export const CallToAction = () => {
  const sectionRef = useRef<HTMLElement | null>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const translateY = useTransform(scrollYProgress, [0, 1], [150, -150]);
  return (
    <section ref={sectionRef} className="bg-gradient-to-b from-white to-[#D2DCFF] py-24 overflow-x-clip">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <div className="relative text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Sign Up for free today
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            Celebrate the joy of accomplishment with an app designed to track your
            progress and motivate your efforts.
          </p>
          <motion.img
            src={starImage.src}
            alt="Star"
            width={360}
            className="absolute -left-[350px] -top-[137px]"
            style={{ translateY }}
          />
          <motion.img
            src={springImage.src}
            alt="Spring"
            width={360}
            className="absolute -right-[331px] -top-[19px]"
            style={{ translateY }}
          />
        </div>
        <div className="flex gap-4 mt-10 justify-center">
          <a href="/sign-up" className="btn btn-primary px-6 py-3 text-base font-semibold rounded-lg shadow hover:shadow-md transition">
            Get Started
          </a>
          <button className="btn btn-text flex items-center gap-2 px-6 py-3 text-base font-medium rounded-lg hover:underline transition">
            <span>Learn More</span>
            <ArrowRight className="h-5 w-5" />
          </button>
        </div>
      </div>
    </section>
  );
}
