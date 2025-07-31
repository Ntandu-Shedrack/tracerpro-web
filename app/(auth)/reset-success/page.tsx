"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function ResetSuccessPage() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 h-screen w-full bg-gray-50">
      {/* Left Side Branding */}
      <div className="relative bg-white text-white flex flex-col justify-between px-0 py-0">
        <Image
          src="/images/branding.png"
          alt="eSSACO Branding"
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          style={{ objectFit: "scale-down" }}
          priority
        />
      </div>

      {/* Right Side Content */}
      <div className="flex flex-col justify-center items-center px-8 sm:px-16 md:px-24 lg:px-32 bg-white">
        <div className="bg-green-100 rounded-full p-6 mb-8 shadow-md">
          <Image
            src="/images/success.png"
            alt="Success Icon"
            width={64}
            height={64}
            className="mx-auto"
          />
        </div>
        <h2 className="text-md font-bold mb-4 text-gray-800 text-center">
          Password Reset Successful!
        </h2>
        <Button
          variant={"outline"}
          className="w-full bg-indigo-600 hover:bg-indigo-700"
        >
          <Link href="/sign-in" className="w-full text-center text-white">
            Login
          </Link>
        </Button>
      </div>
    </div>
  );
}
