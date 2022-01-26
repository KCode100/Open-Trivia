import Form from "../components/Form";

import { createTheme, ThemeProvider } from '@mui/material/styles';
import { purple } from '@mui/material/colors';

const Home = () => {
    const theme = createTheme({
        palette: {
            primary: {
                // Purple and green play nicely together.
                main: purple[500],
            },
            secondary: {
                // This is green.A700 as hex.
                main: '#11cb5f',
            },
        },
    });
    return (
        // <ThemeProvider theme={theme}>
        <Form />
        // </ThemeProvider>
    );
}

export default Home;