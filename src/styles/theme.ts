import { extendTheme } from "@chakra-ui/react";

export const theme = extendTheme({
  colors: {
    yellow: {
      "800": "#FFBA08"
    },
    gray: {
      "0": "#FFFFFF",
      "100": "F5F8FA",
      "300": "#DADADA",
      "500": "#999999",
      "900": "#47585B"
    }
  },
  fonts: {
    heading: 'Poppins',
    body: 'Poppins',
  },
  styles: {
    globals: {
      body: {
        color: "gray.900"
      }
    }
  }
  
})