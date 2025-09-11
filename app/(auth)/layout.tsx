import React from "react";
import { Toaster } from "react-hot-toast";
// import logo from "@/components/icons/logosaas.png";
// import Image from "next/image";
// import Link from "next/link";
// import { ArrowRight } from "lucide-react";

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="flex min-h-screen">
      <div className="w-full md:w-2/3 flex items-center justify-center">
        {children}
      </div>
      <div className="w-1/3 bg-[radial-gradient(ellipse_200%_100%_at_bottom_left,#232736FF,#EAEEFE_70%)] hidden md:flex items-center justify-center rounded-l-lg">
        {/* <div className="flex flex-col items-center">
          <Image
            src={logo}
            alt="TracerPro Logo"
            height={100}
            width={100}
            className="object-contain"
          />
          <h1 className="text-3xl md:text-5xl font-bold tracking-tighter bg-gradient-to-b from-black to-[#001E80] text-transparent bg-clip-text mt-8">
            TracerPro App
          </h1>
          <Link
            href="/"
            className="text-md mt-4 btn btn-text border hover:underline gap-4"
          >
            Learn more{" "}
            <span>
              <ArrowRight />
            </span>
          </Link>
        </div> */}
      </div>
      <Toaster position="top-right" />
    </main>
  );
}
