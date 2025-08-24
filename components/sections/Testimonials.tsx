"use client";

import avatar1 from "@/components/icons/avatar-1.png";
import avatar2 from "@/components/icons/avatar-2.png";
import avatar3 from "@/components/icons/avatar-3.png";
import avatar4 from "@/components/icons/avatar-4.png";
import avatar5 from "@/components/icons/avatar-5.png";
import avatar6 from "@/components/icons/avatar-6.png";
import avatar7 from "@/components/icons/avatar-7.png";
import avatar8 from "@/components/icons/avatar-8.png";
import avatar9 from "@/components/icons/avatar-9.png";
import Image from "next/image";
import { motion } from "framer-motion";
import React from "react";

// 1️⃣ Define a type for testimonials
type Testimonial = {
  text: string;
  imageSrc: string;
  name: string;
  username: string;
};

// 2️⃣ Use that type for the array
const testimonials: Testimonial[] = [
  {
    text: "As a seasoned designer always on the lookout for innovative tools, Framer.com instantly grabbed my attention.",
    imageSrc: avatar1.src,
    name: "Jamie Rivera",
    username: "@jamietechguru00",
  },
  {
    text: "Our team's productivity has skyrocketed since we started using this tool. ",
    imageSrc: avatar2.src,
    name: "Josh Smith",
    username: "@jjsmith",
  },
  {
    text: "This app has completely transformed how I manage my projects and deadlines.",
    imageSrc: avatar3.src,
    name: "Morgan Lee",
    username: "@morganleewhiz",
  },
  {
    text: "I was amazed at how quickly we were able to integrate this app into our workflow.",
    imageSrc: avatar4.src,
    name: "Casey Jordan",
    username: "@caseyj",
  },
  {
    text: "Planning and executing events has never been easier. This app helps me keep track of all the moving parts, ensuring nothing slips through the cracks.",
    imageSrc: avatar5.src,
    name: "Taylor Kim",
    username: "@taylorkimm",
  },
  {
    text: "The customizability and integration capabilities of this app are top-notch.",
    imageSrc: avatar6.src,
    name: "Riley Smith",
    username: "@rileysmith1",
  },
  {
    text: "Adopting this app for our team has streamlined our project management and improved communication across the board.",
    imageSrc: avatar7.src,
    name: "Jordan Patels",
    username: "@jpatelsdesign",
  },
  {
    text: "With this app, we can easily assign tasks, track progress, and manage documents all in one place.",
    imageSrc: avatar8.src,
    name: "Sam Dawson",
    username: "@dawsontechtips",
  },
  {
    text: "Its user-friendly interface and robust features support our diverse needs.",
    imageSrc: avatar9.src,
    name: "Casey Harper",
    username: "@casey09",
  },
];

// 3️⃣ Columns
const firstColumn = testimonials.slice(0, 3);
const secondColumn = testimonials.slice(3, 6);
const thirdColumn = testimonials.slice(6, 9);

const TestimonialsColumn = ({
  className,
  testimonials,
  duration = 10,
}: {
  className?: string;
  duration?: number;
  testimonials: Testimonial[];
}) => (
  <div className={className}>
    <motion.div
      className="flex flex-col gap-6 pb-6"
      animate={{ translateY: "-50%" }}
      transition={{
        duration: duration || 10,
        repeat: Infinity,
        repeatType: "loop",
        ease: "linear",
      }}
    >
      {[...new Array(2)].map((_, index) => (
        <React.Fragment key={index}>
          {testimonials.map(({ text, imageSrc, name, username }) => (
            <div key={username} className="card">
              <div>{text}</div>
              <div className="flex items-center mt-5 gap-2">
                <Image
                  src={imageSrc}
                  alt={name}
                  width={40}
                  height={40}
                  className="h-10 w-10 rounded-full"
                />
                <div className="flex flex-col">
                  <div className="font-medium tracking-tight leading-5">
                    {name}
                  </div>
                  <div className="leading-5 tracking-tight">{username}</div>
                </div>
              </div>
            </div>
          ))}
        </React.Fragment>
      ))}
    </motion.div>
  </div>
);

export const Testimonials = () => {
  return (
    <section className="bg-white py-24">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <div className="section-heading">
          <div className="flex justify-center">
            <div className="tag">Testimonials</div>
          </div>
          <h2 className="section-title mt-5">What our users say</h2>
          <p className="section-description mt-5">
            From intuitive design to powerful features, our app has become an
            essential tool for users around the world.
          </p>
        </div>
        <div className="flex justify-center gap-6 mt-10 [mask-image:linear-gradient(to_bottom,transparent,black_25%,black_75%,transparent)] max-h-[738px] overflow-hidden">
          <TestimonialsColumn testimonials={firstColumn} duration={15}/>
          <TestimonialsColumn
            testimonials={secondColumn}
            className="hidden md:block"
            duration={19}
          />
          <TestimonialsColumn
            testimonials={thirdColumn}
            className="hidden lg:block"
            duration={17}
          />
        </div>
      </div>
    </section>
  );
};
