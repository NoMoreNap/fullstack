import { createTheme } from "@mui/material/styles";

export const theme = createTheme({
    palette: {
        primary: {
            main: "#fff",
        },
        success: {
            main: '#4caf50',
            light: '#4caf50',
            dark: '#6a9b24',
            contrastText: '#4caf50'
        },
        text: {
            primary: '#fff',
            secondary: "#888",
        },
    },
    components: {
        MuiButton: {
            styleOverrides: {
                root: {
                    backgroundColor: '#777',
                    ":hover": {
                        backgroundColor: '#666'
                    }
                },
            }
        },
        MuiSnackbar: {
            styleOverrides: {
                root: {
                    backgroundColor: '#4caf50'
                }
            }
        },
        MuiAlert: {
            styleOverrides: {
                root: {
                    backgroundColor: '#4caf50'
                },
            }

        }
    }
});
