"use client"

import { useEffect } from "react";

const ErrorPage = ({ error, reset }: {
    error: Error & { digest?: string }
    reset: () => void
}) => {
    useEffect(() => {
        // Log the error to an error reporting service
        console.error(error)
    }, [error])
    return (
        <div >
            <h1 className="text-center text-red-500 text-xl">Something went wrong</h1>
            <p>{error?.message}</p>

            <button
                onClick={() => reset()}
                className="mt-3 w-full bg-blue-500 text-white py-2 rounded-xl hover:bg-blue-600 mx-auto">
                Try Again
            </button>
        </div>
    );
};

export default ErrorPage;