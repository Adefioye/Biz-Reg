import { createTheme } from "@material-ui/core/styles";

const actionButtonColor = "#5692e8";

export default createTheme({
  palette: {
    common: {
      purple: actionButtonColor,
    },
    secondary: {
      main: actionButtonColor,
    },
  },
  card: {
    background: "#0e1a2b",
  },
  typography: {
    h2: {
      fontFamily: "Roboto",
      color: "#ffffff",
      fontSize: "2rem",
      fontWeight: 700,
    },
    h3: {
      fontFamily: "Pacifico",
      textTransform: "none",
    },
    h4: {
      fontFamily: "Raleway",
      color: "#ffffff",
      fontSize: "1.5rem",
      fontWeight: 700,
    },
    h5: {
      fontFamily: "Raleway",
      color: "#c1d1e8",
      fontSize: "1.2rem",
    },
    h6: {
      fontFamily: "Raleway",
      color: "#ffffff",
      fontSize: "1rem",
    },
    body1: {
      fontFamily: "Raleway",
      color: "#c1d1e8",
    },
    button: {
      fontFamily: "Raleway",
      textTransform: "none",
      fontSize: "1rem",
    },
  },
  overrides: {
    MuiTextField: {
      root: {
        backgroundColor: "#182c47",
      },
    },
    MuiOutlinedInput: {
      root: {
        color: "#ffffff",
        backgroundColor: "#182c47",
      },
      // input: {
      //   "&$selected": {
      //     backgroundColor: "#182c47",
      //   },
      // },
    },
    MuiSelect: {
      select: {
        "&$selected": {
          backgroundColor: "#182c47",
        },
        "&$focus": {
          backgroundColor: "#182c47",
        },
      },
      iconOutlined: {
        color: "#ffffff",
      },
    },
    MuiCssBaseline: {
      "@global": {
        body: {
          background: "linear-gradient(to bottom, #081221, #03080f)",
          width: "100vw",
          height: "500vh", // This is just a hack to transmit the style to
          // business create and edit form
        },
      },
    },
    MuiSvgIcon: {
      root: {
        color: "#ffffff",
      },
    },
    MuiPaper: {
      root: {
        backgroundColor: "#0e1a2b",
      },
    },
  },
});
