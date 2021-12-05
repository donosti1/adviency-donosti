import { extendTheme } from "@chakra-ui/react";

export default extendTheme({
  styles: {
    global: {
      body: {
        backgroundColor: "white",
        color: "primary.500",
      },
    },
  },
  colors: {
    primary: {
      400: "hsl(216, 30%, 68%)",
      500: "hsl(256, 26%, 20%)",
    },
  },
  sizes: {
    container: {
      sm: "375px",
      md: "640px",
      xl: "1120px",
    },
  },
  fonts: {
    body: "Karla",
    heading: "Mountains of Christmas",
  },
  components: {
    Heading: {
      baseStyle: {
        color: "white",
      },
    },
    Input: {
      variants: {
        giftInput: {
          field: {
            bg: "white",
            color: "black",
            borderRadius: "full",
            fontSize: ["xs", "inherit"],
            _focus: {
              bg: "white",
            },
          },
        },
      },
    },
    Button: {
      baseStyle: {
        fontFamily: "Karla",
        height: 12,
        textTransform: "uppercase",
      },
      variants: {
        solid: {
          bg: "primary.400",
          color: "white",
          fontSize: "sm",
          fontWeight: "700",
          w: "auto",
          _hover: {
            bg: "primary.500",
            color: "white",
          },
        },
        outline: {
          borderColor: "primary.500",
          borderWidth: 2,
          borderRadius: 0,
          px: 8,
          _hover: {
            bg: "primary.500",
            color: "white",
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
  },
});
