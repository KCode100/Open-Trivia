import { useState } from "react";
import LinearProgress from '@mui/material/LinearProgress';
import { Container, Grid, Stack } from "@mui/material";
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import GameOver from "./GameOver";
import Alert from "./Alert";

const Quiz = ({ quizData, reset }) => {
    const [currentQuestion, setCurrentQuestion] = useState(0)
    const [score, setScore] = useState(0)
    const percentage = (currentQuestion / quizData.length) * 100

    // handle answer btns
    const answerHandler = (choice) => {
        const nextQuestion = currentQuestion + 1;
        if (quizData[currentQuestion].correct_answer === choice) {
            setScore((prevState) => prevState + 1)
        }
        // setTimeout(() => {
        setCurrentQuestion(nextQuestion)
        // }, 1500);
    }

    return (
        <>
            <Container maxWidth="lg" sx={{ paddingTop: { xs: "20px", md: "60px" } }}>
                {currentQuestion < quizData.length &&
                    <>
                        <Grid container spacing={{ xs: 2, md: 3 }} sx={{ paddingBottom: 2 }}>
                            <Grid item item xs={12} sm={7}>
                                <Typography variant="h6" component="div" gutterBottom>
                                    {quizData[currentQuestion].category}
                                </Typography>
                            </Grid>
                            <Grid item item xs={12} sm={3}>
                                <Typography variant="h6" component="div" gutterBottom>
                                    Difficulty: {quizData[currentQuestion].difficulty}
                                </Typography>
                            </Grid>
                            <Grid item item xs={12} sm={2}>
                                <Typography variant="h6" component="div">Score: {score}</Typography>
                            </Grid>
                        </Grid>
                        <LinearProgress variant="determinate" value={percentage} sx={{ marginBottom: 4 }} />
                        <Typography pt={2} variant="h4" component="h2">
                            <span dangerouslySetInnerHTML={{ __html: quizData[currentQuestion].question }} />
                        </Typography>
                        <Stack sx={{ paddingTop: { xs: 4, md: 8 } }} spacing={{ xs: 1, sm: 2, md: 4 }} direction={{ xs: 'column', sm: 'row' }}>
                            {quizData[currentQuestion].choices.map(choice => (
                                <Button variant="contained" size="large" onClick={() => answerHandler(choice)} key={choice}>
                                    <span dangerouslySetInnerHTML={{ __html: choice }} />
                                </Button>
                            ))}
                        </Stack>
                        <Alert reset={reset} />
                    </>
                }
                {currentQuestion >= quizData.length && <GameOver reset={reset} score={score} length={quizData.length} />}
            </Container>
        </>
    );
}

export default Quiz;