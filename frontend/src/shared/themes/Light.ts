import { createTheme } from "@mui/material"
import { blue, pink } from "@mui/material/colors"

export const LightTheme = createTheme({
    palette: {
        primary: {
            main: blue[700],
            dark: blue[800],
            light: blue[500],
            contrastText: "#ffffff",
        },
        secondary: {
            main: pink[700],
            dark: pink[800],
            light: pink[500],
            contrastText: "#ffffff",
        },
        background: {
            default: "#fafbfb",
            paper: "#ffffff",
        },
    },
})
