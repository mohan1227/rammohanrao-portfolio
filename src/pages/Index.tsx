import { Box, useMediaQuery, useTheme } from '@mui/material';
import { Sidebar } from '../components/Sidebar';
import { TopBar } from '../components/TopBar';
import { Hero } from '../components/sections/Hero';
import { About } from '../components/sections/About';
import { Skills } from '../components/sections/Skills';
import { Projects } from '../components/sections/Projects';
import { Experience } from '../components/sections/Experience';
import { Education } from '../components/sections/Education';
import { Publications } from '../components/sections/Publications';
import { Contact } from '../components/sections/Contact';
import { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollToPlugin } from 'gsap/ScrollToPlugin';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollToPlugin, ScrollTrigger);

const Portfolio = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  useEffect(() => {
    // Smooth scroll behavior
    const handleWheel = (e: WheelEvent) => {
      e.preventDefault();
    };
    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <Box sx={{ display: 'flex', minHeight: '100vh' }}>
      <TopBar />
      <Sidebar />
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          ml: { xs: 0, md: '280px' },
          mt: '64px',
        }}
      >
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
