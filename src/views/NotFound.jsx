// src/view/NotFound.jsx
import { Link } from "react-router-dom";

export default function NotFound() {
    return (
        <div className="min-h-screen flex flex-col items-center justify-center text-center p-6 animate-fade-in">
            <img
                src="https://i.gifer.com/EKjQ.gif"
                alt="Not Found"
                className="w-36 h-36 mb-6 rounded-full shadow-lg"
            />
            <h1 className="text-4xl font-bold text-red-500 mb-4">
                404 - Page Not Found
            </h1>
            <p className="text-gray-200 mb-6">
                The page you are looking for does not exist yet.
            </p>
            <Link
                to="/"
                className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
            >
                Go back
            </Link>
        </div>
    );
}
