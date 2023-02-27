import React, { useState, useEffect } from "react";

import { Card, FormField, Loader } from "../components";

import image1 from "../assets/images/1.webp";
import image2 from "../assets/images/2.webp";
import image3 from "../assets/images/3.webp";
import image4 from "../assets/images/4.webp";
import image5 from "../assets/images/5.webp";
import image6 from "../assets/images/6.webp";
import image7 from "../assets/images/7.webp";

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
            <section className="max-w-7xl mx-auto">
                <div className="flex flex-col items-center overflow-hidden">
                    <h1 className="sm:text-8xl text-transparent bg-clip-text bg-gradient-to-b from-gray-100 to-gray-800 mt-44 drop-in text-center pb-3 text-5xl">
                        AI Image Generation App
                    </h1>
                    <p className="text-[#666e75] max-w-lg text-3xm text-center mt-12 drop-in-2">
                        Create realistic images and art from a description in
                        natural language with the help of DALL·E 2 new AI
                        system. See the already created AI art gallery below or
                        create your own unique image
                    </p>
                </div>
            </section>

            <div className="flex sm:mb-56 mb-28 mt-16 pb-4 w-full justify-center overflow-hidden drop-in-2 z-20">
                <img
                    src={image7}
                    y
                    alt="image"
                    className="2xl:block w-60 h-60 2xl:mr-6 mt-40 hidden bg-white border border-white rounded-lg shadow dark:bg-[#191620] dark:border-gray-700"
                />
                <img
                    src={image5}
                    alt="image"
                    className="lg:block hidden w-60 h-60 mr-6 mt-24 bg-white border border-white rounded-lg shadow dark:bg-[#191620] dark:border-gray-700"
                />
                <img
                    src={image2}
                    alt="image"
                    className="block w-auto sm:h-60 h-28 mr-6 sm:mt-40 mt-32 bg-white border border-white rounded-lg shadow dark:bg-[#191620] dark:border-gray-700"
                />
                <img
                    src={image1}
                    alt="image"
                    className="block w-auto sm:h-60 h-28 sm:mt-24 mt-24 mr-6 bg-white border border-white rounded-lg shadow dark:bg-[#191620] dark:border-gray-700"
                />

                <img
                    src={image3}
                    alt="image"
                    className="block w-auto sm:h-60 h-28 lg:mr-6 sm:mt-40 mt-32 bg-white border border-white rounded-lg shadow dark:bg-[#191620] dark:border-gray-700"
                />
                <img
                    src={image4}
                    alt="image"
                    className="lg:block hidden w-60 h-60 2xl:mr-6 mt-24 bg-white border border-white rounded-lg shadow dark:bg-[#191620] dark:border-gray-700"
                />
                <img
                    src={image6}
                    alt="image"
                    className="2xl:block md:w-60 md:h-60 w-0 h-0 mt-40 hidden bg-white border border-white rounded-lg shadow dark:bg-[#191620] dark:border-gray-700"
                />
            </div>

            <section className="max-w-7xl mx-auto flex flex-col items-center overflow-hidden">
                <div className="block w-full p-12 bg-white border border-white rounded-lg shadow dark:bg-[#191620] dark:border-gray-700">
                    <div className="flex flex-col items-center mt-5">
                        <h1 className="sm:text-5xl text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-b from-gray-100 to-gray-800 text-center">
                            Community Showcase
                        </h1>
                        <p className="mt-4 text-[#666e75] text-[14px] max-w-[500px] text-center">
                            Browse through a collection of images created by
                            user prompts and generated by DALL-E AI
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

                    <div className="mt-10 drop-in">
                        {loading ? (
                            <div className="flex justify-center items-center">
                                <Loader />
                            </div>
                        ) : (
                            <>
                                {searchText && (
                                    <h2 className="font-medium text-[#ffffff] text-xl mb-3">
                                        Showing resuls for{" "}
                                        <span className="text-[#ffffff] font-bold">
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
