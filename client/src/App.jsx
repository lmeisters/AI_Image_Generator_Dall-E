import React from "react";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";

import { logo } from "./assets";
import { Home, CreatePost } from "./pages";

const App = () => (
    <BrowserRouter>
        <header className="w-full flex justify-between items-center bg-[#020102] 2xl:px-40 px-4 py-4">
            <div className="flex flex-col">
                <span className="text-white text-sm">
                    Images generated with
                </span>
                <Link to="/">
                    <img
                        src={logo}
                        alt="logo"
                        className="w-28 object-contain logo"
                    />
                </Link>
            </div>
        </header>

        <main className="sm:p-8 px-4 py-8 w-full bg-[#020102] min-h-[calc(100vh-60px)] ">
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/create-post" element={<CreatePost />} />
            </Routes>
        </main>
    </BrowserRouter>
);

export default App;
