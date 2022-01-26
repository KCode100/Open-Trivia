import { Container, Grid, Stack } from "@mui/material";
import Skeleton from '@mui/material/Skeleton';

const Loading = () => {
    return (
        <Container maxWidth="lg">
            <Grid container spacing={2} pb={4}>
                <Grid item item xs={9} md={7}>
                    <Skeleton animation="wave" variant="text" height={40} />
                </Grid>
                <Grid item item xs={7} md={3}>
                    <Skeleton animation="wave" variant="text" height={40} />

                </Grid>
                <Grid item item xs={7} md={2}>
                    <Skeleton animation="wave" variant="text" height={40} />
                </Grid>
            </Grid>
            <Skeleton animation="wave" variant="rectangular" height={5} />
            <Skeleton animation="wave" variant="text" width="60%"
                sx={{
                    height: {
                        xs: 160,
                        md: 80
                    }
                }} pt={2} />
            <Grid container spacing={1}>
                <Grid item item xs={12} md={4}>
                    <Skeleton animation="wave" variant="text" height={70} />
                </Grid>
                <Grid item item xs={12} md={4}>
                    <Skeleton animation="wave" variant="text" height={70} />
                </Grid>
                <Grid item item xs={12} md={4}>
                    <Skeleton animation="wave" variant="text" height={70} />
                </Grid>
            </Grid>
        </Container>
    );
}

export default Loading;