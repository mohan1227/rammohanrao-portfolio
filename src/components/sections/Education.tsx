import { Box, Typography, Container, Paper } from '@mui/material';
import { School } from '@mui/icons-material';
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const education = [
  {
    degree: 'M.Tech in Computer Science & Engineering',
    institution: 'JNTUK, Kakinada',
    year: '2014-2016',
    specialization: 'Computer Science',
  },
  {
    degree: 'B.Tech in Information Technology',
    institution: 'JNTUK, Kakinada',
    year: '2008-2012',
    specialization: 'Information Technology',
  },
];

export const Education = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (sectionRef.current) {
      const items = sectionRef.current.querySelectorAll('.education-item');
      gsap.fromTo(
        items,
        { scale: 0.9, opacity: 0 },
        {
          scale: 1,
          opacity: 1,
          stagger: 0.2,
          duration: 0.8,
          ease: 'back.out(1.2)',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 80%',
          },
        }
      );
    }
  }, []);

  return (
    <Box id="education" ref={sectionRef} sx={{ py: 10, bgcolor: 'background.default' }}>
      <Container maxWidth="lg">
        <Typography variant="h2" sx={{ mb: 2, textAlign: 'center' }}>
          Education
        </Typography>
        <Box sx={{ width: 60, height: 4, bgcolor: 'primary.main', mx: 'auto', mb: 6 }} />

        <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', md: 'repeat(2, 1fr)' }, gap: 4, maxWidth: 900, mx: 'auto' }}>
          {education.map((edu, index) => (
            <Paper
              key={index}
              className="education-item"
              elevation={0}
              sx={{
                p: 4,
                bgcolor: 'background.paper',
                borderRadius: 3,
                position: 'relative',
                overflow: 'hidden',
                '&::before': {
                  content: '""',
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  width: 4,
                  height: '100%',
                  background: 'linear-gradient(180deg, #8b5cf6 0%, #06b6d4 100%)',
                },
              }}
            >
              <Box
                sx={{
                  width: 56,
                  height: 56,
                  borderRadius: 2,
                  background: 'linear-gradient(135deg, #8b5cf6 0%, #06b6d4 100%)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  mb: 2,
                }}
              >
                <School sx={{ color: 'white', fontSize: 32 }} />
              </Box>
              <Typography variant="h6" sx={{ fontWeight: 600, mb: 1 }}>
                {edu.degree}
              </Typography>
              <Typography variant="subtitle1" sx={{ color: 'primary.main', mb: 0.5 }}>
                {edu.institution}
              </Typography>
              <Typography variant="body2" sx={{ color: 'text.secondary', mb: 1 }}>
                {edu.year}
              </Typography>
              <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                Specialization: {edu.specialization}
              </Typography>
            </Paper>
          ))}
        </Box>
      </Container>
    </Box>
  );
};
