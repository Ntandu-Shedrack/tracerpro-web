"use client";
import { ContactUs } from "@/components/sections/ContactUs";
import { Footer } from "@/components/sections/Footer";
import { Header } from "@/components/sections/Header";
import React from "react";

const ContactPage: React.FC = () => (
  <>
    <Header />
    <ContactUs />
    <Footer />
  </>
);

export default ContactPage;
