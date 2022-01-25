import { NavLink, Outlet } from "react-router-dom";

// material ui
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Link from '@mui/material/Link';

function Copyright() {
    return (
        <Typography variant="body2" color="text.secondary">
            {'Copyright © '}
            <Link color="inherit" href="https://bykivi.com/">
                ByKivi
            </Link>{' '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    );
}

const Layout = () => {
    return (
        <>
            <nav>
                <ul>
                    <li><NavLink to="/" className={({ isActive }) => isActive ? "active-link" : undefined}>Home</NavLink></li>
                    <li><NavLink to="about" className={({ isActive }) => isActive ? "active-link" : undefined}>About</NavLink></li>
                </ul>
            </nav>
            <main><Outlet /></main>
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    minHeight: '100vh',
                }}
            >
                <CssBaseline />
                <Box
                    component="footer"
                    sx={{
                        py: 3,
                        px: 2,
                        mt: 'auto',
                        backgroundColor: (theme) =>
                            theme.palette.mode === 'light'
                                ? theme.palette.grey[200]
                                : theme.palette.grey[800],
                    }}
                >
                    <Container maxWidth="sm">
                        <Typography variant="body1">
                            <a href="https://github.com/KCode100/open-trivia-react-application" target="_blank" rel="noreferrer">View in GitHub</a>
                        </Typography>
                        <Copyright />
                    </Container>
                </Box>
            </Box>
        </>
    );
}

export default Layout;