import { render } from "react-dom";
import {ChakraProvider} from "@chakra-ui/react";
import theme from './theme';

import App from "./app";

const rootElement = document.getElementById("root");
render(<ChakraProvider theme={theme}><App /></ChakraProvider>, rootElement);
