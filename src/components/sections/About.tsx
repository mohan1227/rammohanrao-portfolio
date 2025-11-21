import { Box, Typography, Container, Paper } from '@mui/material';
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export const About = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (sectionRef.current) {
      gsap.fromTo(
        sectionRef.current.querySelectorAll('.about-item'),
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          stagger: 0.2,
          duration: 0.8,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 80%',
          },
        }
      );
    }
  }, []);

  return (
    <Box id="about" ref={sectionRef} sx={{ py: 10, bgcolor: 'background.default' }}>
      <Container maxWidth="lg">
        <Typography variant="h2" className="about-item" sx={{ mb: 2, textAlign: 'center' }}>
          About Me
        </Typography>
        <Box className="about-item" sx={{ width: 60, height: 4, bgcolor: 'primary.main', mx: 'auto', mb: 6 }} />

        <Paper className="about-item" elevation={0} sx={{ p: 4, bgcolor: 'background.paper', borderRadius: 3 }}>
          <Typography variant="h5" sx={{ mb: 3, fontWeight: 600 }}>
            Career Objective
          </Typography>
          <Typography variant="body1" sx={{ mb: 4, color: 'text.secondary', lineHeight: 1.8 }}>
            To become an eminent professor by sharpening the careers of students, constantly enhancing my skills and knowledge to maximum potential, while contributing to the overall success and growth of the institution.
          </Typography>

          <Typography variant="h5" sx={{ mb: 3, fontWeight: 600 }}>
            Professional Journey
          </Typography>
          <Typography variant="body1" sx={{ color: 'text.secondary', lineHeight: 1.8 }}>
            With 7 years of dedicated experience in academia, I currently serve as an Assistant Professor in the Department of Information Technology at Sasi Institute of Technology and Engineering (Autonomous), Tadepalligudem. Ratified by JNTUK, Kakinada in 2022, I bring a wealth of knowledge in Python Programming, Database Management Systems, and Software Engineering.
          </Typography>
        </Paper>

        <Box sx={{ mt: 4, display: 'grid', gridTemplateColumns: { xs: '1fr', md: '1fr 1fr' }, gap: 3 }}>
          <Paper className="about-item" elevation={0} sx={{ p: 3, bgcolor: 'background.paper', borderRadius: 3 }}>
            <Typography variant="h6" sx={{ mb: 2, fontWeight: 600 }}>
              Areas of Interest
            </Typography>
            <Typography variant="body2" sx={{ color: 'text.secondary', lineHeight: 1.8 }}>
              Python Programming • Soft Skills Development • C++ Programming • C Programming • Database Systems • Software Engineering
            </Typography>
          </Paper>

          <Paper className="about-item" elevation={0} sx={{ p: 3, bgcolor: 'background.paper', borderRadius: 3 }}>
            <Typography variant="h6" sx={{ mb: 2, fontWeight: 600 }}>
              Software Expertise
            </Typography>
            <Typography variant="body2" sx={{ color: 'text.secondary', lineHeight: 1.8 }}>
              PyCharm • Python • Scilab • Oracle • Database Management Tools
            </Typography>
          </Paper>
        </Box>
      </Container>
    </Box>
  );
};
