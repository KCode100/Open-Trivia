import { useState } from "react";
import { createTheme, ThemeProvider } from '@mui/material/styles';

// COMPONENTS
import Form from "../components/Form";
import SkeletonLoader from "../components/SkeletonLoader";
import Quiz from "../components/Quiz";
import GameOver from "../components/GameOver";
import Why from "../components/Why";
import OpenTrivia from "../components/OpenTrivia";

// MATERIAL UI
import { Alert } from "@mui/material";

const Home = () => {
    const [loading, setLoading] = useState(false)
    const [gameOver, setGameOver] = useState(false)
    const [quizData, setQuizData] = useState(null)
    const [scoreResult, setScoreResult] = useState(null)
    const [error, setError] = useState(null)

    const theme = createTheme({
        palette: {
            primary: { main: '#685cd0', },
            secondary: { main: '#d274a9', },
        },
    });

    const handleQuizData = (data) => {
        setQuizData(data)
    }

    const handleLoading = (status) => setLoading(status)

    const handleError = () => setError("Error, please try again later")

    const handleGameOver = (scoreResult) => {
        setGameOver(true)
        setScoreResult(scoreResult)
    }

    const reset = () => {
        setQuizData(null)
        setLoading(false)
        setGameOver(false)
    }

    return (
        <ThemeProvider theme={theme}>
            {!loading && !quizData &&
                <>
                    <Form
                        handleQuizData={handleQuizData}
                        handleLoading={handleLoading}
                        handleError={handleError}
                    />
                    <Why />
                    <OpenTrivia />
                </>
            }
            {error && <Alert severity="error">{error}</Alert>}
            {loading && !quizData && <SkeletonLoader />}
            {quizData &&
                <Quiz
                    quizData={quizData}
                    reset={reset}
                    handleGameOver={handleGameOver}
                />
            }
            {gameOver &&
                <GameOver
                    scoreResult={scoreResult}
                    reset={reset}
                />}
        </ThemeProvider>
    );
}

export default Home;