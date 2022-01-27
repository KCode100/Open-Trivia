import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import DialMenu from "./DialMenu";

// material ui
import Container from '@mui/material/Container';
import { Typography } from "@mui/material";

const Layout = () => {
    return (
        <>
            <Container maxWidth="xl">
                <DialMenu />
                <Typography variant="h4" component={"div"} sx={{ fontWeight: 700, margin: { xs: "20px", md: "40px" } }}>
                    <a href="mailto:kivi.webdev@gmail.com" target="_blank" rel="noreferrer">
                        Get in touch
                    </a>
                </Typography>
            </Container>
            <main className="main"><Outlet /></main>
            <Footer />
        </>
    );
}

export default Layout;