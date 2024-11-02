import { useEffect } from "react";
import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import CategoryModalSection from "./categoryModalComponent/CategoryModalSection";

const CategoryModal = ({ open, onClose }) => {
    return (
        <AnimatePresence>
            {open && (
                <div className="fixed inset-0 w-full flex items-center justify-center bg-black bg-opacity-50">
                    <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        exit={{ scale: 0 }}
                        transition={{ duration: 0.4 }}
                        className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md"
                    >
                        <div className="flex justify-between items-center">
                            <h2 className="text-2xl font-semibold mb-4">Add Category</h2>
                            <button onClick={onClose} className="text-gray-600 hover:text-gray-800">
                                <svg fill="#000000" width="28px" height="28px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M4.70710678,16 L7.85355339,19.1464466 C8.04881554,19.3417088 8.04881554,19.6582912 7.85355339,19.8535534 C7.65829124,20.0488155 7.34170876,20.0488155 7.14644661,19.8535534 L3.14644661,15.8535534 C2.95118446,15.6582912 2.95118446,15.3417088 3.14644661,15.1464466 L7.14644661,11.1464466 C7.34170876,10.9511845 7.65829124,10.9511845 7.85355339,11.1464466 C8.04881554,11.3417088 8.04881554,11.6582912 7.85355339,11.8535534 L4.70710678,15 L18.5,15 C19.3284271,15 20,14.3284271 20,13.5 L20,7.5 C20,6.67157288 19.3284271,6 18.5,6 L3.5,6 C3.22385763,6 3,5.77614237 3,5.5 C3,5.22385763 3.22385763,5 3.5,5 L18.5,5 C19.8807119,5 21,6.11928813 21,7.5 L21,13.5 C21,14.8807119 19.8807119,16 18.5,16 L4.70710678,16 Z" />
                                </svg>
                            </button>
                        </div>
                        <div className="border-b-2 border-gray-300 mb-4"></div>
                        <div className="w-full h-full bg-white overflow-y-auto">
                            <CategoryModalSection />
                        </div>
                    </motion.div>
                </div>
            )}
        </AnimatePresence>
    );
};

export default CategoryModal;
