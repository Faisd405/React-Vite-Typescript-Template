import React from "react";
import Navbar from "./components/Navbar";
import Router from "./Router";
export default function App() {
    return (
        <>
            <Navbar />
            <main className="min-h-screen pt-8">
                <Router />
            </main>
        </>
    );
}
