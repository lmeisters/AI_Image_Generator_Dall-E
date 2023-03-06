import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { Card, FormField, Loader } from "../components";

import image2 from "../assets/images/1.webp";
import image3 from "../assets/images/4.webp";
import image1 from "../assets/images/7.webp";

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

    //Showcase posts
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

    //Search bar logic
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

    //img card hover effect
    const cardHoverSettings = {
        max: 10, // max tilt rotation (degrees (deg))
        perspective: 2000, // transform perspective, the lower the more extreme the tilt gets (pixels (px))
        scale: 1, // transform scale
        speed: 2000, // speed (transition-duration) of the enter/exit transition (milliseconds (ms))
        easing: "cubic-bezier(.03,.98,.52,.99)",
    };

    const cards = document.querySelectorAll(".card");

    cards.forEach((card) => {
        card.addEventListener("mouseenter", cardMouseEnter);
        card.addEventListener("mousemove", cardMouseMove);
        card.addEventListener("mouseleave", cardMouseLeave);
    });

    function cardMouseEnter(event) {
        setTransition(event);
    }

    function cardMouseMove(event) {
        const card = event.currentTarget;
        const cardWidth = card.offsetWidth;
        const cardHeight = card.offsetHeight;
        const centerX = card.offsetLeft + cardWidth / 2;
        const centerY = card.offsetTop + cardHeight / 2;
        const mouseX = event.clientX - centerX;
        const mouseY = event.clientY - centerY;
        const rotateXUncapped =
            (+1 * cardHoverSettings.max * mouseY) / (cardHeight / 2);
        const rotateYUncapped =
            (-1 * cardHoverSettings.max * mouseX) / (cardWidth / 2);
        const rotateX =
            rotateXUncapped < -cardHoverSettings.max
                ? -cardHoverSettings.max
                : rotateXUncapped > cardHoverSettings.max
                ? cardHoverSettings.max
                : rotateXUncapped;
        const rotateY =
            rotateYUncapped < -cardHoverSettings.max
                ? -cardHoverSettings.max
                : rotateYUncapped > cardHoverSettings.max
                ? cardHoverSettings.max
                : rotateYUncapped;

        card.style.transform = `perspective(${cardHoverSettings.perspective}px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) 
                                scale3d(${cardHoverSettings.scale}, ${cardHoverSettings.scale}, ${cardHoverSettings.scale})`;
    }

    function cardMouseLeave(event) {
        event.currentTarget.style.transform = `perspective(${cardHoverSettings.perspective}px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)`;
        setTransition(event);
    }

    function setTransition(event) {
        const card = event.currentTarget;
        clearTimeout(card.transitionTimeoutId);
        card.style.transition = `transform ${cardHoverSettings.speed}ms ${cardHoverSettings.easing}`;
        card.transitionTimeoutId = setTimeout(() => {
            card.style.transition = "";
        }, cardHoverSettings.speed);
    }

    //Route to Create page function
    const navigate = useNavigate();

    function handleClick() {
        navigate("/create-post");
    }

    //Scroll To function
    const handleClickScroll = () => {
        const element = document.getElementById("showcase");
        if (element) {
            element.scrollIntoView({ behavior: "smooth" });
        }
    };

    return (
        <section>
            {/* <section className="bg"> */}
            <section className="max-w-10xl 2xl:mx-32 flex justify-between sm:mb-56 mb-28 max-md:flex-wrap">
                <div className="flex flex-col overflow-hidden drop-in text-center md:text-start items-center md:items-start">
                    <h1 className="sm:text-7xl mt-44 pb-3 text-5xl max-w-xl animate-text bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500 bg-clip-text text-transparent">
                        AI Image Generation Application
                    </h1>
                    <p className="text-[#666e75] max-w-lg text-3xm mt-12 drop-in-2">
                        Create realistic images and art from a description in
                        natural language with the help of DALL·E 2 new AI
                        system. See the already created AI art gallery below or
                        create your own unique image
                    </p>
                    <div className="flex gap-5 mt-16 max-w-xs drop-in-3">
                        <button
                            type="button"
                            onClick={handleClick}
                            class="relative inline-flex items-center justify-center p-0.5 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-500  via-pink-500 to-orange-400 group-hover:from-purple-500 group-hover:via-pink-500 group-hover:to-orange-400 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800 animate-text"
                        >
                            <span class="relative max-sm:px-6 px-10 py-3 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0 animate-text">
                                CREATE
                            </span>
                        </button>
                        <button
                            type="button"
                            onClick={handleClickScroll}
                            className="  text-purple-700 hover:text-white border border-purple-700 hover:bg-purple-800 focus:ring-4 focus:outline-none focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:border-purple-400 dark:text-purple-400 dark:hover:text-white dark:hover:bg-purple-500 dark:focus:ring-purple-900"
                        >
                            SEE SHOWCASE
                        </button>
                    </div>
                </div>

                <div className="card max-md:m-auto drop-in-3">
                    <div className="grid xl:grid-cols-[0.5fr_1.8fr_0.1fr_1.8fr] max-md:auto-rows-max grid-cols-[0.4fr_1.5fr_0.1fr_1.7fr] xl:grid-rows-[1.3fr_0.4fr_1.5fr_0.4fr] grid-rows-[1.3fr_0.4fr_1.5fr_0.4fr] mt-44 xl:mt-0 max-md:mt-24 ">
                        <img
                            src={image1}
                            alt="image"
                            className="col-start-2 col-end-4 row-start-1 row-end-3 bg-white border border-white rounded-lg shadow dark:bg-[#191620] dark:border-gray-700 xl:max-h-80 md:max-h-44 lg:max-h-60"
                        />
                        <img
                            src={image2}
                            alt="image"
                            className="card row-start-2 row-end-4 col-start-4 col-end-5 bg-white border border-white rounded-lg shadow dark:bg-[#191620] dark:border-gray-700 xl:max-h-80 md:max-h-44 lg:max-h-60"
                        />
                        <img
                            src={image3}
                            alt="image"
                            className="card row-start-3 row-end-5 col-start-1 col-end-3 bg-white border border-white rounded-lg shadow dark:bg-[#191620] dark:border-gray-700 xl:max-h-96 md:max-h-44 lg:max-h-64"
                        />
                    </div>
                </div>
            </section>

            <section
                id="showcase"
                className="max-w-7xl mx-auto flex flex-col items-center overflow-hidden "
            >
                <div className="block w-full p-12 max-sm:p-2 bg-white border border-white rounded-lg shadow dark:bg-[#141516] dark:border-gray-700 ">
                    <div className="flex flex-col items-center mt-5">
                        <h1 className="sm:text-5xl text-4xl font-extrabold text-center animate-text bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500 bg-clip-text text-transparent">
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
