"use client";

import { CheckIcon } from "lucide-react";
import { twMerge } from "tailwind-merge";
import { motion } from "framer-motion";

const pricingTiers = [
  {
    title: "Free",
    monthlyPrice: 0,
    buttonText: "Get started",
    popular: false,
    inverse: false,
    features: [
      "Up to 5 project members",
      "Unlimited tasks and projects",
      "2GB storage",
      "Integrations",
      "Basic support",
    ],
  },
  {
    title: "Pro",
    monthlyPrice: 9,
    buttonText: "Sign up now",
    popular: true,
    inverse: true,
    features: [
      "Up to 50 project members",
      "Unlimited tasks and projects",
      "50GB storage",
      "Integrations",
      "Priority support",
      "Advanced support",
      "Export support",
    ],
  },
  {
    title: "Business",
    monthlyPrice: 19,
    buttonText: "Sign up now",
    popular: false,
    inverse: false,
    features: [
      "Up to 5 project members",
      "Unlimited tasks and projects",
      "200GB storage",
      "Integrations",
      "Dedicated account manager",
      "Custom fields",
      "Advanced analytics",
      "Export capabilities",
      "API access",
      "Advanced security features",
    ],
  },
];

type PricingTier = (typeof pricingTiers)[number];

const PricingCard = ({
  title,
  monthlyPrice,
  buttonText,
  popular,
  inverse,
  features,
}: PricingTier) => (
  <div
    key={title}
    className={twMerge(
      "card transition-shadow hover:shadow-lg",
      inverse && "border-black bg-black text-white"
    )}
  >
    <div className="flex justify-between items-center">
      <h3
        className={twMerge(
          "text-lg font-bold text-black/50",
          inverse && "text-white/60"
        )}
      >
        {title}
      </h3>
      {popular && (
        <div className="inline-flex text-sm px-4 py-1.5 rounded-xl border border-white/20">
          <motion.span
            animate={{ backgroundPositionX: ["-100%"] }}
            transition={{
              duration: 1,
              repeat: Infinity,
              ease: "linear",
              repeatType: "loop",
            }}
            className="bg-[linear-gradient(to_right,#DD7DDF,#E1CD86,#BBCB92,#71C2EF,#3BFFFF,#DD7DDF)] [background-size:200%] text-transparent bg-clip-text font-medium"
          >
            Popular
          </motion.span>
        </div>
      )}
    </div>
    <div className="flex items-baseline gap-1 mt-8">
      <span className="text-4xl font-bold tracking-tighter leading-none">
        ${monthlyPrice}
      </span>
      <span
        className={twMerge(
          "tracking-tight font-bold text-black/50",
          inverse && "text-white/50"
        )}
      >
        /month
      </span>
    </div>
    <a
      href="/sign-up"
      className={twMerge(
        "btn btn-primary w-full mt-8",
        inverse && "bg-white text-black hover:bg-gray-100"
      )}
    >
      {buttonText}
    </a>
    <ul className="flex flex-col gap-5 mt-8">
      {features.map((feature) => (
        <li className="text-sm flex items-center gap-4" key={feature}>
          <CheckIcon className={twMerge("h-6 w-6", inverse && "text-white")} />
          <span>{feature}</span>
        </li>
      ))}
    </ul>
  </div>
);

export const Pricing = () => (
  <section className="bg-white py-24">
    <div className="container mx-auto px-4 md:px-6 lg:px-8">
      <div className="section-heading text-center">
        <h2 className="section-title">Pricing</h2>
        <p className="section-description mt-5">
          Free forever, Upgrade for Unlimited tasks, better security, and
          exclusive features.
        </p>
      </div>
      <div className="flex flex-col gap-6 items-center mt-10 md:flex-row lg:items-end lg:justify-center">
        {pricingTiers.map((tier) => (
          <PricingCard key={tier.title} {...tier} />
        ))}
      </div>
    </div>
  </section>
);
