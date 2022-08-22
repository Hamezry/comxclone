import { Route, Routes, useNavigate } from "react-router-dom"

const Unauthenticated = ({ signIn }) => {

    const navigate = useNavigate()

    return (
        <Routes>
            <Route path="/" element={<div>Landing Page</div>} />
            <Route path="/sign-in" element={<button onClick={() => {
                signIn()
                navigate('/')
            }}>Sign in</button>} />
        </Routes>
    )
}

export default Unauthenticated