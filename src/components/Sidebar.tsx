import {
  Brightness4,
  Brightness7,
  Close,
  Code,
  EmojiEvents,
  GitHub,
  Home,
  LinkedIn,
  Mail,
  Person,
  School,
  Twitter,
  Work,
} from "@mui/icons-material";
import {
  Box,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { gsap } from "gsap";
import { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { closeSidebar } from "../store/slices/sidebarSlice";
import { toggleTheme } from "../store/slices/themeSlice";
import { RootState } from "../store/store";

const menuItems = [
  { text: "Home", icon: <Home />, id: "hero" },
  { text: "About", icon: <Person />, id: "about" },
  { text: "Skills", icon: <Code />, id: "skills" },
  { text: "Projects", icon: <Work />, id: "projects" },
  { text: "Experience", icon: <Work />, id: "experience" },
  { text: "Education", icon: <School />, id: "education" },
  { text: "Publications", icon: <EmojiEvents />, id: "publications" },
  { text: "Contact", icon: <Mail />, id: "contact" },
];

const socialLinks = [
  { icon: <GitHub />, url: "https://github.com" },
  { icon: <LinkedIn />, url: "https://linkedin.com" },
  { icon: <Twitter />, url: "https://twitter.com" },
];

export const Sidebar = () => {
  const dispatch = useDispatch();
  const isOpen = useSelector((state: RootState) => state.sidebar.isOpen);
  const themeMode = useSelector((state: RootState) => state.theme.mode);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const listRef = useRef<HTMLUListElement>(null);

  useEffect(() => {
    if (listRef.current && isOpen) {
      const items = listRef.current.children;
      gsap.fromTo(
        items,
        { x: -50, opacity: 0 },
        { x: 0, opacity: 1, stagger: 0.1, duration: 0.5, ease: "power3.out" }
      );
    }
  }, [isOpen]);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      gsap.to(window, {
        duration: 1,
        scrollTo: { y: element, offsetY: 70 },
        ease: "power3.inOut",
      });
    }
    if (isMobile) {
      dispatch(closeSidebar());
    }
  };

  const drawerContent = (
    <Box
      sx={{
        width: 280,
        height: "100%",
        background:
          theme.palette.mode === "dark"
            ? "linear-gradient(180deg, #1e293b 0%, #0f172a 100%)"
            : "linear-gradient(180deg, #ffffff 0%, #f1f5f9 100%)",
        display: "flex",
        flexDirection: "column",
        position: "relative",
        "&::before": {
          content: '""',
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          height: "100%",
          background:
            "linear-gradient(135deg, rgba(139, 92, 246, 0.1) 0%, rgba(6, 182, 212, 0.1) 100%)",
          pointerEvents: "none",
        },
      }}>
      {isMobile && (
        <Box sx={{ display: "flex", justifyContent: "flex-end", p: 2 }}>
          <IconButton onClick={() => dispatch(closeSidebar())}>
            <Close />
          </IconButton>
        </Box>
      )}

      <Box sx={{ p: 3, textAlign: "center", position: "relative", zIndex: 1 }}>
        <Box
          sx={{
            width: 100,
            height: 100,
            borderRadius: "50%",
            background: "linear-gradient(135deg, #8b5cf6 0%, #06b6d4 100%)",
            margin: "0 auto 16px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: "2.5rem",
            fontWeight: "bold",
            color: "white",
          }}>
          KR
        </Box>
        <Box sx={{ fontSize: "1.25rem", fontWeight: 600 }}>Rama Mohana Rao</Box>
        <Box sx={{ fontSize: "0.875rem", color: "text.secondary", mt: 0.5 }}>
          Assistant Professor
        </Box>
      </Box>

      <List
        ref={listRef}
        sx={{ flex: 1, px: 2, position: "relative", zIndex: 1 }}>
        {menuItems.map((item) => (
          <ListItem key={item.text} disablePadding sx={{ mb: 1 }}>
            <ListItemButton
              onClick={() => scrollToSection(item.id)}
              sx={{
                borderRadius: 2,
                "&:hover": {
                  background:
                    "linear-gradient(135deg, rgba(139, 92, 246, 0.2) 0%, rgba(6, 182, 212, 0.2) 100%)",
                  transform: "translateX(8px)",
                  transition: "all 0.3s ease",
                },
              }}>
              <ListItemIcon sx={{ color: "primary.main", minWidth: 40 }}>
                {item.icon}
              </ListItemIcon>
              <ListItemText primary={item.text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>

      <Box
        sx={{
          p: 3,
          display: "flex",
          justifyContent: "center",
          gap: 2,
          position: "relative",
          zIndex: 1,
        }}>
        <IconButton
          color="inherit"
          onClick={() => dispatch(toggleTheme())}
          sx={{ mb: 0.5 }}>
          {themeMode === "dark" ? <Brightness7 /> : <Brightness4 />}
        </IconButton>
        <Box sx={{ display: "flex", justifyContent: "center", gap: 2 }}>
          {socialLinks.map((link, index) => (
            <IconButton
              key={index}
              href={link.url}
              target="_blank"
              sx={{
                color: "primary.main",
                "&:hover": {
                  transform: "translateY(-4px)",
                  transition: "all 0.3s ease",
                },
              }}>
              {link.icon}
            </IconButton>
          ))}
        </Box>
      </Box>
    </Box>
  );

  return (
    <>
      {isMobile ? (
        <Drawer
          anchor="left"
          open={isOpen}
          onClose={() => dispatch(closeSidebar())}>
          {drawerContent}
        </Drawer>
      ) : (
        <Box
          component="nav"
          sx={{
            width: 280,
            flexShrink: 0,
            position: "fixed",
            top: 0,
            left: 0,
            height: "100vh",
            zIndex: (theme) => theme.zIndex.drawer,
          }}>
          {drawerContent}
        </Box>
      )}
    </>
  );
};
