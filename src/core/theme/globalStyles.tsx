// material
import { useTheme } from "@mui/material/styles";
import { GlobalStyles as GlobalThemeStyles, alpha } from "@mui/material";

export default function GlobalStyles() {
  const theme = useTheme();

  return (
    <GlobalThemeStyles
      styles={{
        "*": {
          margin: 0,
          padding: 0,
          boxSizing: "border-box",
        },
        html: {
          width: "100%",
          height: "100%",
          WebkitOverflowScrolling: "touch",
        },
        body: {
          width: "100%",
          height: "100%",
        },
        "#root": {
          width: "100%",
          height: "100%",
          "--toastify-toast-width": "579px",
        },
        input: {
          "&[type=number]": {
            MozAppearance: "textfield",
            "&::-webkit-outer-spin-button": {
              margin: 0,
              WebkitAppearance: "none",
            },
            "&::-webkit-inner-spin-button": {
              margin: 0,
              WebkitAppearance: "none",
            },
          },
        },
        textarea: {
          "&::-webkit-input-placeholder": {
            color: theme.palette.text.disabled,
          },
          "&::-moz-placeholder": {
            opacity: 1,
            color: theme.palette.text.disabled,
          },
          "&:-ms-input-placeholder": {
            color: theme.palette.text.disabled,
          },
          "&::placeholder": {
            color: theme.palette.text.disabled,
          },
        },
        ".navButton-hover": {
          color: alpha(theme.palette.primary.main, 0.5), // Background when suppress click
          "& .button-text": {
            color: "#636881", // Default text color within Typography
          },
          "&:hover": {
            backgroundColor: "transparent",
            "& .button-text": {
              color: "#FFF", // Change the text color on hover
            },
          },
        },

        img: { display: "block", maxWidth: "100%" },

        // Lazy Load Img
        ".blur-up": {
          WebkitFilter: "blur(5px)",
          filter: "blur(5px)",
          transition: "filter 400ms, -webkit-filter 400ms",
        },
        ".blur-up.lazyloaded ": {
          WebkitFilter: "blur(0)",
          filter: "blur(0)",
        },
        "& .Toastify__toast-container--top-right": {
          marginTop: "102px",
        },
      }}
    />
  );
}
