import { Link, Outlet } from "react-router-dom";
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
                <Link to='/'>
                    <Typography variant="h4" component={"div"} sx={{ fontWeight: 700, margin: "21px" }}>
                        Kwizz
                    </Typography>
                </Link>
                <main className="main"><Outlet /></main>
            </Container>
            <Footer />
        </>
    );
}

export default Layout;