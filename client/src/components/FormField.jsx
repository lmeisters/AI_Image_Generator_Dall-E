import React from "react";

/**
 * FormField component for rendering a form field with label and optional "Surprise me" button
 * @param {Object} props - The component props
 * @param {string} props.labelName - The label text for the form field
 * @param {string} props.type - The input type (e.g., 'text', 'number', etc.)
 * @param {string} props.name - The name attribute for the input field
 * @param {string} props.placeholder - The placeholder text for the input field
 * @param {string} props.value - The current value of the input field
 * @param {Function} props.handleChange - The function to handle input changes
 * @param {boolean} props.isSurpriseMe - Whether to show the "Surprise me" button
 * @param {Function} props.handleSurpriseMe - The function to handle "Surprise me" button click
 * @returns {JSX.Element} A div containing the form field with label and optional "Surprise me" button
 */
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
