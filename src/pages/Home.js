import Form from "../components/Form";

import { createTheme, ThemeProvider } from '@mui/material/styles';

const Home = () => {
    const theme = createTheme({
        palette: {
            primary: {
                main: '#685cd0',
            },
            secondary: {
                main: '#d274a9',
            },
        },
    });
    return (
        <ThemeProvider theme={theme}>
            <div className="home-banner">
                <Form />
            </div>
        </ThemeProvider>
    );
}

export default Home;