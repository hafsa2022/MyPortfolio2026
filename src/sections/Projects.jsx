import { useState, useRef } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Project from "../components/Project";
import TitleHeader from "../components/TitleHeader";
import { myProjects } from "../constants";
import { motion, useMotionValue, useSpring } from "motion/react";

gsap.registerPlugin(ScrollTrigger);

const Projects = () => {
  const sectionRef = useRef(null);
  const [preview, setPreview] = useState(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { damping: 10, stiffness: 50 });
  const springY = useSpring(y, { damping: 10, stiffness: 50 });
  const handleMouseMove = (e) => {
    x.set(e.clientX + 20);
    y.set(e.clientY + 20);
  };

  useGSAP(() => {
    gsap.fromTo(
      sectionRef.current,
      {
        y: 60,
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
        duration: 1.5,
        ease: "power3.out",
        delay: 0.5,
        stagger: 0.25,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top bottom-=100",
        },
      },
    );
  }, []);

  return (
    <section
      onMouseMove={handleMouseMove}
      className="projects"
    >
      <TitleHeader title="Practice Projects" sub="💻 My Selected Projects" />
      <div className="bg-linear-to-r from-transparent via-neutral-700 to-transparent mt-12 h-px w-full" />
      <div ref={sectionRef}>
        {myProjects.map((project) => (
          <Project key={project.id} {...project} setPreview={setPreview} />
        ))}
      </div>

      {preview && (
        <motion.img
          className="fixed top-0 left-0 z-50 object-cover h-56 rounded-lg shadow-lg pointer-events-none w-80"
          src={preview}
          style={{ x: springX, y: springY }}
        />
      )}
    </section>
  );
};

export default Projects;
