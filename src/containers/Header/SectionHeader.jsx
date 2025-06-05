import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { images } from "../../constants";
import HomeNavbar from "../Navbar/HomeNavbar";

const SectionHeader = () => {
  const mainRef = useRef();
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
    // Manually split text into spans
    titlesRef.current.forEach((el) => {
      const text = el.textContent;
      el.innerHTML = "";
      text.split("").forEach((char) => {
        const span = document.createElement("span");
        span.textContent = char;
        el.appendChild(span);
      });
    });

    // GSAP Animation
    const ctx = gsap.context(() => {
      const tl = gsap.timeline();

      tl.from(mainRef.current, { duration: 0.4, autoAlpha: 0 })
        .from(sectionCenterImgRef.current, {
          x: "100%",
          duration: 1,
          ease: "power4.out",
        })
        .from(
          sectionRightImgRef.current,
          { x: "100%", duration: 1.2, ease: "power4.out" },
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
        )
        .from(
          titlesRef.current.map((el) => el.querySelectorAll("span")),
          {
            y: "150%",
            opacity: 0,
            stagger: 0.05,
            duration: 0.8,
            ease: "power2.out",
          },
          "<"
        )
        .from(
          sectionLeftSubtitleRef.current,
          { opacity: 0, duration: 1, ease: "power2.out" },
          "<"
        )
        .from(
          sectionTopContentRef.current.children,
          { y: "110%", stagger: 0.1, duration: 1, ease: "power2.out" },
          "<"
        )
        .from(
          buttonRef.current,
          { opacity: 0, duration: 1, ease: "power1.out" },
          "<"
        );

      return () => tl.kill();
    });

    return () => ctx.revert();
  }, []);

  return (
    <>
      <div className="flex w-full h-screen min-h-screen bg-[#4a4a4a]">
        <div className="relative max-w-[100vw] w-full mx-auto aspect-[16/9] bg-[#282929]">
          <header className="absolute w-full flex items-center justify-between p-[1vw_2.5vw] z-20 mt-4 md:mt-0">
            <div
              className="flex items-center overflow-hidden text-white"
              ref={sectionTopContentRef}
            >
              <img
                src={images.logoWebsite}
                className="w-[6vw] md:w-[4.5vw] object-cover"
                alt="logo"
              />
              <p className="text-white">Ona Batiment</p>
            </div>
            <div
              onClick={() => setShowMenu(!showMenu)}
              className="md:w-[1.5vw] w-[5vw] h-[5vw] md:h-[1vw] bg-reds-500 flex flex-col justify-between"
            >
              <div className="w-full h-[clamp(1px,0.2vw,3px)] bg-white"></div>
              <div className="w-full h-[clamp(1px,0.2vw,3px)] bg-white"></div>
            </div>
          </header>

          <main
            ref={mainRef}
            className="w-full h-screen min-h-screen overflow-hidden"
          >
            <div className="absolute flex flex-col justify-end w-full   h-[60vh] md:h-[75%] overflow-hidden z-1 ">
              <div className="relative flex justify-between">
                <div
                  ref={(el) => (titlesRef.current[0] = el)}
                  className="text-[30vw] md:text-[21vw] leading-[1.1] mx-[1.5vw] z-20 mb-[1.5vw] overflow-hidden text-white"
                >
                  ONA
                </div>

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
                  <p className="z-20 text-white/75">BATIMENT</p>
                  <p className="z-20 text-white/75"> Projets de qualité</p>
                </div>
                <div className="z-20 w-full h-px md:z-10 bg-white/25"></div>
              </div>
            </div>

            <div className="relative flex flex-col justify-end w-[32%] h-full gap-[0.6vw] p-[2.25vw] z-20 md:z-1">
              <p
                ref={sectionLeftSubtitleRef}
                className="text-[3.5vw] md:text-[1.8vw] text-[#535353]"
              >
                Vision élargie
              </p>
              <p
                ref={(el) => (titlesRef.current[1] = el)}
                className="text-[3vw] md:text-[1.8vw] leading-none overflow-hidden text-white"
              >
                Service <br />
                honnête
              </p>
            </div>

            <div className="lg:relative z-10 md:static absolute top-0 overflow-hidden flex flex-col justify-end w-[100vw] md:w-[45%] h-full min-h-[100vh]">
              <img
                ref={sectionCenterImgRef}
                className="absolute inset-0 object-cover w-full h-full"
                src={images.building9}
                alt="center"
              />
            </div>

          
          </main>
        </div>
      </div>
      <HomeNavbar showMenu={showMenu} setShowMenu={setShowMenu} />
    </>
  );
};

export default SectionHeader;
