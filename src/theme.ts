import {extendTheme, theme} from '@chakra-ui/react';
import {mode} from '@chakra-ui/theme-tools';

export default extendTheme({
  config: {
    initialColorMode: 'light',
    useSystemColorMode: false,
  },
  colors: {
    primary: {
      500: "#aa3a38",
    },
  },
  fonts: {
    body: "Karla",
    heading: "Mountains of Christmas",
  },
  /* fontSizes: {
    sm: '0.95rem',
    xs: '0.9rem',
  },
  sizes: {
    container: {
      xl: '1265px',
    },
  },*/

  components: {
    Button: {
      baseStyle: {
        marginLeft: 8,
        padding: 4,
        backgroundColor: "black",
      },      
    },
  },
});
