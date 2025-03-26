import { gsap } from "gsap";
import SplitText from "gsap-trial/SplitText";
import React, { useEffect, useRef, useState } from "react";
import { images } from "../../constants";
import HomeNavbar from "../Navbar/HomeNavbar";

gsap.registerPlugin(SplitText);

const SectionHeader = () => {
  // Refs for animation elements
  const mainRef = useRef();
  const sectionRightBgRef = useRef();
  const sectionCenterImgRef = useRef();
  const sectionRightImgRef = useRef();
  const separatorRef = useRef();
  const asterixRef = useRef();
  const sectionLeftSubtitleRef = useRef();
  const sectionTopContentRef = useRef();
  const buttonRef = useRef();
  const newImgRef = useRef();
  const titlesRef = useRef([]);

  const [showMenu, setShowMenu] = useState(false);
  useEffect(() => {
    const ctx = gsap.context(() => {
      // SplitText Initialization
      const splitTitles = titlesRef.current.map((el) => {
        return new SplitText(el, { type: "chars, words" });
      });

      //  Animation – Removed repeat and yoyo
      const tl = gsap.timeline();

      tl.from(mainRef.current, { duration: 0.4, autoAlpha: 0 })
        .from(sectionRightBgRef.current, {
          x: "100%",
          duration: 1,
          ease: "power4.out",
        })
        .from(
          [
            sectionCenterImgRef.current,
            sectionRightImgRef.current,
            newImgRef.current,
          ],
          {
            x: "100%",
            duration: 1.2,
            ease: "power4.out",
          },
          "<"
        )
        .from(
          separatorRef.current,
          { scaleX: 0, duration: 1.2, ease: "power3.out" },
          "<"
        )
        .from(
          asterixRef.current,
          { y: "15vw", rotation: -360, duration: 1, ease: "power4.out" },
          "-=0.5"
        );

      // Animate SplitText Elements
      splitTitles.forEach((split) => {
        tl.from(
          split.chars,
          {
            y: "150%",
            opacity: 0,
            stagger: 0.05,
            duration: 0.8,
            ease: "power2.out",
          },
          "<"
        );
      });

      tl.from(
        sectionLeftSubtitleRef.current,
        { opacity: 0, duration: 1, ease: "power2.out" },
        "<"
      )
        .from(
          sectionTopContentRef.current.children,
          { y: "80%", stagger: 0.1, duration: 1, ease: "power2.out" },
          "<"
        )
        .from(
          buttonRef.current,
          { opacity: 0, duration: 1, ease: "power1.out" },
          "<"
        );

      // Cleanup
      return () => {
        tl.kill();
        splitTitles.forEach((split) => split.revert());
      };
    });

    return () => ctx.revert();
  }, []);

  return (
    <>
      <div className="flex w-full h-screen min-h-screen bg-[#4a4a4a]">
        <div className="relative max-w-[100vw] w-full mx-auto aspect-[16/9] bg-[#282929]">
          <header className="absolute w-full flex items-center justify-between p-[1vw_2.5vw] z-10 mt-4 md:mt-0">
            <div
              className="flex items-center overflow-hidden text-white"
              ref={sectionTopContentRef}
            >
              <img
                src={images.logoWebsite}
                className="w-[3.5vw] object-cover"
                alt="logo"
              />
              <p className="text-white">Ona Batiment</p>
            </div>
            <div
              onClick={() => setShowMenu(!showMenu)}
              className="md:w-[1.5vw] w-[5vw] h-[5vw] md:h-[1vw]  bg-reds-500 flex flex-col justify-between"
            >
              <div className="w-full h-[clamp(1px,0.2vw,3px)] bg-white"></div>
              <div className="w-full h-[clamp(1px,0.2vw,3px)] bg-white"></div>
            </div>
          </header>

          <main ref={mainRef} className="w-full h-full overflow-hidden">
            {/* Top Section */}
            <div className="absolute flex flex-col justify-end w-full h-[75%] overflow-hidden z-1">
              <div className="relative flex justify-between">
                <div
                  ref={(el) => (titlesRef.current[0] = el)}
                  className="text-[21vw] leading-[1.1] mx-[1.5vw] z-10 mb-[1.5vw] overflow-hidden"
                >
                  ONA
                </div>

                {/* New Section with Image */}
                <div className="w-[calc(23%+7.5vw)] hidden bg-emeraFld-600 lg:flex flex-col justify-center items-center">
                  <img
                    ref={newImgRef}
                    src={images.building12}
                    alt="new"
                    className="object-cover w-full h-full"
                  />
                </div>
              </div>

              <div className="flex flex-col justify-start">
                <div
                  ref={separatorRef}
                  className="w-full h-px origin-left bg-white/25"
                ></div>
                <div
                  ref={sectionTopContentRef}
                  className="flex justify-between p-[1vw_2vw]"
                >
                  <p className="text-white/75">BATIMENT</p>
                  <p className="text-white/75"> projets de qualité</p>
                </div>
                <div className="w-full h-px bg-white/25"></div>
              </div>
            </div>

            {/* Left Section */}
            <div className="relative flex flex-col justify-end w-[32%] h-full gap-[0.6vw] p-[2.25vw] z-1">
              <p
                ref={sectionLeftSubtitleRef}
                className="text-[1.5vw] text-[#535353]"
              >
                Vision élargie
              </p>
              <p
                ref={(el) => (titlesRef.current[1] = el)}
                className="text-[2vw] leading-none overflow-hidden text-white"
              >
                Service <br />
                honnête
              </p>
              <svg
                ref={asterixRef}
                className="absolute right-[-1.25vw] bottom-[7vw] w-[2.5vw] h-[2.5vw] z-10"
                viewBox="0 0 40 40"
              >
                <path
                  fill="white"
                  d="M39.75 14.25L34.75 5.75L25 11.25V0H15V11.25L5 5.75L0 14.25L9.75 20L0 25.75L5 34.25L15 28.75V40H25V28.75L34.75 34.25L39.75 25.75L29.75 20L39.75 14.25Z"
                />
              </svg>
            </div>

            {/* Center Section */}
            <div className="lg:relative static  overflow-hidden flex flex-col justify-end w-[45%] h-full">
              <img
                ref={sectionCenterImgRef}
                className="absolute object-cover w-full h-full"
                src={images.building9}
                alt="center"
              />
              <p
                ref={(el) => (titlesRef.current[2] = el)}
                className="relative text-white mx-[3vw] mb-[1.75vw] text-[5vw] leading-[1.1] overflow-hidden"
              >
                Architecturale
              </p>
            </div>
          </main>
        </div>
      </div>
      <HomeNavbar showMenu={showMenu} setShowMenu={setShowMenu} />
    </>
  );
};

export default SectionHeader;
