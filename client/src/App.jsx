import React from "react";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";

import { logo } from "./assets";
import { Home, CreatePost } from "./pages";

const App = () => (
    <BrowserRouter>
        <header className="w-full flex justify-between items-center bg-[#161111] sm:px-8 px-4 py-4">
            <Link to="/">
                <img
                    src={logo}
                    alt="logo"
                    className="w-28 object-contain logo"
                />
            </Link>

            <Link
                to="/create-post"
                className="relative inline-flex items-center justify-center p-0.5 overflow-hidden text-sm font-medium text-gray-900 rounded-full group bg-gradient-to-br from-purple-500 to-pink-500 group-hover:from-purple-500 group-hover:to-pink-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800"
            >
                <span className="relative px-5 py-1.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-full group-hover:bg-opacity-0">
                    Create
                </span>
            </Link>
        </header>

        <main className="sm:p-8 px-4 py-8 w-full bg-[#161111] min-h-[calc(100vh-68px)] ">
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/create-post" element={<CreatePost />} />
            </Routes>
        </main>
    </BrowserRouter>
);

export default App;
