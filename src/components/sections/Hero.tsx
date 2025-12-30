import { Download, Mail } from "@mui/icons-material";
import { Box, Button, Container, Typography } from "@mui/material";
import { gsap } from "gsap";
import { useEffect, useRef } from "react";

export const Hero = () => {
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (heroRef.current) {
      const tl = gsap.timeline();
      tl.fromTo(
        ".hero-title",
        { y: 50, opacity: 0 },
        { y: 0, opacity: 1, duration: 1, ease: "power3.out" }
      )
        .fromTo(
          ".hero-subtitle",
          { y: 30, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.8, ease: "power3.out" },
          "-=0.5"
        )
        .fromTo(
          ".hero-description",
          { y: 20, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.8, ease: "power3.out" },
          "-=0.5"
        )
        .fromTo(
          ".hero-buttons",
          { y: 20, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.8, ease: "power3.out" },
          "-=0.5"
        )
        .fromTo(
          ".hero-image",
          { x: 50, opacity: 0 },
          { x: 0, opacity: 1, duration: 1, ease: "power3.out" },
          "-=0.8"
        );
    }
  }, []);

  return (
    <Box
      id="hero"
      ref={heroRef}
      sx={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        position: "relative",
        overflow: "hidden",
        "&::before": {
          content: '""',
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: (theme) =>
            theme.palette.mode === "dark"
              ? "radial-gradient(circle at 20% 50%, rgba(139, 92, 246, 0.15) 0%, transparent 50%), radial-gradient(circle at 80% 80%, rgba(6, 182, 212, 0.15) 0%, transparent 50%)"
              : "radial-gradient(circle at 20% 50%, rgba(124, 58, 237, 0.1) 0%, transparent 50%), radial-gradient(circle at 80% 80%, rgba(8, 145, 178, 0.1) 0%, transparent 50%)",
          pointerEvents: "none",
        },
      }}>
      <Container maxWidth="lg" sx={{ position: "relative", zIndex: 1 }}>
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            alignItems: "center",
            gap: 6,
          }}>
          <Box sx={{ flex: 1, maxWidth: { xs: "100%", md: 600 } }}>
            <Typography
              variant="h5"
              className="hero-subtitle"
              sx={{ color: "primary.main", mb: 2, fontWeight: 500 }}>
              Hello, I'm
            </Typography>
            <Typography
              variant="h1"
              className="hero-title"
              sx={{ mb: 2, fontSize: { xs: "2.5rem", md: "3.5rem" } }}>
              Rama Mohana Rao Konakalla
            </Typography>
            <Typography
              variant="h4"
              className="hero-description"
              sx={{
                mb: 4,
                color: "text.secondary",
                fontSize: { xs: "1.25rem", md: "1.75rem" },
                fontWeight: 400,
              }}>
              Assistant Professor | Information Technology Educator
            </Typography>
            <Typography
              variant="body1"
              className="hero-description"
              sx={{ mb: 4, color: "text.secondary", maxWidth: 600 }}>
              Passionate educator with 7+ years of experience in shaping future
              tech professionals. Specializing in Python, C++, and Database
              Management Systems at Sasi Institute of Technology and
              Engineering.
            </Typography>
            <Box
              className="hero-buttons"
              sx={{ display: "flex", gap: 2, flexWrap: "wrap" }}>
              <Button
                variant="contained"
                size="large"
                startIcon={<Download />}
                sx={{
                  background:
                    "linear-gradient(135deg, #8b5cf6 0%, #06b6d4 100%)",
                  px: 4,
                  py: 1.5,
                  fontSize: "1rem",
                  "&:hover": {
                    background:
                      "linear-gradient(135deg, #7c3aed 0%, #0891b2 100%)",
                    transform: "translateY(-2px)",
                    boxShadow: "0 8px 24px rgba(139, 92, 246, 0.3)",
                  },
                  transition: "all 0.3s ease",
                }}>
                Download Resume
              </Button>
              <Button
                variant="outlined"
                size="large"
                startIcon={<Mail />}
                onClick={() => {
                  const element = document.getElementById("contact");
                  if (element) {
                    gsap.to(window, {
                      duration: 1,
                      scrollTo: { y: element, offsetY: 70 },
                      ease: "power3.inOut",
                    });
                  }
                }}
                sx={{
                  px: 4,
                  py: 1.5,
                  fontSize: "1rem",
                  borderWidth: 2,
                  "&:hover": {
                    borderWidth: 2,
                    transform: "translateY(-2px)",
                  },
                  transition: "all 0.3s ease",
                }}>
                Contact Me
              </Button>
            </Box>
          </Box>

          <Box
            className="hero-image"
            sx={{
              flex: 1,
              display: "flex",
              justifyContent: "center",
              maxWidth: { xs: "100%", md: 450 },
            }}>
            <Box
              sx={{
                position: "relative",
                width: { xs: 320, sm: 400, md: 480 },
                height: { xs: 320, sm: 400, md: 480 },
                "&::before": {
                  content: '""',
                  position: "absolute",
                  top: -20,
                  left: -20,
                  right: 20,
                  bottom: 20,
                  background:
                    "linear-gradient(135deg, #8b5cf6 0%, #06b6d4 100%)",
                  borderRadius: "50%",
                  opacity: 0.2,
                  animation: "pulse 3s ease-in-out infinite",
                },
                "@keyframes pulse": {
                  "0%, 100%": { transform: "scale(1)" },
                  "50%": { transform: "scale(1.05)" },
                },
              }}>
              <Box
                component="img"
                src="/rammohan.png"
                alt="Rama Mohana Rao Konakalla"
                sx={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  borderRadius: "50%",
                  border: "6px solid",
                  borderColor: "background.paper",
                  boxShadow: (theme) =>
                    theme.palette.mode === "dark"
                      ? "0 20px 60px rgba(139, 92, 246, 0.4)"
                      : "0 20px 60px rgba(139, 92, 246, 0.3)",
                  position: "relative",
                  zIndex: 1,
                  transition: "transform 0.3s ease",
                  "&:hover": {
                    transform: "scale(1.05)",
                  },
                }}
              />
            </Box>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};
