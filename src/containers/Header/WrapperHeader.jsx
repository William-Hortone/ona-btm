import React, { useEffect, useState } from "react";
import { gsap } from "gsap";

import {
  SectionRight,
  SectionCenter,
  SectionLeft,
  SectionTop,
  HeroHeader,
} from "../../components";
import "../../App.css";

const WrapperHeader = () => {
  const [imagesLoaded, setImagesLoaded] = useState(false);

  useEffect(() => {
    const images = document.querySelectorAll("img");
    let loaded = 0;

    images.forEach((img) => {
      img.onload = () => {
        loaded++;
        if (loaded === images.length) {
          setImagesLoaded(true);
        }
      };
      img.onerror = () => {
        console.error("Image failed to load:", img.src);
        loaded++;
        if (loaded === images.length) {
          setImagesLoaded(true);
        }
      };
    });
  }, []);

  useEffect(() => {
    if (!imagesLoaded) return;

    const tl = gsap.timeline({ defaults: { duration: 1, ease: "power4.out" } });

    tl.from(".section-right__background", { x: "100%", opacity: 0 })
      .from(".section-center__img", { x: "100%", opacity: 0 }, "-=0.8")
      .from(".section-right__img", { x: "100%", opacity: 0 }, "-=0.8")
      .from(".separator", { scaleX: 0 }, "-=0.5")
      .from(".asterix", { y: "15vw", opacity: 0, rotation: -360 }, "-=0.5")
      .from(
        ".section-top__title",
        { y: "105%", opacity: 0, stagger: 0.1 },
        "-=0.8"
      )
      .from(
        ".section-left__title",
        { x: "-100%", opacity: 0, stagger: 0.1 },
        "-=0.5"
      )
      .from(
        ".section-top__content p",
        { y: "75%", opacity: 0, stagger: 0.1 },
        "-=0.5"
      )
      .from("button", { scale: 0.5, opacity: 0, duration: 0.6 }, "-=0.4");
  }, [imagesLoaded]);

  return (
    <div className="w-full min-h-screen overflow-hidden text-white bg-gray-800">
      <div className="max-w-[90vw] mx-auto aspect-[16/9] bg-gray-900 md:aspect-[4/3] lg:aspect-[16/9]">
        <HeroHeader />
        <main className="relative flex flex-col w-full h-full md:flex-row">
          <SectionTop imagesLoaded={imagesLoaded} />
          <SectionLeft imagesLoaded={imagesLoaded} />
          <SectionCenter imagesLoaded={imagesLoaded} />
          <SectionRight imagesLoaded={imagesLoaded} />
        </main>
      </div>
    </div>
  );
};

export default WrapperHeader;
