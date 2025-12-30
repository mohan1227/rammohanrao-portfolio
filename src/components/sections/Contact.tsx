import { Email, LocationOn, Phone, Send } from "@mui/icons-material";
import {
  Box,
  Button,
  Container,
  Paper,
  TextField,
  Typography,
} from "@mui/material";
import Grid from "@mui/material/Grid";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

export const Contact = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!sectionRef.current) return;

    gsap.fromTo(
      sectionRef.current.querySelectorAll(".contact-item"),
      { y: 50, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        stagger: 0.15,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          once: true,
        },
      }
    );
  }, []);

  return (
    <Box
      id="contact"
      ref={sectionRef}
      sx={{ py: 10, bgcolor: "background.paper" }}
    >
      <Container maxWidth="lg">
        {/* Header */}
        <Typography
          variant="h2"
          className="contact-item"
          sx={{ mb: 2, textAlign: "center" }}
        >
          Get In Touch
        </Typography>

        <Box
          className="contact-item"
          sx={{
            width: 60,
            height: 4,
            bgcolor: "primary.main",
            mx: "auto",
            mb: 2,
          }}
        />

        <Typography
          variant="body1"
          className="contact-item"
          sx={{
            textAlign: "center",
            color: "text.secondary",
            mb: 6,
            maxWidth: 600,
            mx: "auto",
          }}
        >
          Feel free to reach out for collaborations, academic discussions, or any
          inquiries
        </Typography>

        {/* Content */}
        <Grid container spacing={4} alignItems="stretch">
          {/* Left column */}
          <Grid size={{ xs: 12, md: 4 }} sx={{ display: "flex" }}>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                gap: 3,
                width: "100%",
              }}
            >
              {/* Email */}
              <Paper
                className="contact-item"
                elevation={0}
                sx={{ p: 3, bgcolor: "background.default", borderRadius: 3 }}
              >
                <Box sx={{ display: "flex", alignItems: "center" }}>
                  <Box
                    sx={{
                      width: 48,
                      height: 48,
                      borderRadius: 2,
                      background:
                        "linear-gradient(135deg, #8b5cf6 0%, #06b6d4 100%)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      mr: 2,
                    }}
                  >
                    <Email sx={{ color: "white" }} />
                  </Box>
                  <Box>
                    <Typography variant="subtitle2" color="text.secondary">
                      Email
                    </Typography>
                    <Typography fontWeight={500}>
                      it.mohan@sasi.ac.in
                    </Typography>
                  </Box>
                </Box>
              </Paper>

              {/* Phone */}
              <Paper
                className="contact-item"
                elevation={0}
                sx={{ p: 3, bgcolor: "background.default", borderRadius: 3 }}
              >
                <Box sx={{ display: "flex", alignItems: "center" }}>
                  <Box
                    sx={{
                      width: 48,
                      height: 48,
                      borderRadius: 2,
                      background:
                        "linear-gradient(135deg, #8b5cf6 0%, #06b6d4 100%)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      mr: 2,
                    }}
                  >
                    <Phone sx={{ color: "white" }} />
                  </Box>
                  <Box>
                    <Typography variant="subtitle2" color="text.secondary">
                      Phone
                    </Typography>
                    <Typography fontWeight={500}>
                      +91 8247369846
                    </Typography>
                  </Box>
                </Box>
              </Paper>

              {/* Address */}
              <Paper
                className="contact-item"
                elevation={0}
                sx={{ p: 3, bgcolor: "background.default", borderRadius: 3 }}
              >
                <Box sx={{ display: "flex", alignItems: "center" }}>
                  <Box
                    sx={{
                      width: 48,
                      height: 48,
                      borderRadius: 2,
                      background:
                        "linear-gradient(135deg, #8b5cf6 0%, #06b6d4 100%)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      mr: 2,
                    }}
                  >
                    <LocationOn sx={{ color: "white" }} />
                  </Box>
                  <Box>
                    <Typography variant="subtitle2" color="text.secondary">
                      Address
                    </Typography>
                    <Typography fontWeight={500}>
                      Sasi Institute of Technology
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      Tadepalligudem, West Godavari, AP
                    </Typography>
                  </Box>
                </Box>
              </Paper>
            </Box>
          </Grid>

          {/* Right column */}
          <Grid size={{ xs: 12, md: 8 }} sx={{ display: "flex" }}>
            <Paper
              className="contact-item"
              elevation={0}
              sx={{
                p: 4,
                bgcolor: "background.default",
                borderRadius: 3,
                width: "100%",
                height: "100%",
                display: "flex",
                flexDirection: "column",
              }}
            >
              <Typography variant="h6" fontWeight={600} mb={3}>
                Send a Message
              </Typography>

              <Box
                component="form"
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  gap: 3,
                  flex: 1,
                }}
              >
                <TextField fullWidth label="Your Name" />
                <TextField fullWidth label="Your Email" type="email" />
                <TextField fullWidth label="Subject" />
                <TextField
                  fullWidth
                  label="Message"
                  multiline
                  minRows={8}
                  sx={{ flex: 1 }}
                />

                <Button
                  variant="contained"
                  size="large"
                  endIcon={<Send />}
                  sx={{
                    mt: "auto",
                    py: 1.5,
                    fontSize: "1rem",
                    background:
                      "linear-gradient(135deg, #8b5cf6 0%, #06b6d4 100%)",
                    transition: "all 0.3s ease",
                    "&:hover": {
                      background:
                        "linear-gradient(135deg, #7c3aed 0%, #0891b2 100%)",
                      transform: "translateY(-2px)",
                      boxShadow: "0 10px 28px rgba(139,92,246,0.35)",
                    },
                  }}
                >
                  Send Message
                </Button>
              </Box>
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};
