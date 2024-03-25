import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        // Basic validation
        if (!email || !password) {
            alert("Please fill in all fields.");
            return;
        }
        // Basic login logic
        console.log({ email, password });
        // Reset form
        setEmail("");
        setPassword("");
    };
    const backToHome = () => {
        navigate("/");
    };

    return (
        <div className="flex justify-center items-center h-screen">
            <div className="w-[40%] m-4 p-6 bg-white rounded-lg shadow-md center">
                <div className="flex justify-between items-center">
                    <h2 className="text-2xl font-semibold text-gray-800 mb-6">
                        Welcome
                    </h2>
                    <button
                        className="text-gray-500 hover:text-gray-700 focus:outline-none"
                        onClick={backToHome}
                    >
                        <svg
                            className="h-6 w-6 fill-current"
                            viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M5.293 5.293a1 1 0 011.414 0L10 8.586l3.293-3.293a1 1 0 111.414 1.414L11.414 10l3.293 3.293a1 1 0 01-1.414 1.414L10 11.414l-3.293 3.293a1 1 0 01-1.414-1.414L8.586 10 5.293 6.707a1 1 0 010-1.414z"
                            />
                        </svg>
                    </button>
                </div>
                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label
                            htmlFor="email"
                            className="block text-gray-700 font-bold mb-2"
                        >
                            Email
                        </label>
                        <input
                            type="email"
                            id="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="border border-gray-300 p-2 rounded w-full"
                            placeholder="Enter your email"
                            required
                        />
                    </div>
                    <div className="mb-6">
                        <label
                            htmlFor="password"
                            className="block text-gray-700 font-bold mb-2"
                        >
                            Password
                        </label>
                        <input
                            type="password"
                            id="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="border border-gray-300 p-2 rounded w-full"
                            placeholder="Enter your password"
                            required
                        />
                    </div>
                    <button
                        type="submit"
                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                    >
                        Login
                    </button>
                    <span className="p-2 ">
                        New user
                        <Link
                            to="/register"
                            className="text-blue-400 p-2 underline"
                        >
                            Register now
                        </Link>
                    </span>
                </form>
            </div>
        </div>
    );
};

export default Login;
