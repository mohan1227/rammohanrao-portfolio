import { Box, Typography, Container, Paper } from '@mui/material';
import { WorkOutline } from '@mui/icons-material';
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const experiences = [
  {
    title: 'Assistant Professor',
    organization: 'Sasi Institute of Technology and Engineering (A)',
    location: 'Tadepalligudem',
    period: 'June 2019 - Present',
    description: 'Ratified as Assistant Professor of Information Technology by JNTUK, Kakinada in 2022. Teaching undergraduate students and conducting research in Python Programming and Database Systems.',
  },
  {
    title: 'Assistant Professor',
    organization: 'A1 Global Institute of Engineering And Technology',
    location: 'Markapur',
    period: 'October 2018 - May 2019',
    description: 'Taught Computer Science and Engineering courses to undergraduate students.',
  },
  {
    title: 'Assistant Professor',
    organization: 'USHA RAMA College of Engineering And Technology',
    location: 'Telaprolu',
    period: 'June 2016 - October 2018',
    description: 'Taught Information Technology courses and managed multiple lab sessions including Python, C++, and Database Management Systems.',
  },
];

export const Experience = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (sectionRef.current) {
      const items = sectionRef.current.querySelectorAll('.experience-item');
      items.forEach((item) => {
        gsap.fromTo(
          item,
          { x: -50, opacity: 0 },
          {
            x: 0,
            opacity: 1,
            duration: 0.8,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: item,
              start: 'top 85%',
            },
          }
        );
      });
    }
  }, []);

  return (
    <Box id="experience" ref={sectionRef} sx={{ py: 10, bgcolor: 'background.default' }}>
      <Container maxWidth="lg">
        <Typography variant="h2" sx={{ mb: 2, textAlign: 'center' }}>
          Work Experience
        </Typography>
        <Box sx={{ width: 60, height: 4, bgcolor: 'primary.main', mx: 'auto', mb: 6 }} />

        <Box sx={{ position: 'relative' }}>
          <Box
            sx={{
              position: 'absolute',
              left: { xs: 20, md: '50%' },
              top: 0,
              bottom: 0,
              width: 2,
              bgcolor: 'primary.main',
              transform: { md: 'translateX(-50%)' },
            }}
          />

          {experiences.map((exp, index) => (
            <Box
              key={index}
              className="experience-item"
              sx={{
                position: 'relative',
                mb: 6,
                pl: { xs: 6, md: 0 },
              }}
            >
              <Box
                sx={{
                  display: { xs: 'block', md: 'grid' },
                  gridTemplateColumns: { md: '1fr 1fr' },
                  gap: 4,
                }}
              >
                <Box sx={{ display: { xs: 'none', md: 'block' }, textAlign: index % 2 === 0 ? 'right' : 'left', order: index % 2 === 0 ? 1 : 2 }} />
                <Paper
                  elevation={0}
                  sx={{
                    p: 3,
                    bgcolor: 'background.paper',
                    borderRadius: 3,
                    order: { md: index % 2 === 0 ? 2 : 1 },
                    position: 'relative',
                  }}
                >
                  <Box
                    sx={{
                      position: 'absolute',
                      left: { xs: -26, md: index % 2 === 0 ? -26 : 'auto' },
                      right: { md: index % 2 === 0 ? 'auto' : -26 },
                      top: 20,
                      width: 48,
                      height: 48,
                      borderRadius: '50%',
                      background: 'linear-gradient(135deg, #8b5cf6 0%, #06b6d4 100%)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: 'white',
                    }}
                  >
                    <WorkOutline />
                  </Box>
                  <Typography variant="h6" sx={{ fontWeight: 600, mb: 1 }}>
                    {exp.title}
                  </Typography>
                  <Typography variant="subtitle1" sx={{ color: 'primary.main', mb: 0.5 }}>
                    {exp.organization}
                  </Typography>
                  <Typography variant="body2" sx={{ color: 'text.secondary', mb: 2 }}>
                    {exp.location} • {exp.period}
                  </Typography>
                  <Typography variant="body2" sx={{ color: 'text.secondary', lineHeight: 1.7 }}>
                    {exp.description}
                  </Typography>
                </Paper>
              </Box>
            </Box>
          ))}
        </Box>
      </Container>
    </Box>
  );
};
