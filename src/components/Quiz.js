import { useState } from "react";
import LinearProgress from '@mui/material/LinearProgress';

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

    return (
        <>
            <LinearProgress variant="determinate" value={percentage} />
            {currentQuestion < quizData.length &&
                <div>
                    <h2>{quizData[currentQuestion].category}</h2>
                    <h3 dangerouslySetInnerHTML={{ __html: quizData[currentQuestion].question }} />
                    <p>Difficulty: {quizData[currentQuestion].difficulty}</p>
                    {quizData[currentQuestion].choices.map(choice => (
                        <button
                            dangerouslySetInnerHTML={{ __html: choice }}
                            onClick={() => answerHandler(choice)}
                            key={choice}
                        />
                    ))}
                </div>
            }
            <div>Score: {score} / {quizData.length}</div>
            {currentQuestion >= quizData.length &&
                <button onClick={reset}>Replay</button>
            }
            <button>Restart (material ui alert here...)</button>
        </>
    );
}

export default Quiz;