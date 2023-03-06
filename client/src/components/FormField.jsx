import React from "react";

const FormField = ({
    labelName,
    type,
    name,
    placeholder,
    value,
    handleChange,
    isSurpriseMe,
    handleSurpriseMe,
}) => (
    <div>
        <div className="flex items-center gap-2 mb-2">
            <label
                htmlFor={name}
                className="block text-sm font-medium text-white"
            >
                {labelName}
            </label>
            {isSurpriseMe && (
                <button
                    type="button"
                    onClick={handleSurpriseMe}
                    className="relative inline-flex items-center justify-center p-0.5 overflow-hidden text-sm font-medium text-gray-900 rounded-full group bg-gradient-to-br from-purple-500 via-pink-500 to-orange-500 group-hover:from-purple-500 group-hover:via-pink-500 group-hover:to-orange-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800"
                >
                    <span className="relative px-3 py-1 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-full group-hover:bg-opacity-0 text-xs">
                        Surprise me
                    </span>
                </button>
            )}
        </div>
        <input
            type={type}
            id={name}
            name={name}
            className="border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-[#6469ff] focus:border-[#6469ff] outline-none block w-full p-3 dark:bg-[#141516] dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
            placeholder={placeholder}
            value={value}
            onChange={handleChange}
            required
        />
    </div>
);

export default FormField;
