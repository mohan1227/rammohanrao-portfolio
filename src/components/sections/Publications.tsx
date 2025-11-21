import { Box, Typography, Container, Paper, Chip } from '@mui/material';
import { Article } from '@mui/icons-material';
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const publications = [
  {
    title: 'Stock Price Analysis and Prediction Using Machine Learning: A Research Study',
    journal: 'Journal of Xidian University',
    year: '2024',
    volume: '18-04',
    impact: '5.4',
    indexing: 'UGC-CARE Group II',
  },
  {
    title: 'Forecast Software Quality using Machine Learning',
    journal: 'IJNRD',
    year: '2024',
    volume: '9, a21',
    impact: '8.76',
    indexing: 'UGC-CARE Group II',
  },
  {
    title: 'Detecting Fake Accounts by Using Random Forest Algorithm Through Machine Learning',
    journal: 'Journal Of Engineering Computing and Architecture',
    year: '2022',
    volume: '12',
    impact: '6.1',
    indexing: 'UGC-CARE Group II',
  },
  {
    title: 'Detection Of Keratoconus Using Adaboost Algorithm',
    journal: 'Journal Of Engineering Computing and Architecture',
    year: '2022',
    volume: '12',
    impact: '6.1',
    indexing: 'UGC-CARE Group II',
  },
  {
    title: 'Some Studies on Enhancement of Wireless Sensor Networks for Green IoT',
    journal: 'Journal of Emerging Technologies and Innovative Research (JETIR)',
    year: '2021',
    volume: '17',
    impact: '7.95',
    indexing: 'UGC Journal',
  },
  {
    title: 'Air Quality Prediction Using Supervised Machine Learning Technique',
    journal: 'Journal of Shanghai University of Science and Technology',
    year: '2021',
    volume: '23',
    impact: '2.1',
    indexing: 'UGC-CARE Group II',
  },
];

export const Publications = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (sectionRef.current) {
      const items = sectionRef.current.querySelectorAll('.publication-item');
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
    <Box id="publications" ref={sectionRef} sx={{ py: 10, bgcolor: 'background.paper' }}>
      <Container maxWidth="lg">
        <Typography variant="h2" sx={{ mb: 2, textAlign: 'center' }}>
          Publications
        </Typography>
        <Box sx={{ width: 60, height: 4, bgcolor: 'primary.main', mx: 'auto', mb: 2 }} />
        <Typography variant="body1" sx={{ textAlign: 'center', color: 'text.secondary', mb: 6, maxWidth: 600, mx: 'auto' }}>
          Research contributions in Machine Learning, IoT, and Software Engineering
        </Typography>

        <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', md: 'repeat(2, 1fr)' }, gap: 3 }}>
          {publications.map((pub, index) => (
            <Paper
              key={index}
              className="publication-item"
              elevation={0}
              sx={{
                p: 3,
                bgcolor: 'background.default',
                borderRadius: 3,
                border: '1px solid',
                borderColor: 'divider',
                transition: 'all 0.3s ease',
                '&:hover': {
                  transform: 'translateY(-4px)',
                  boxShadow: '0 8px 24px rgba(139, 92, 246, 0.2)',
                },
              }}
            >
              <Box sx={{ display: 'flex', alignItems: 'flex-start', mb: 2 }}>
                <Box
                  sx={{
                    width: 40,
                    height: 40,
                    borderRadius: 2,
                    background: 'linear-gradient(135deg, #8b5cf6 0%, #06b6d4 100%)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    mr: 2,
                    flexShrink: 0,
                  }}
                >
                  <Article sx={{ color: 'white' }} />
                </Box>
                <Typography variant="h6" sx={{ fontWeight: 600, lineHeight: 1.3 }}>
                  {pub.title}
                </Typography>
              </Box>
              <Typography variant="body2" sx={{ color: 'primary.main', mb: 1, fontWeight: 500 }}>
                {pub.journal}
              </Typography>
              <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, mb: 2 }}>
                <Chip label={`Year: ${pub.year}`} size="small" variant="outlined" />
                <Chip label={`Vol: ${pub.volume}`} size="small" variant="outlined" />
                <Chip label={`IF: ${pub.impact}`} size="small" color="primary" />
              </Box>
              <Chip label={pub.indexing} size="small" sx={{ bgcolor: 'success.main', color: 'white' }} />
            </Paper>
          ))}
        </Box>
      </Container>
    </Box>
  );
};
