import { useEffect, useState } from "react";
import { categories } from "../data/categories";
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
import Quiz from "./Quiz";

const Form = () => {
    const [numberOfQuestions, setNumberOfQuestions] = useState(null)
    const [category, setCategory] = useState(null)
    const [difficulty, setDifficulty] = useState(null)
    const [quizType, setQuizType] = useState(null)
    const [error, setError] = useState(null)
    const [formSubmitted, setFormSubmitted] = useState(null)
    const [loading, setLoading] = useState(false)
    const [quizData, setQuizData] = useState(null)

    // collect form data
    const formHandler = (e) => {
        e.preventDefault()
        const form = e.target;
        setNumberOfQuestions(form.number.value)
        setCategory(form.category.value)
        setDifficulty(form.difficulty.value)
        setQuizType(form.type.value)
        setFormSubmitted(true)
    }

    useEffect(() => {
        if (formSubmitted) {
            const getData = async () => {
                setLoading(true)
                try {
                    const fetchToken = await fetch('https://opentdb.com/api_token.php?command=request')
                    const token = await fetchToken.json()
                    const data = await fetch(`https://opentdb.com/api.php?category=${category}&amount=${numberOfQuestions}&difficulty=${difficulty}&type=${quizType}&token=${token.token}`)
                    const json = await data.json()
                    setLoading(false)
                    if (json.response_code === 1) {
                        setError("The API doesn't have enough questions for your query. (Ex. Asking for 50 Questions in a Category that only has 20.")
                    }
                    if (json.response_code === 2) {
                        throw new Error("Code 2: Invalid Parameter Contains an invalid parameter. Arguements passed in aren't valid. (Ex. Amount = Five)")
                    }
                    if (json.response_code === 3) {
                        throw new Error("Code 3: Token Not Found Session Token does not exist.")
                    }
                    if (json.response_code === 4) {
                        throw new Error("Code 4: Token Empty Session Token has returned all possible questions for the specified query. Resetting the Token is necessary.")
                    }
                    // combine correct and incorrect answers and shuffle
                    json.results.forEach(question => {
                        const combined = [question.correct_answer, ...question.incorrect_answers]
                        question.choices = combined.sort(() => Math.random() - 0.5)
                    })
                    setQuizData(json.results)
                    console.log(json.results)
                } catch (err) {
                    setLoading(false)
                    setError("Error, please try again later")
                    console.log(err)
                }
            }
            getData()
        }
    }, [formSubmitted])

    const reset = () => {
        setFormSubmitted(null)
        setQuizData(null)
    }

    return (
        <>
            {!quizData && !loading &&
                <>
                    <h1>Let's get started!</h1>
                    <form onSubmit={formHandler}>
                        <div>
                            <label htmlFor="numberOfQuestions">Number of Questions:</label>
                            <input type="number" id="numberOfQuestions" name="number" defaultValue="10" max="30" />
                        </div>
                        <div>
                            <select name="category" id="category">
                                {categories.map(category => (
                                    <option value={category.urlID} key={category.urlID}>{category.name}</option>
                                ))}
                            </select>
                        </div>
                        <div>
                            <select name="difficulty" id="difficulty">
                                <option value="">Any difficulty</option>
                                <option value="easy">Easy</option>
                                <option value="medium">Medium</option>
                                <option value="hard">Hard</option>
                            </select>
                        </div>
                        <div>
                            <select name="type" id="type">
                                <option value="">Any type</option>
                                <option value="multiple">Multiple Choice</option>
                                <option value="boolean">True/False</option>
                            </select>
                        </div>
                        <div>
                            <button type="submit">Generate Quiz!</button>
                        </div>
                    </form>
                    {error && <p>{error}</p>}
                </>
            }
            {loading &&
                <Box sx={{ display: 'flex' }}>
                    <CircularProgress />
                </Box>
            }
            {quizData &&
                <Quiz quizData={quizData} reset={reset} />
            }
        </>
    );
}

export default Form;