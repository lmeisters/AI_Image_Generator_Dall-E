import React, { useState, useEffect } from "react";

import { Card, FormField, Loader } from "../components";

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
    const [SearchedResults, setSearchedResults] = useState(null);
    const [searchTimeout, setSearchTimeout] = useState(null);

    const fetchPosts = async () => {
        setLoading(true);

        try {
            const response = await fetch("http://localhost:8080/api/v1/post", {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                },
            });

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
        setSearchText(e.target.value);

        setSearchTimeout(
            setTimeout(() => {
                const searchResults = allPosts.filter(
                    (item) =>
                        item.name
                            .toLowerCase()
                            .includes(searchText.toLowerCase()) ||
                        item.prompt
                            .toLowerCase()
                            .includes(searchText.toLowerCase())
                );

                setSearchedResults(searchResults);
            }, 500)
        );
    };

    return (
        <section>
            <section className="max-w-7xl mx-auto">
                <div className="flex flex-col items-center">
                    <h2 className="text-8xl font-extrabold text-transparent bg-clip-text bg-gradient-to-b from-gray-50 to-white-50 mt-48">
                        AI Image Generation App
                    </h2>
                    <p className="text-[#666e75] max-w-lg text-3xm text-center mt-16">
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. Exercitationem dicta sit repellat non? Illum
                        suscipit tempore a inventore rerum deleniti nesciunt
                        iusto consectetur. Magni assumenda minus est at earum
                        nemo.
                    </p>
                </div>
            </section>
            <div className="flex mt-32 overflow-auto">
                <div
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
                ></div>
            </div>

            <section className="max-w-7xl mx-auto flex flex-col items-center">
                <div className="block max-w- p-12 bg-white border border-white rounded-lg shadow dark:bg-[#191620] dark:border-gray-700 ">
                    <div className="flex flex-col items-center">
                        <h1 className="font-extrabold text-[#ffffff] text-[32px]">
                            The Community Showcase
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
                                            data={SearchedResults}
                                            title="No search results found"
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
