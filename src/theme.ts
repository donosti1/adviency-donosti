import { extendTheme } from "@chakra-ui/react";

export default extendTheme({
  styles: {
    global: {
      body: {
        color: "whiteAlpha.900",
        backgroundColor: "primary.500",
      },
    },
  },
  colors: {
    primary: {
      100: "#009ffd",
      500: "#2a2a72",
    },
    secondary: {
      100: "#aa3a38",
      500: "#2f7336",
    },
  },
  fonts: {
    body: "Karla",
    heading: "MonteCarlo",
  },
  components: {
    Button: {
      baseStyle: {
        borderRadius: "full",
        fontWeight: "700",
        height: 12,
      },
      variants: {
        solid: {
          bg: "primary.500",
          color: "white",
          fontSize: "sm",
          px: 6,
          _hover: {
            bg: "secondary.500",
          },
        },
      },
    },
    /* Heading: {
      baseStyle: {
        marginTop: 0,
      },
    }, */
  },
});
