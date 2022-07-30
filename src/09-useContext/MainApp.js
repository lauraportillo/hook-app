// React
import { Navigate, Route, Routes } from 'react-router-dom';
// Components
import HomePage from "./HomePage";
import AboutPage from "./AboutPage";
import LoginPage from "./LoginPage";


const MainApp = () => {
    return (
        <>
            <h1>MainApp</h1>
            <hr />

            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="about" element={<AboutPage />} />
                <Route path="login" element={<LoginPage />} />

                <Route path="/*" element={<Navigate to='/about' />} />
            </Routes>
        </>
    )
}

export default MainApp;