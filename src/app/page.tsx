import { Hero } from "@/components/sections/Hero";
import { Location } from "@/components/sections/Location";
import { Services } from "@/components/sections/Services";
import { Gallery } from "@/components/sections/Gallery";
import { Equipment } from "@/components/sections/Equipment";
import { WhyChooseUs } from "@/components/sections/WhyChooseUs";
import { Testimonials } from "@/components/sections/Testimonials";
import { FAQ } from "@/components/sections/FAQ";
import { FinalCTA } from "@/components/sections/FinalCTA";
import { getGalleryItems } from "@/lib/gallery-server";

export default function Home() {
  const galleryItems = getGalleryItems();

  return (
    <>
      <Hero />
      <Location />
      <Services />
      <Gallery items={galleryItems} />
      <Equipment />
      <WhyChooseUs />
      <Testimonials />
      <FAQ />
      <FinalCTA />
    </>
  );
}
