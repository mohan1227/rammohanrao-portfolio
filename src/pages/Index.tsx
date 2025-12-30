import { Box, useMediaQuery, useTheme } from "@mui/material";
import { gsap } from "gsap";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect } from "react";
import { Sidebar } from "../components/Sidebar";
import { About } from "../components/sections/About";
import { Contact } from "../components/sections/Contact";
import { Education } from "../components/sections/Education";
import { Experience } from "../components/sections/Experience";
import { Hero } from "../components/sections/Hero";
import { Projects } from "../components/sections/Projects";
import { Publications } from "../components/sections/Publications";
import { Skills } from "../components/sections/Skills";

gsap.registerPlugin(ScrollToPlugin, ScrollTrigger);

const Portfolio = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  useEffect(() => {
    // Smooth scroll behavior
    const handleWheel = (e: WheelEvent) => {
      e.preventDefault();
    };
    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <Box sx={{ display: "flex", minHeight: "100vh" }}>
      <Sidebar />
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          ml: { xs: 0, md: "280px" },
          mt: 0,
        }}>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Education />
        <Publications />
        <Contact />
      </Box>
    </Box>
  );
};

export default Portfolio;
