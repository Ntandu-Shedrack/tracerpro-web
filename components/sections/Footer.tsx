import logo from "@/components/icons/logosaas.png";
import Image from "next/image";
import { FacebookIcon, InstagramIcon } from "lucide-react";
import { TwitterIcon } from "lucide-react";
import { LinkedinIcon } from "lucide-react";
import { YoutubeIcon } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-black text-[#BCBCBC] text-sm py-10 text-center">
      <div className="container mx-auto px-4 md:px-6 lg:px-8 lg:max-w-[1440px]">
        <div className="inline-flex relative before:content-[''] before:top-2 before:bottom-0 before:blur before:h-full before:w-full before:bg-[linear-gradient(to_right,#F87BFF,#FB92CF,#FFDD9B,#C2F0B1,#2FD8FE)] before:absolute">
          <Image src={logo} height={40} alt="SaaS Logo" className="relative" />
        </div>
        <nav className="flex flex-col md:flex-row md:justify-center gap-6 mt-6">
          <a href="#">About</a>
          <a href="#">Features</a>
          <a href="#">Contact</a>
          <a href="#">Help</a>
        </nav>
        <div className="flex justify-center gap-6 mt-6">
          <TwitterIcon />
          <InstagramIcon />
          <LinkedinIcon />
          <FacebookIcon />
          <YoutubeIcon />
        </div>
        <p className="text-sm text-gray-500 mt-6">
          &copy; {new Date().getFullYear()} Shedrack Ntandu. All rights
          reserved.
        </p>
      </div>
    </footer>
  );
};
