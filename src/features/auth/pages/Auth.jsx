// src/features/auth/pages/Auth.jsx

import { useState } from "react"
import { useNavigate, Navigate } from "react-router-dom"
import { useLanguage } from "@/core/hooks/useLanguage"
import { useAuth } from "@/core/hooks/useAuth"
import { ROUTES } from "@/core/constants/routes"
import "@/styles/auth.css"

function Auth() {

    const { user, login } = useAuth()
    const navigate = useNavigate()
    const { t } = useLanguage()

    // 🔥 modes: login | register | forgot
    const [mode, setMode] = useState("login")

    // 🔐 لو مسجل بالفعل
    if (user) {
        return <Navigate to={ROUTES.HOME} />
    }

    const handleLogin = () => {
        const fakeUser = {
            name: "Omar",
            email: "test@test.com"
        }

        login(fakeUser) // save to context + localStorage

        navigate(ROUTES.HOME)
    }

    const handleRegister = () => {
        setMode("login") // بعد register يروح login
    }

    const renderForm = () => {
        switch (mode) {

            case "login":
                return (
                    <>
                        <h2>Login</h2>

                        <input type="email" placeholder="Email" />
                        <input type="password" placeholder="Password" />

                        <button className="auth-btn" onClick={handleLogin}>
                            Login
                        </button>

                        <p onClick={() => setMode("forgot")}>
                            Forgot Password?
                        </p>

                        <p>
                            Don't have an account?{" "}
                            <span onClick={() => setMode("register")}>
                                Register
                            </span>
                        </p>
                    </>
                )

            case "register":
                return (
                    <>
                        <h2>Register</h2>

                        <input type="text" placeholder="Name" />
                        <input type="email" placeholder="Email" />
                        <input type="password" placeholder="Password" />

                        <button className="auth-btn" onClick={handleRegister}>
                            Register
                        </button>

                        <p>
                            Already have an account?{" "}
                            <span onClick={() => setMode("login")}>
                                Login
                            </span>
                        </p>
                    </>
                )

            case "forgot":
                return (
                    <>
                        <h2>Reset Password</h2>

                        <input type="email" placeholder="Enter your email" />

                        <button className="auth-btn">
                            Send Reset Link
                        </button>

                        <p onClick={() => setMode("login")}>
                            Back to Login
                        </p>
                    </>
                )

            default:
                return null
        }
    }

    return (
        <div className="auth-page">
            <div className="auth-box">
                {renderForm()}
            </div>
        </div>
    )
}

export default Auth