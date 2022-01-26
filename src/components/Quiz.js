import { useState } from "react";
import LinearProgress from '@mui/material/LinearProgress';
import { Container, Grid, Stack } from "@mui/material";
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

const Quiz = ({ quizData, reset }) => {
    const [currentQuestion, setCurrentQuestion] = useState(0)
    const [score, setScore] = useState(0)
    const percentage = currentQuestion / quizData.length * 100

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

    const [open, setOpen] = useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <>
            <Container maxWidth="lg">
                {currentQuestion < quizData.length &&
                    <>
                        <Grid container spacing={{ xs: 2, md: 3 }} sx={{
                            paddingBottom: {
                                xs: 4,
                                md: 8
                            }
                        }}>
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
                        <LinearProgress variant="determinate" value={percentage} />
                        <Typography pt={2} variant="h4" component="h2">
                            <span dangerouslySetInnerHTML={{ __html: quizData[currentQuestion].question }} />
                        </Typography>
                        <Stack sx={{
                            paddingTop: {
                                xs: 4,
                                md: 8
                            }
                        }} spacing={{ xs: 1, sm: 2, md: 4 }} direction={{ xs: 'column', sm: 'row' }}>
                            {quizData[currentQuestion].choices.map(choice => (
                                <Button variant="contained" size="large" onClick={() => answerHandler(choice)}
                                    key={choice}>
                                    <span
                                        dangerouslySetInnerHTML={{ __html: choice }}
                                    />
                                </Button>
                            ))}
                        </Stack>
                        <Box sx={{
                            paddingTop: {
                                xs: 4,
                                md: 8
                            }
                        }}>
                            <Button variant="outlined" onClick={handleClickOpen}>
                                Quit
                            </Button>
                        </Box>
                    </>
                }
                {currentQuestion >= quizData.length &&
                    <div className="game-over">
                        <span>{score}/ {quizData.length}</span>
                        <Button variant="contained" size="large" onClick={reset}>Play again</Button>
                    </div>
                }
                <div>
                    <Dialog
                        open={open}
                        onClose={handleClose}
                        aria-labelledby="alert-dialog-title"
                        aria-describedby="alert-dialog-description"
                    >
                        <DialogTitle id="alert-dialog-title">
                            {"Quit game?"}
                        </DialogTitle>
                        <DialogContent>
                            <DialogContentText id="alert-dialog-description">
                                Your current score will NOT be saved
                            </DialogContentText>
                        </DialogContent>
                        <DialogActions>
                            <Button onClick={handleClose}>Disagree</Button>
                            <Button onClick={reset} autoFocus>
                                Agree
                            </Button>
                        </DialogActions>
                    </Dialog>
                </div>
            </Container>
        </>
    );
}

export default Quiz;