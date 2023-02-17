import React, { useState, useEffect } from "react";

import { Card, FormField, Loader } from "../components";

import "../index.css";

const RenderCards = ({ data, title }) => {
    if (data?.length > 0) {
        return data.map((post) => <Card key={post._id} {...post} />);
    }

    return (
        <h2 className="mt-5 font-bold text-[#6469ff] text-xl uppercase">
            {title}
        </h2>
    );
};

const Home = () => {
    const [loading, setLoading] = useState(false);
    const [allPosts, setAllPosts] = useState(null);

    const [searchText, setSearchText] = useState("");
    const [searchTimeout, setSearchTimeout] = useState(null);
    const [searchedResults, setSearchedResults] = useState(null);

    const fetchPosts = async () => {
        setLoading(true);

        try {
            const response = await fetch(
                "https://main-do40.onrender.com/api/v1/post",
                {
                    method: "GET",
                    headers: {
                        "Content-Type": "application/json",
                    },
                }
            );

            if (response.ok) {
                const result = await response.json();

                setAllPosts(result.data.reverse());
            }
        } catch (err) {
            alert(err);
        } finally {
            setLoading(false);
        }
    };
    useEffect(() => {
        fetchPosts();
    }, []);

    const handleSearchChange = (e) => {
        clearTimeout(searchTimeout);
        setSearchText(e.target.value);

        setSearchTimeout(
            setTimeout(() => {
                const searchResult = allPosts.filter(
                    (item) =>
                        item.name
                            .toLowerCase()
                            .includes(searchText.toLowerCase()) ||
                        item.prompt
                            .toLowerCase()
                            .includes(searchText.toLowerCase())
                );
                setSearchedResults(searchResult);
            }, 500)
        );
    };

    return (
        <section>
            <section className="max-w-7xl mx-auto ">
                <div className="flex flex-col items-center">
                    <h1 className="text-8xl text-transparent bg-clip-text bg-gradient-to-b from-gray-100 to-gray-800 mt-44 h-28">
                        AI Image Generation App
                    </h1>
                    <p className="text-[#666e75] max-w-lg text-3xm text-center mt-12">
                        Create realistic images and art from a description in
                        natural language with the help of DALL·E 2 new AI system
                    </p>
                </div>
            </section>

            <div className="flex mt-32 ">
                <div class="relative flex overflow-x-hidden">
                    <div class="py-12 animate-marquee-infinite whitespace-nowrap">
                        <span class="text-4xl mx-4 text-white">
                            Marquee Item 1
                        </span>
                        <span class="text-4xl mx-4 text-white">
                            Marquee Item 2
                        </span>
                        <span class="text-4xl mx-4 text-white">
                            Marquee Item 3
                        </span>
                        <span class="text-4xl mx-4 text-white">
                            Marquee Item 4
                        </span>
                        <span class="text-4xl mx-4 text-white">
                            Marquee Item 5
                        </span>
                    </div>

                    <div class="absolute top-0 py-12 animate-marquee2 whitespace-nowrap">
                        <span class="text-4xl mx-4 text-white">
                            Marquee Item 1
                        </span>
                        <span class="text-4xl mx-4 text-white">
                            Marquee Item 2
                        </span>
                        <span class="text-4xl mx-4 text-white">
                            Marquee Item 3
                        </span>
                        <span class="text-4xl mx-4 text-white">
                            Marquee Item 4
                        </span>
                        <span class="text-4xl mx-4 text-white">
                            Marquee Item 5
                        </span>
                    </div>
                </div>
                {/* <div className="mb-96 ">
                    <div className="relative w-full overflowx-hidden">
                        <div className="flex absolute left-0 animate-marquee-infinite ">
                            <div className="flex overflowx-hidden">
                                <div
                                    href="#"
                                    className="block max-w-sm w-64 h-64 mr-6 my-24 bg-white border border-white rounded-lg shadow hover:bg-gray-100 dark:bg-[#191620] dark:border-gray-700 dark:hover:bg-gray-700"
                                ></div>
                                <div
                                    href="#"
                                    className="block max-w-sm w-64 h-64 mr-6 my-4 bg-white border border-white rounded-lg shadow hover:bg-gray-100 dark:bg-[#191620] dark:border-gray-700 dark:hover:bg-gray-700"
                                ></div>
                                <div
                                    href="#"
                                    className="block max-w-sm w-64 h-64 mr-6 my-24 bg-white border border-white rounded-lg shadow hover:bg-gray-100 dark:bg-[#191620] dark:border-gray-700 dark:hover:bg-gray-700"
                                ></div>
                                <div
                                    href="#"
                                    className="block max-w-sm w-64 h-64 mr-6 my-4 bg-white border border-white rounded-lg shadow hover:bg-gray-100 dark:bg-[#191620] dark:border-gray-700 dark:hover:bg-gray-700"
                                ></div>
                            </div>
                            <div className="flex overflowx-hidden">
                                <div
                                    href="#"
                                    className="block max-w-sm w-64 h-64 mr-6 my-24 bg-white border border-white rounded-lg shadow hover:bg-gray-100 dark:bg-[#191620] dark:border-gray-700 dark:hover:bg-gray-700"
                                ></div>
                                <div
                                    href="#"
                                    className="block max-w-sm w-64 h-64 mr-6 my-4 bg-white border border-white rounded-lg shadow hover:bg-gray-100 dark:bg-[#191620] dark:border-gray-700 dark:hover:bg-gray-700"
                                ></div>
                                <div
                                    href="#"
                                    className="block max-w-sm w-64 h-64 mr-6 my-24 bg-white border border-white rounded-lg shadow hover:bg-gray-100 dark:bg-[#191620] dark:border-gray-700 dark:hover:bg-gray-700"
                                ></div>
                                <div
                                    href="#"
                                    className="block max-w-sm w-64 h-64 mr-6 my-4 bg-white border border-white rounded-lg shadow hover:bg-gray-100 dark:bg-[#191620] dark:border-gray-700 dark:hover:bg-gray-700"
                                ></div>
                            </div>
                        </div>
                    </div>
                </div> */}
                {/* <div
                    href="#"
                    className="block max-w-sm w-32 h-64 mr-6 my-4 bg-white border border-white rounded-lg shadow hover:bg-gray-100 dark:bg-[#191620] dark:border-gray-700 dark:hover:bg-gray-700"
                ></div>
                <div
                    href="#"
                    className="block max-w-sm w-64 h-64 mx-6 my-24 bg-white border border-white rounded-lg shadow hover:bg-gray-100 dark:bg-[#191620] dark:border-gray-700 dark:hover:bg-gray-700"
                ></div>
                <div
                    href="#"
                    className="block max-w-sm w-64 h-64 mx-6 my-4 bg-white border border-white-100 rounded-lg shadow hover:bg-gray-100 dark:bg-[#191620] dark:border-gray-700 dark:hover:bg-gray-700"
                ></div>
                <div
                    href="#"
                    className="block max-w-sm w-64 h-64 mx-6 my-24 bg-white border border-white-100 rounded-lg shadow hover:bg-gray-100 dark:bg-[#191620] dark:border-gray-700 dark:hover:bg-gray-700"
                ></div>
                <div
                    href="#"
                    className="block max-w-sm w-64 h-64 mx-6 my-4 bg-white border border-white-100 rounded-lg shadow hover:bg-gray-100 dark:bg-[#191620] dark:border-gray-700 dark:hover:bg-gray-700"
                ></div>
                <div
                    href="#"
                    className="block max-w-sm w-64 h-64 mx-6 my-24 bg-white border border-white-100 rounded-lg shadow hover:bg-gray-100 dark:bg-[#191620] dark:border-gray-700 dark:hover:bg-gray-700"
                ></div>
                <div
                    href="#"
                    className="block max-w-sm w-32 h-64 ml-6 my-4 bg-white border border-white rounded-lg shadow hover:bg-gray-100 dark:bg-[#191620] dark:border-gray-700 dark:hover:bg-gray-700"
                ></div> */}
            </div>

            <section className="max-w-7xl mx-auto flex flex-col items-center">
                <div className="block max-w- p-12 bg-white border border-white rounded-lg shadow dark:bg-[#191620] dark:border-gray-700 ">
                    <div className="flex flex-col items-center">
                        <h1 className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-b from-gray-100 to-gray-800 text-center">
                            Community Showcase
                        </h1>
                        <p className="mt-4 text-[#666e75] text-[14px] max-w-[500px] text-center">
                            Browse through a collection of imaginative and
                            visually stunning images generated by DALL-E AI
                        </p>
                    </div>

                    <div className="mt-16">
                        <FormField
                            labelName="Search posts"
                            type="text"
                            name="text"
                            placeholder="Search something..."
                            value={searchText}
                            handleChange={handleSearchChange}
                        />
                    </div>

                    <div className="mt-10">
                        {loading ? (
                            <div className="flex justify-center items-center">
                                <Loader />
                            </div>
                        ) : (
                            <>
                                {searchText && (
                                    <h2 className="font-medium text-[#666e75] text-xl mb-3">
                                        Showing Resuls for{" "}
                                        <span className="text-[#ffffff]">
                                            {searchText}
                                        </span>
                                        :
                                    </h2>
                                )}
                                <div className="grid lg:grid-cols-4 sm:grid-cols-3 xs:grid-cols-2 grid-cols-1 gap-3">
                                    {searchText ? (
                                        <RenderCards
                                            data={searchedResults}
                                            title="No Search Results Found"
                                        />
                                    ) : (
                                        <RenderCards
                                            data={allPosts}
                                            title="No posts at the moment"
                                        />
                                    )}
                                </div>
                            </>
                        )}
                    </div>
                </div>
            </section>
        </section>
    );
};

export default Home;
