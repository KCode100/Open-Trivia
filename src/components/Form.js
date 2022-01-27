import { useEffect, useState } from "react";
import { categories } from "../data/categories";
import Quiz from "./Quiz";
import SkeletonLoader from "./SkeletonLoader";
// material ui
import {
    Container,
    Stack,
    Box,
    Typography,
    Button,
    InputLabel,
    MenuItem,
    Paper,
    Alert,
    Select,
    TextField,
    FormControl
} from "@mui/material";

const Form = () => {
    const [numberOfQuestions, setNumberOfQuestions] = useState(null)
    const [category, setCategory] = useState("")
    const [difficulty, setDifficulty] = useState("")
    const [quizType, setQuizType] = useState("")
    const [error, setError] = useState(null)
    const [formSubmitted, setFormSubmitted] = useState(false)
    const [loading, setLoading] = useState(false)
    const [quizData, setQuizData] = useState(null)

    // collect form data
    const formHandler = (e) => {
        e.preventDefault()
        const form = e.target;
        setNumberOfQuestions(form.number.value)
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
                    if (json.response_code !== 0) {
                        throw new Error("Invalid parameter or session token")
                    }
                    // combine correct and incorrect answers and shuffle
                    json.results.forEach(question => {
                        const combined = [question.correct_answer, ...question.incorrect_answers]
                        question.choices = combined.sort(() => Math.random() - 0.5)
                    })
                    setQuizData(json.results)
                    console.log(json)
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

    const handleCategory = (event) => {
        setCategory(event.target.value);
    };

    const handleDifficulty = (event) => {
        setDifficulty(event.target.value);
    };

    const handleQuizType = (event) => {
        setQuizType(event.target.value);
    };

    return (
        <>
            {!quizData && !loading &&
                <div className="form-container">
                    <Container className="form" maxWidth="xs" sx={{
                        marginRight: { xs: "auto", md: "65%" },
                    }}>
                        {/* <Stack direction="row" flexWrap="wrap-reverse" gap={4}> */}
                        <Paper elevation={3}>
                            <Box p={4}>
                                <Typography variant="h3" component="h1" gutterBottom>
                                    Take a quiz
                                </Typography>
                                <form onSubmit={formHandler}>
                                    <Stack spacing={3}>
                                        <TextField type="number" name="number" inputProps={{ min: 1, max: 30 }} defaultValue={10} label="Number of Questions" fullWidth />
                                        <FormControl fullWidth>
                                            <InputLabel id="category">Category</InputLabel>
                                            <Select
                                                labelId="category"
                                                id="category"
                                                value={category}
                                                label="category"
                                                onChange={handleCategory}
                                            >
                                                {categories.map(category => (
                                                    <MenuItem value={category.id} key={category.id}>{category.name}</MenuItem>
                                                ))}
                                            </Select>
                                        </FormControl>
                                        <FormControl fullWidth>
                                            <InputLabel id="difficulty">Difficulty</InputLabel>
                                            <Select
                                                labelId="difficulty"
                                                id="difficulty"
                                                value={difficulty}
                                                label="Difficulty"
                                                onChange={handleDifficulty}
                                            >
                                                <MenuItem value={""}>Any difficulty</MenuItem>
                                                <MenuItem value={"easy"}>Easy</MenuItem>
                                                <MenuItem value={"medium"}>Medium</MenuItem>
                                                <MenuItem value={"hard"}>Hard</MenuItem>
                                            </Select>
                                        </FormControl>
                                        <FormControl fullWidth>
                                            <InputLabel id="type">Type</InputLabel>
                                            <Select
                                                labelId="type"
                                                id="type"
                                                value={quizType}
                                                label="type"
                                                onChange={handleQuizType}
                                            >
                                                <MenuItem value={""}>Any type</MenuItem>
                                                <MenuItem value={"multiple"}>Multiple Choice</MenuItem>
                                                <MenuItem value={"boolean"}>True / False</MenuItem>
                                            </Select>
                                        </FormControl>
                                        <Button variant="contained" size="large" type="submit" fullWidth>
                                            Start Quiz
                                        </Button>
                                        {error && <Alert severity="error">{error}</Alert>}
                                    </Stack>
                                </form>
                            </Box>
                        </Paper>
                    </Container>
                </div>
            }
            {loading && <SkeletonLoader />}
            {quizData && <Quiz quizData={quizData} reset={reset} />}
        </>
    );
}

export default Form;