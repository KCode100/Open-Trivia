import { Container, Button, useTheme } from "@mui/material";
import AnchorLink from 'react-anchor-link-smooth-scroll'

const OpenTrivia = () => {
    const theme = useTheme()
    return (
        <Container id="open-trivia" maxWidth="lg" className="container section-open-trivia">
            <div className="section-open-trivia__content">
                <div>
                    <h2>Why Open Trivia API</h2>
                </div>
                <ul>
                    <li>spread of categories</li>
                    <li>umlimited free use</li>
                    <li>4,000+ verified question</li>
                    <li>user-contributed trivia question database</li>
                    <li>great API documentation</li>
                </ul>
                <AnchorLink href="#form" className="section-open-trivia__btn">
                    <Button variant="contained" size="large" type="submit" fullWidth>
                        Get started
                    </Button>
                </AnchorLink>
            </div>
        </Container>
    );
}

export default OpenTrivia;