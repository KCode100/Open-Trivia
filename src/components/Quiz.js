import { useState } from "react";
import { Link } from "react-router-dom";

const Quiz = ({ quizData, reset }) => {
    const [currentQuestion, setCurrentQuestion] = useState(0)
    const [score, setScore] = useState(0)

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
        </>

    );
}

export default Quiz;