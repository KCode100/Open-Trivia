import { useEffect, useState } from "react";
import { Container, Grid, Stack } from "@mui/material";
import { motion } from 'framer-motion'
import LinearProgress from '@mui/material/LinearProgress';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
// COMPONENTS
import Alert from "./Alert";

const Quiz = ({ quizData, reset, handleGameOver }) => {
    const [currentQuestion, setCurrentQuestion] = useState(0)
    const [score, setScore] = useState(0)
    const percentage = (currentQuestion / quizData.length) * 100

    // handle answer btns
    const answerHandler = (choice) => {
        const nextQuestion = currentQuestion + 1;
        if (quizData[currentQuestion].correct_answer === choice) {
            setScore((prevState) => prevState + 1)
        }
        setCurrentQuestion(nextQuestion)
    }

    useEffect(() => {
        if (currentQuestion >= quizData.length) {
            const percentage = (score / quizData.length) * 100
            handleGameOver(percentage)
        }
    }, [currentQuestion])


    return (
        <>
            {currentQuestion < quizData.length &&
                <Container
                    maxWidth="lg"
                    sx={{ paddingTop: { xs: "20px", md: "60px" } }}>
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
                    <Typography
                        pt={2}
                        variant="h4">
                        <span dangerouslySetInnerHTML={{ __html: quizData[currentQuestion].question }} />
                    </Typography>
                    <Stack
                        sx={{ paddingTop: { xs: 4, md: 8 } }}
                        spacing={{ xs: 1, sm: 2, md: 4 }}
                        direction={{ xs: 'column', sm: 'row' }}>
                        {quizData[currentQuestion].choices.map((choice, i) => (
                            <Button
                                component={motion.button}
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: i * 0.1, type: "spring" }}
                                variant="contained"
                                size="large"
                                onClick={() => answerHandler(choice)} key={choice}>
                                <span dangerouslySetInnerHTML={{ __html: choice }} />
                            </Button>
                        ))}
                    </Stack>
                    <Alert reset={reset} />
                </Container>
            }
        </>
    );
}

export default Quiz;