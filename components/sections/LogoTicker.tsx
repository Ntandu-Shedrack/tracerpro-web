import quantumLogo from "@/components/icons/logo-quantum.png";
import acMeLogo from "@/components/icons/logo-acme.png";
import echoLogo from "@/components/icons/logo-echo.png";
import celestialLogo from "@/components/icons/logo-celestial.png";
import pulseLogo from "@/components/icons/logo-pulse.png";
import apexLogo from "@/components/icons/logo-apex.png";
import Image, { type StaticImageData } from "next/image";
import { motion } from "framer-motion";

type Logo = {
  src: StaticImageData | string;
  alt: string;
};

const logos: Logo[] = [
  { src: quantumLogo, alt: "Quantum Logo" },
  { src: acMeLogo, alt: "Acme Logo" },
  { src: echoLogo, alt: "Echo Logo" },
  { src: celestialLogo, alt: "Celestial Logo" },
  { src: pulseLogo, alt: "Pulse Logo" },
  { src: apexLogo, alt: "Apex Logo" },
];

const LOGO_WIDTH = 120; // px
const GAP = 56; // px (gap-14)
const TICKER_WIDTH = (LOGO_WIDTH + GAP) * logos.length * 2;

export const LogoTicker = () => {
  return (
    <div className="py-8 md:py-12 bg-white">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <div className="flex overflow-hidden [mask-image:linear-gradient(to_right,transparent,black,transparent)]">
          <motion.div
            className="flex gap-14 flex-none pr-14"
            style={{ minWidth: TICKER_WIDTH }}
            animate={{ x: [`0px`, `-${TICKER_WIDTH / 2}px`] }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "linear",
            }}
          >
            {[...logos, ...logos].map((logo, idx) => (
              <Image
                key={`${logo.alt}-${idx}`}
                src={logo.src}
                alt={logo.alt}
                className="logo-ticker-image"
                width={LOGO_WIDTH}
                height={60}
                style={{ objectFit: "contain" }}
              />
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
};
