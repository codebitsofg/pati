import Footer from "@/components/Footer";
import Headline from "@/components/Headline";
import LearnMore from "@/components/LearnMore";
import NewsletterForm from "@/components/NewsletterForm";
import Overlay from "@/components/Overlay";
import Pricing from "@/components/Pricing";
import PricingCard from "@/components/PricingCard";
import SignedInAvatars from "@/components/SignedInAvatars";
import Stats from "@/components/Stats";
import React from "react";

export default function Home() {
  return (
    <main className="relative bg-[#08122d]  w-screen overflow-hidden">
      <div className="relative  z-20 flex flex-col    mb-20  items-center min-h-[100dvh] font-roboto text-white">
        <Headline />
        <NewsletterForm />
        <Overlay />
      </div>
      <Stats />
      <LearnMore />
      <Pricing />
      <Footer />
    </main>
  );
}
