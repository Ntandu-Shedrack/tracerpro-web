"use client";
import { AboutUs } from "@/components/sections/AboutUs";
import { Footer } from "@/components/sections/Footer";
import { Header } from "@/components/sections/Header";
import React from "react";

const AboutPage: React.FC = () => (
  <>
    <Header />
    <AboutUs />
    <Footer />
  </>
);

export default AboutPage;
