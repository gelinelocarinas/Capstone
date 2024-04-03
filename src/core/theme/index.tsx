import { useMemo } from "react";
import { CssBaseline } from "@mui/material";
import {
  ThemeProvider,
  createTheme,
  StyledEngineProvider,
} from "@mui/material/styles";
import GlobalStyles from "./globalStyles";
import shape from "./shape";
import typography from "./typography";
import breakpoints from "./breakpoints";
import shadows, { customShadows } from "./shadows";
import pelette from "./palette";

// @ts-ignore
function AppThemeConfig({ children }) {
  const themeOptions = useMemo(
    () => ({
      palette: {
        mode: "dark",
        // background: {
        //   default: pelette.light.common.black,
        //   main: pelette.light.common.black,
        // },
        primary: {
          main: pelette.light.primary.main,
        },
        secondary: {
          main: pelette.light.secondary.main,
        },
        ...pelette
      },
      shape,
      typography,
      breakpoints,
      shadows: shadows.dark,
      customShadows: customShadows.dark,
    }),
    []
  );

  // @ts-ignore
  const theme = createTheme(themeOptions);

  return (
    <StyledEngineProvider injectFirst>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <CssBaseline />
        {children}
      </ThemeProvider>
    </StyledEngineProvider>
  );
}

export default AppThemeConfig;
