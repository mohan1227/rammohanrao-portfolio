import { Box, Typography, Button, Container } from '@mui/material';
import { Download, Mail } from '@mui/icons-material';
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

export const Hero = () => {
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (heroRef.current) {
      const tl = gsap.timeline();
      tl.fromTo(
        '.hero-title',
        { y: 50, opacity: 0 },
        { y: 0, opacity: 1, duration: 1, ease: 'power3.out' }
      )
        .fromTo(
          '.hero-subtitle',
          { y: 30, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.8, ease: 'power3.out' },
          '-=0.5'
        )
        .fromTo(
          '.hero-description',
          { y: 20, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.8, ease: 'power3.out' },
          '-=0.5'
        )
        .fromTo(
          '.hero-buttons',
          { y: 20, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.8, ease: 'power3.out' },
          '-=0.5'
        );
    }
  }, []);

  return (
    <Box
      id="hero"
      ref={heroRef}
      sx={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        position: 'relative',
        overflow: 'hidden',
        '&::before': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: (theme) =>
            theme.palette.mode === 'dark'
              ? 'radial-gradient(circle at 20% 50%, rgba(139, 92, 246, 0.15) 0%, transparent 50%), radial-gradient(circle at 80% 80%, rgba(6, 182, 212, 0.15) 0%, transparent 50%)'
              : 'radial-gradient(circle at 20% 50%, rgba(124, 58, 237, 0.1) 0%, transparent 50%), radial-gradient(circle at 80% 80%, rgba(8, 145, 178, 0.1) 0%, transparent 50%)',
          pointerEvents: 'none',
        },
      }}
    >
      <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
        <Box sx={{ maxWidth: 800 }}>
          <Typography variant="h5" className="hero-subtitle" sx={{ color: 'primary.main', mb: 2, fontWeight: 500 }}>
            Hello, I'm
          </Typography>
          <Typography variant="h1" className="hero-title" sx={{ mb: 2, fontSize: { xs: '2.5rem', md: '3.5rem' } }}>
            Rama Mohana Rao Konakalla
          </Typography>
          <Typography
            variant="h4"
            className="hero-description"
            sx={{
              mb: 4,
              color: 'text.secondary',
              fontSize: { xs: '1.25rem', md: '1.75rem' },
              fontWeight: 400,
            }}
          >
            Assistant Professor | Information Technology Educator
          </Typography>
          <Typography variant="body1" className="hero-description" sx={{ mb: 4, color: 'text.secondary', maxWidth: 600 }}>
            Passionate educator with 7+ years of experience in shaping future tech professionals. Specializing in Python, C++, and Database Management Systems at Sasi Institute of Technology and Engineering.
          </Typography>
          <Box className="hero-buttons" sx={{ display: 'flex', gap: 2, flexWrap: 'wrap' }}>
            <Button
              variant="contained"
              size="large"
              startIcon={<Download />}
              sx={{
                background: 'linear-gradient(135deg, #8b5cf6 0%, #06b6d4 100%)',
                px: 4,
                py: 1.5,
                fontSize: '1rem',
                '&:hover': {
                  background: 'linear-gradient(135deg, #7c3aed 0%, #0891b2 100%)',
                  transform: 'translateY(-2px)',
                  boxShadow: '0 8px 24px rgba(139, 92, 246, 0.3)',
                },
                transition: 'all 0.3s ease',
              }}
            >
              Download Resume
            </Button>
            <Button
              variant="outlined"
              size="large"
              startIcon={<Mail />}
              onClick={() => {
                const element = document.getElementById('contact');
                if (element) {
                  gsap.to(window, {
                    duration: 1,
                    scrollTo: { y: element, offsetY: 70 },
                    ease: 'power3.inOut',
                  });
                }
              }}
              sx={{
                px: 4,
                py: 1.5,
                fontSize: '1rem',
                borderWidth: 2,
                '&:hover': {
                  borderWidth: 2,
                  transform: 'translateY(-2px)',
                },
                transition: 'all 0.3s ease',
              }}
            >
              Contact Me
            </Button>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};
