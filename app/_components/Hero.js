import React from "react";
import Constant from "../_utils/Constant";

const Hero = () => {
    return (
        <div>
            <section className="bg-gray-50">
                <div className="mx-auto max-w-screen-xl px-4 py-32 lg:flex">
                    <div className="mx-auto max-w-xl text-center">
                        <h1 className="text-3xl font-extrabold sm:text-5xl">
                            <span className="text-diffblue">Upload, Save </span> 
                            and easily <span className="text-diffblue">Share</span> your files at one place
                        </h1>

                        <p className="mt-4 sm:text-xl/relaxed">
                            {Constant.desc}
                        </p>

                        <div className="mt-8 flex flex-wrap justify-center gap-4">
                            <a
                                className="block w-full rounded bg-diffblue px-12 py-3 text-sm font-medium text-white shadow transition-transform transform hover:scale-105 hover:bg-diffblue2 focus:outline-none focus:ring active:bg-red-500 sm:w-auto"
                                href="/files"
                            >
                                Get Started
                            </a>

                            <a
                                className="block w-full rounded px-12 py-3 text-sm font-medium text-red-600 shadow hover:text-red-700 focus:outline-none focus:ring active:text-red-500 sm:w-auto"
                                href="#"
                            >
                                Learn More
                            </a>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Hero;
