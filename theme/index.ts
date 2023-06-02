import { extendTheme } from "@chakra-ui/react";
import { styles } from "./styles";
import { colors } from "./colors";
import { Button } from "./components/button";

export const theme = extendTheme({
  styles,
  colors,
  components: {
    Button,
  },
});
