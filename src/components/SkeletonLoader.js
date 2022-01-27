import { Container, Grid } from "@mui/material";
import Skeleton from '@mui/material/Skeleton';

const SkeletonLoader = () => {
    return (
        <Container maxWidth="lg" sx={{ paddingTop: "60px" }}>
            <Grid container spacing={2} pb={2}>
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
                        md: 100
                    },
                    marginTop: 4,
                    marginBottom: 4
                }} />
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
            <Skeleton animation="wave" variant="text" width={100} height={70} />
        </Container>
    );
}

export default SkeletonLoader;