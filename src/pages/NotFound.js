import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const NotFound = () => {
    const navigate = useNavigate()

    useEffect(() => {
        setTimeout(() => {
            navigate('/quiz')
        }, 2000);
    })

    return (
        <>
            <h1>404! Sorry, page not found!</h1>
            <p>Redirecting to Home page</p>
        </>
    );
}

export default NotFound;