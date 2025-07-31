"use client";

import React from "react";
import Link from "next/link";

export default function MainPage() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-gray-50">
      <h1 className="text-3xl font-bold mb-4">Welcome to TracerPro</h1>
      <p className="mb-6 text-lg text-gray-700">
        This is the main page content.
      </p>
      <div className="space-x-4">
        <Link
          href="/sign-in"
          className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
        >
          Login
        </Link>
        <Link
          href="/sign-up"
          className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700 transition"
        >
          Register
        </Link>
      </div>
    </main>
  );
}
