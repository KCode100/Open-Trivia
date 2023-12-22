import { Container, Button } from "@mui/material";
import AnchorLink from 'react-anchor-link-smooth-scroll'
import ArrowDown from './UI/ArrowDown'

const Why = () => {
    return (
        <Container maxWidth="false" id="why" className="container container--white">
            <Container maxWidth="lg" className="section-why">
                <div className="section-why__content">
                    <div>
                        <h2>Compete with your friends!</h2>
                        <h2>Strengthen your memory!</h2>
                        <h2>Assess your knowledge!</h2>
                    </div>
                    <AnchorLink href="#form" className="section-why__btn">
                        <Button variant="contained" size="large" type="submit" fullWidth>
                            Get started
                        </Button>
                    </AnchorLink>
                </div>
            </Container>
            <ArrowDown to="#open-trivia" color="secondary" />
        </Container>
    );
}

export default Why;