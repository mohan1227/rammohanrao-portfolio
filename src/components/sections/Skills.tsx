import { Box, Typography, Container, Paper, LinearProgress, Chip } from '@mui/material';
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const skillsData = [
  { name: 'Python Programming', level: 95 },
  { name: 'C++ Programming', level: 90 },
  { name: 'C Programming', level: 90 },
  { name: 'Database Management Systems', level: 92 },
  { name: 'Software Engineering', level: 88 },
  { name: 'Unix & Shell Programming', level: 85 },
];

const subjects = [
  'Python Programming',
  'C Programming',
  'C++ Programming',
  'Database Management System',
  'Unix and Shell Programming',
  'Operating System',
  'Software Engineering',
  'Information Retrieval Systems',
  'E-Commerce',
  'Human Computer Interaction',
  'Software Testing Methodologies',
];

export const Skills = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (sectionRef.current) {
      gsap.fromTo(
        sectionRef.current.querySelectorAll('.skill-item'),
        { x: -50, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          stagger: 0.1,
          duration: 0.8,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 80%',
          },
        }
      );

      const progressBars = sectionRef.current.querySelectorAll('.skill-progress');
      progressBars.forEach((bar) => {
        gsap.fromTo(
          bar,
          { width: 0 },
          {
            width: '100%',
            duration: 1.5,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: bar,
              start: 'top 90%',
            },
          }
        );
      });
    }
  }, []);

  return (
    <Box id="skills" ref={sectionRef} sx={{ py: 10, bgcolor: 'background.paper' }}>
      <Container maxWidth="lg">
        <Typography variant="h2" className="skill-item" sx={{ mb: 2, textAlign: 'center' }}>
          Skills & Expertise
        </Typography>
        <Box className="skill-item" sx={{ width: 60, height: 4, bgcolor: 'primary.main', mx: 'auto', mb: 6 }} />

        <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', md: '1fr 1fr' }, gap: 4, mb: 6 }}>
          {skillsData.map((skill, index) => (
            <Box key={index} className="skill-item">
              <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
                <Typography variant="body1" sx={{ fontWeight: 500 }}>
                  {skill.name}
                </Typography>
                <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                  {skill.level}%
                </Typography>
              </Box>
              <Box sx={{ position: 'relative', height: 8, bgcolor: 'action.hover', borderRadius: 1, overflow: 'hidden' }}>
                <Box
                  className="skill-progress"
                  sx={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    height: '100%',
                    width: `${skill.level}%`,
                    background: 'linear-gradient(90deg, #8b5cf6 0%, #06b6d4 100%)',
                    borderRadius: 1,
                  }}
                />
              </Box>
            </Box>
          ))}
        </Box>

        <Paper className="skill-item" elevation={0} sx={{ p: 4, bgcolor: 'background.default', borderRadius: 3 }}>
          <Typography variant="h5" sx={{ mb: 3, fontWeight: 600 }}>
            Subjects Taught
          </Typography>
          <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1.5 }}>
            {subjects.map((subject, index) => (
              <Chip
                key={index}
                label={subject}
                sx={{
                  bgcolor: 'primary.main',
                  color: 'white',
                  fontWeight: 500,
                  '&:hover': {
                    bgcolor: 'primary.dark',
                    transform: 'translateY(-2px)',
                  },
                  transition: 'all 0.3s ease',
                }}
              />
            ))}
          </Box>
        </Paper>
      </Container>
    </Box>
  );
};
