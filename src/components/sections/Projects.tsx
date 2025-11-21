import { Box, Typography, Container, Paper, Button, Chip } from '@mui/material';
import { Code, GitHub, Launch } from '@mui/icons-material';
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const projects = [
  {
    title: 'Stock Price Prediction System',
    description: 'Machine learning-based system for analyzing and predicting stock market trends using advanced algorithms.',
    tags: ['Python', 'Machine Learning', 'Data Analysis', 'Scikit-learn'],
    github: '#',
    demo: '#',
  },
  {
    title: 'Fake Account Detection',
    description: 'Random Forest algorithm implementation to detect fraudulent social media accounts with high accuracy.',
    tags: ['Python', 'Random Forest', 'Machine Learning', 'Data Mining'],
    github: '#',
    demo: '#',
  },
  {
    title: 'Air Quality Prediction',
    description: 'Supervised machine learning system for predicting air quality metrics in urban environments.',
    tags: ['Python', 'ML', 'Environmental Data', 'Regression'],
    github: '#',
    demo: '#',
  },
  {
    title: 'Keratoconus Detection',
    description: 'Medical diagnosis system using AdaBoost algorithm for early detection of keratoconus eye disease.',
    tags: ['Python', 'AdaBoost', 'Medical AI', 'Classification'],
    github: '#',
    demo: '#',
  },
  {
    title: 'Green IoT Enhancement',
    description: 'Research implementation for enhancing wireless sensor networks in IoT ecosystems for energy efficiency.',
    tags: ['IoT', 'Wireless Networks', 'Python', 'Research'],
    github: '#',
    demo: '#',
  },
  {
    title: 'Software Quality Forecasting',
    description: 'ML-based tool for predicting software quality metrics and identifying potential defects early.',
    tags: ['Python', 'Machine Learning', 'Software Engineering'],
    github: '#',
    demo: '#',
  },
];

export const Projects = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (sectionRef.current) {
      const items = sectionRef.current.querySelectorAll('.project-item');
      gsap.fromTo(
        items,
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          stagger: 0.15,
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
    <Box id="projects" ref={sectionRef} sx={{ py: 10, bgcolor: 'background.default' }}>
      <Container maxWidth="lg">
        <Typography variant="h2" sx={{ mb: 2, textAlign: 'center' }}>
          Research Projects
        </Typography>
        <Box sx={{ width: 60, height: 4, bgcolor: 'primary.main', mx: 'auto', mb: 6 }} />

        <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', md: 'repeat(2, 1fr)', lg: 'repeat(3, 1fr)' }, gap: 3 }}>
          {projects.map((project, index) => (
            <Paper
              key={index}
              className="project-item"
              elevation={0}
              sx={{
                p: 3,
                bgcolor: 'background.paper',
                borderRadius: 3,
                display: 'flex',
                flexDirection: 'column',
                transition: 'all 0.3s ease',
                '&:hover': {
                  transform: 'translateY(-8px)',
                  boxShadow: '0 12px 32px rgba(139, 92, 246, 0.2)',
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
                <Code sx={{ color: 'white', fontSize: 28 }} />
              </Box>
              <Typography variant="h6" sx={{ fontWeight: 600, mb: 1 }}>
                {project.title}
              </Typography>
              <Typography variant="body2" sx={{ color: 'text.secondary', mb: 2, flex: 1, lineHeight: 1.7 }}>
                {project.description}
              </Typography>
              <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, mb: 2 }}>
                {project.tags.map((tag, idx) => (
                  <Chip key={idx} label={tag} size="small" variant="outlined" />
                ))}
              </Box>
              <Box sx={{ display: 'flex', gap: 2 }}>
                <Button
                  variant="outlined"
                  size="small"
                  startIcon={<GitHub />}
                  href={project.github}
                  sx={{
                    flex: 1,
                    '&:hover': {
                      borderWidth: 2,
                    },
                  }}
                >
                  Code
                </Button>
                <Button
                  variant="contained"
                  size="small"
                  startIcon={<Launch />}
                  href={project.demo}
                  sx={{
                    flex: 1,
                    background: 'linear-gradient(135deg, #8b5cf6 0%, #06b6d4 100%)',
                    '&:hover': {
                      background: 'linear-gradient(135deg, #7c3aed 0%, #0891b2 100%)',
                    },
                  }}
                >
                  Demo
                </Button>
              </Box>
            </Paper>
          ))}
        </Box>
      </Container>
    </Box>
  );
};
