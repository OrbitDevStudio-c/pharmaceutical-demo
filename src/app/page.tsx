import React from "react";
import Header from "@/components/sections/Header";
import Hero from "@/components/sections/Hero";
import TrustedBy from "@/components/sections/TrustedBy";
import AboutPreview from "@/components/sections/AboutPreview";
import ProductCategories from "@/components/sections/ProductCategories";
import WhyChooseUs from "@/components/sections/WhyChooseUs";
import ResearchInnovation from "@/components/sections/ResearchInnovation";
import Stats from "@/components/sections/Stats";
import Testimonials from "@/components/sections/Testimonials";
import News from "@/components/sections/News";
import ContactCTA from "@/components/sections/ContactCTA";
import Footer from "@/components/sections/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <Hero />
        <TrustedBy />
        <AboutPreview />
        <ProductCategories />
        <WhyChooseUs />
        <ResearchInnovation />
        <Stats />
        <Testimonials />
        <News />
        <ContactCTA />
      </main>
      <Footer />
    </>
  );
}
