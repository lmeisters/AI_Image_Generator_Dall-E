import React from "react";

import { download } from "../assets";
import { downloadImage } from "../utils";

/**
 * Renders a Card component displaying an image with hover effects and additional information.
 * @param {Object} props - The properties passed to the component.
 * @param {string} props._id - The unique identifier for the card.
 * @param {string} props.name - The name of the card creator.
 * @param {string} props.prompt - The prompt or description of the image.
 * @param {string} props.photo - The URL of the image to display.
 * @returns {JSX.Element} A card component with image, hover effects, and download functionality.
 */
const Card = ({ _id, name, prompt, photo }) => (
    <div className="rounded-xl group relative shadow-card hover:shadow-cardhover showcase overflow-hidden">
        <img
            className="w-full h-auto object-cover rounded-xl hover:scale-110 ease-in duration-700"
            src={photo}
            alt={prompt}
        />
        <div className="group-hover:flex flex-col max-h-[94.5%] hidden absolute bottom-0 left-0 right-0 bg-[#191620] m-2 p-4 rounded-md">
            <p className="text-white text-sm overflow-y-auto prompt">
                {prompt}
            </p>

            <div className="mt-5 flex justify-between items-center gap-2">
                <div className="flex items-center gap-2">
                    <div className="w-7 h-7 rounded-full object-cover bg-pink-700 flex justify-center items-center text-white text-xs font-bold">
                        {name[0]}
                    </div>
                    <p className="text-white text-sm">{name}</p>
                </div>
                <button
                    type="button"
                    onClick={() => downloadImage(_id, photo)}
                    className="outline-none bg-transparent border-none"
                >
                    <img
                        src={download}
                        alt="download"
                        className="w-6 h-6 object-contain invert"
                    />
                </button>
            </div>
        </div>
    </div>
);

export default Card;
