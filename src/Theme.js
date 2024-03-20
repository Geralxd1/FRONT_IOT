import { createTheme } from '@mui/material/styles';
const theme = createTheme({
    palette: {
        primary: {
            main: '#1976d2',
        },
        secondary: {
            main: '#4caf50',
            contrastText: 'rgba(255,255,255,0.87)',
        },
        background: {
            paper: '#F5F5F5',
            default: '#ffffff',
        },
        divider: '#6f7ece',
        text: {
            primary: '#333333',
            secondary: '#808080',
        },
        error: {
            main: '#f44336',
        },
    },
    shape: {
        borderRadius: 4,
    },
});

export default theme;