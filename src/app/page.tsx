import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Partners from "@/components/Partners";
// import ProblemStats from "@/components/ProblemStats"; // Hidden - uncomment to show
import Pillars from "@/components/Pillars";
import FullFunnel from "@/components/FullFunnel";
import Moat from "@/components/Moat";
import Results from "@/components/Results";
import Audience from "@/components/Audience";
import Pricing from "@/components/Pricing";
// import Team from "@/components/Team"; // Hidden - uncomment to show
import Security from "@/components/Security";
import FAQ from "@/components/FAQ";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Navigation />
      <Hero />
      <Partners />
      {/* <ProblemStats /> */}
      <Pillars />
      <FullFunnel />
      <Moat />
      <Results />
      <Audience />
      <Pricing />
      {/* <Team /> */}
      <Security />
      <FAQ />
      <CTA />
      <Footer />
    </main>
  );
}
