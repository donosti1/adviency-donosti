import { extendTheme, theme } from "@chakra-ui/react";

export default extendTheme({
  styles: {
    global: {
      body: {
        color: "blackAlpha.900",
        backgroundColor: "black",
      },
    },
  },
  colors: {
    primary: {
      300: "hsl(176, 68%, 64%)",
      400: "hsl(198, 60%, 50%)",
      500: "hsl(0, 100%, 63%)",
    },
    secondary: {
      400: "hsl(219, 30%, 18%)",
      500: "hsl(217, 28%, 15%)",
      700: "hsl(218, 28%, 13%)",
      900: "hsl(216, 53%, 9%)",
    },
  },
  sizes: {
    container: {
      sm: "375px",
      md: "640px",
      xl: "1440px",
    },
  },
  fonts: {
    body: "Open Sans",
    heading: "Raleway",
    Menu: "Open Sans",
  },
  components: {
    Button: {
      baseStyle: {
        borderRadius: "full",
        fontFamily: "Open Sans",
        fontWeight: "400",
        height: 12,
      },
      variants: {
        "footer-link": {
          bg: "transparent",
          color: "white",
          h: 8,
          _hover: {
            fontWeight: "700",
          },
        },
        "header-link": {
          bg: "transparent",
          color: "white",
          fontFamily: "Raleway",
          w: 20,
          _hover: {
            textDecoration: "underline",
            fontWeight: "700",
          },
        },
        "header-button": {
          bg: "red",
          color: "white",
          h: 8,
          _hover: {
            textDecoration: "underline",
          },
        },
        "mobile-menu-link": {
          bg: "transparent",
          color: "primary.500",
          h: 8,
          _hover: {
            textDecoration: "underline",
          },
        },
        "mobile-menu-button": {
          bg: "linear-gradient(to right,hsl(13, 100%, 72%),hsl(353, 100%, 62%))",
          color: "white",
          fontWeight: "900",
          h: 12,
          px: 12,
          _hover: {
            textDecoration: "underline",
          },
        },
        link: {
          bg: "transparent",
          color: "white",
          width: 20,
          _hover: {
            fontWeight: "700",
          },
        },
        solid: {
          bg: "primary.400",
          color: "white",
          fontFamily: "Raleway",
          fontSize: "sm",
          fontWeight: "700",
          px: 12,
          _hover: {
            bg: "primary.300",
            color: "white",
          },
        },
        unstyled: {
          width: 28,
          color: "white",
          _hover: {
            fontWeight: "700",
            textDecoration: "underline",
          },
        },
        outline: {
          fontWeight: "700",
          color: "white",
          px: 8,
          _hover: {
            bg: "white",
            color: "primary.300",
          },
        },
      },
      sizes: {
        lg: {
          h: 14,
          minW: 12,
          fontSize: "lg",
          px: 10,
        },
      },
    },
    MenuButton: {
      baseStyle: {
        color: "white",
      },
    },
    MenuItem: {
      baseStyle: {
        /* px: "0.8rem", */
        _active: {
          color: "white",
          bg: "black",
        },
      },
    },
    /* Accordion: {
      baseStyle: {
        
        
      },
    }, */
  },
});
