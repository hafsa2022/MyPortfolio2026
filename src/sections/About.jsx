import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { Globe } from "../components/Globe";

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const sectionRef = useRef(null);
  const rydeRef = useRef(null);
  const libraryRef = useRef(null);
  const ycDirectoryRef = useRef(null);

  useGSAP(() => {
    // Animation for the main section
    gsap.fromTo(
      sectionRef.current,
      { opacity: 0 },
      { opacity: 1, duration: 1.5 },
    );

    // Animations for each app showcase
    const cards = [rydeRef.current, libraryRef.current, ycDirectoryRef.current];

    cards.forEach((card, index) => {
      gsap.fromTo(
        card,
        {
          y: 50,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          delay: 0.3 * (index + 1),
          scrollTrigger: {
            trigger: card,
            start: "top bottom-=100",
          },
        },
      );
    });
  }, []);

  return (
    <div id="about" ref={sectionRef} className="about">
      <div className="w-full">
        <div className="aboutlayout">
          <div ref={rydeRef} className="first-project-wrapper">
            <div className="image-wrapper">
              {/* <img src="/images/coding-pov.png" alt="Ryde App Interface" className=""/> */}
              <video src="/images/screen.mp4" autoPlay muted loop playsInline />
            </div>
            <div className="text-content">
              <h2>I’m Hafsa</h2>
              <p className="text-white-50 md:text-xl">
                I developed my frontend and backend dev skills to deliver
                dynamic and web applications.
              </p>
            </div>
          </div>

          <div className="project-list-wrapper overflow-hidden">
            {/* <div className="project" ref={libraryRef}>
              <div className="image-wrapper bg-[#FFEFDB]">
                <figure className="">
                  <Globe />
                </figure>
                {/* <img
                  src="/images/project2.png"
                  alt="Library Management Platform"
                /> 
              </div>
              <h2>The Library Management Platform</h2>
            </div> */}
            <div className="project grid-black-color grid-1" ref={libraryRef}>
              <div className="z-10 w-[50%]">
                <h2>Time Zone</h2>
                <p className="text-neutral-400 text-sm md:text-base text-pretty">
                  I'm based in Morocco, and open to remote work worldwide
                </p>
              </div>
              <figure className="absolute left-[25%] top-[10%]">
                <Globe />
              </figure>
            </div>

            {/* <div className="project" ref={ycDirectoryRef}>
              <div className="image-wrapper">
                <img src="/images/coding-pov.png" alt="YC Directory App" className="absolute left-[20%] top-[%] scale-[2]" />
                
                <h2>YC Directory - A Startup Showcase App</h2>
              </div> */}
            {/* <img src="/images/project3.png" alt="YC Directory App" /> */}
            {/* <h2>YC Directory - A Startup Showcase App</h2> */}
            {/* </div> */}

            <div className="project grid-violet-color grid-1" ref={libraryRef}>
              <div className="z-10 w-[50%]">
                <h2>“First, solve the problem. Then, write the code.”</h2>
                <p className="text-neutral-400 text-sm md:text-base text-pretty">
                 — John Johnson
                </p>
              </div>
              <img
                src="/images/coding-pov.png"
                alt="Coding Pov"
                className="absolute left-[30%] top-[10%] scale-[2]"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
