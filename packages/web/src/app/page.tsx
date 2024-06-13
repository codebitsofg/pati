import Headline from "@/components/Headline";
import NewsletterForm from "@/components/NewsletterForm";
import Overlay from "@/components/Overlay";
import SignedInAvatars from "@/components/SignedInAvatars";
import React from "react";

export default function Home() {
  return (
    <main className="relative bg-indigo-600 w-screen h-screen overflow-hidden">
      <div className="relative z-20 flex flex-col items-center min-h-screen font-roboto text-white">
        <Headline />
        <NewsletterForm />
      </div>
      <Overlay />
    </main>
  );
}
