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
      500: "#aa3a38",
      700: "#ee3a38",
    },
    secondary: {
      500: "#2f7336",
    },
  },
  fonts: {
    body: "Karla",
    heading: "Mountains of Christmas",
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
  },
});
