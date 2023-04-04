import { Player } from '@lottiefiles/react-lottie-player';
import React from 'react';

const About = () => {
    return (
        <div className="min-h-screen bg-gray-100 flex flex-col justify-center items-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row md:space-x-4">
            <div className="md:w-2/4">
                <div className="relative h-72 md:h-full">
                <Player
                src='about.json'
                player
                loop
                autoplay
                />
                </div>
            </div>
            <div className="md:w-2/4 flex flex-col justify-center">
                <h1 className="text-3xl md:text-5xl font-bold mb-2">
                About Me
                </h1>
                <p className="text-lg md:text-xl text-gray-700 mb-6">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
                ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                aliquip ex ea commodo consequat. Duis aute irure dolor in
                reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                culpa qui officia deserunt mollit anim id est laborum.
                </p>
                <div className="flex flex-row space-x-4">
                <a
                    href="#"
                    className="bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700"
                >
                    Contact Me
                </a>
                <a
                    href="#"
                    className="bg-gray-300 text-gray-700 py-2 px-4 rounded-md hover:bg-gray-400"
                >
                    Resume
                </a>
                </div>
            </div>
            </div>
        </div>
        </div>
    );
};

export default About;