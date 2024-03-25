import { Link } from "react-router-dom";

const App = () => {
    return (
        <div className="bg-white">
            <div className=" flex justify-between items-center text-3xl font-bold  border-2 border-gray-400 rounded-md p-4 ">
                <h1 className="">DNS MANAGEMENT</h1>
                <div className="flex justify-around items-center gap-5">
                    <Link to="/login">Login</Link>
                    <Link to="/register">Register</Link>
                </div>
            </div>
            <div className="flex justify-center items-center h-screen">
                <img
                    className="  border-2 border-gray-400 rounded-md"
                    src="https://cdn.dribbble.com/users/458522/screenshots/3389088/12.jpg"
                    alt="image"
                />
            </div>
        </div>
    );
};

export default App;
