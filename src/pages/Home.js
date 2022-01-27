import { useState } from "react";
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Form from "../components/Form";
import SkeletonLoader from "../components/SkeletonLoader";
import Quiz from "../components/Quiz";
import GameOver from "../components/GameOver";

const Home = () => {
    const [loading, setLoading] = useState(false)
    const [gameOver, setGameOver] = useState(false)
    const [quizData, setQuizData] = useState(null)
    const [scoreResult, setScoreResult] = useState(null)

    const theme = createTheme({
        palette: {
            primary: { main: '#685cd0', },
            secondary: { main: '#d274a9', },
        },
    });

    const handleQuizData = (data) => {
        setQuizData(data)
    }

    const handleLoading = () => setLoading(true)

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
                <Form
                    handleQuizData={handleQuizData}
                    handleLoading={handleLoading}
                />
            }
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