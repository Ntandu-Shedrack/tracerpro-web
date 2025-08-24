"use client";

import productImage from "@/components/icons/product-image.png";
import pyramidImage from "@/components/icons/pyramid.png";
import tubeImage from "@/components/icons/tube.png";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export const ProductShowcase = () => {
  const sectionRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const translateY = useTransform(scrollYProgress, [0, 1], [-150, 150]);
  const rotate = useTransform(scrollYProgress, [0, 1], [-5, 5]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.1]);

  return (
    <section
      ref={sectionRef}
      className="relative bg-gradient-to-b from-white to-[#D2DCFF] py-24 overflow-x-clip"
    >
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        {/* Heading */}
        <div className="section-heading text-center max-w-3xl mx-auto">
          <div className="tag mx-auto">Boost your productivity</div>
          <h2 className="section-title mt-5">
            A more effective way to track progress
          </h2>
          <p className="section-description mt-5 text-gray-600">
            Effortlessly turn your ideas into a fully functional, responsive
            SaaS website in just minutes with this template.
          </p>
        </div>

        {/* Product Image + Decorations */}
        <div className="relative mt-14 justify-center">
          <div className="relative">
            <Image
              src={productImage}
              alt="Product Image"
              className="rounded-2xl shadow-xl"
            />
          </div>

          {/* Pyramid */}
          <motion.img
            src={pyramidImage.src}
            alt="Pyramid Illustration"
            height={262}
            width={262}
            className="hidden md:block absolute -right-36 -top-5 opacity-80"
            style={{ translateY, rotate, scale }}
          />

          {/* Tube */}
          <motion.img
            src={tubeImage.src}
            alt="Tube Illustration"
            height={248}
            width={248}
            className="hidden md:block absolute -bottom-24 -left-36 opacity-80"
            style={{ translateY, rotate, scale }}
          />
        </div>
      </div>
    </section>
  );
};
