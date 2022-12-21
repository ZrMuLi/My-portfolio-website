import Layout from "../../layout/Secondary";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { TypeAnimation } from "react-type-animation";
import { useState } from "react";

import Image from "next/image";

export default function works() {
    const jobs = [
        "front-end developer",
        "UX/UI Designer",
        "game developer",
        "video editor",
        "as you wish",
    ];
    return (
        <Layout>
            <div className="uppercase text-white">
                <div className="flex flex-col justify-start md:flex-row md:justify-between transition-all mb-32">
                    <h1 className="text-7xl md:text-8xl">WORKS</h1>
                    <div className="self-start md:self-center transition-all md:text-right">
                        <p>THESE ARE MY PAST WORK</p>
                        <p>HOPE IT RELATE TO</p>
                        <p>WHAT YOU LOOKING FOR</p>
                    </div>
                </div>

                <div className="bg-darkbg rounded-lg mb-3 pb-10">
                    <div className="flex flex-col md:flex-row md:justify-between mb-3 py-9 px-3">
                        <div className="flex flex-col md:flex-row ">
                            <p className="md:-rotate-90 text-primary text-4xl">
                                2022
                            </p>
                            <div className="text-xl font-light h-fit mb-8 lg:mb-0">
                                <p>IN POSITION OF</p>
                                <p>FRONT-END DEVELOPER</p>
                            </div>
                        </div>

                        <div className="text-4xl lg:text-right self-center">
                            <p>rush app</p>
                        </div>
                    </div>
                    <div className="flex flex-row justify-center">
                        <img
                            src={require("./rushapp-1.png")}
                            alt="image"
                            className="mx-auto"
                        />
                    </div>
                </div>

                <div className="bg-darkbg rounded-lg mb-3 pb-10">
                    <div className="flex flex-col md:flex-row md:justify-between mb-3 py-9 px-3">
                        <div className="flex flex-col md:flex-row ">
                            <p className="md:-rotate-90 text-primary brightness-50 text-4xl">
                                2021
                            </p>
                            <div className="text-xl font-light h-fit mb-8 lg:mb-0">
                                <p>RESEARCH</p>
                                <p>GAME-FI NFT</p>
                            </div>
                        </div>

                        <div className="text-4xl lg:text-right self-center">
                            <p>GAME-FI, NFT</p>
                        </div>
                    </div>
                    <div className="flex flex-row justify-center">
                        <img
                            src={require("./game-fi.png")}
                            alt="image"
                            className="mx-auto h-10 aspect-auto"
                        />
                        <img
                            src={require("./game-fi-design.png")}
                            alt="image"
                            className="mx-auto h-10 aspect-auto"
                        />
                    </div>
                </div>

                <div className="bg-darkbg rounded-lg mb-3 pb-10">
                    <div className="flex flex-col md:flex-row md:justify-between mb-3 py-9 px-3">
                        <div className="flex flex-col md:flex-row ">
                            <p className="md:-rotate-90 text-primary brightness-50 text-4xl">
                                2021
                            </p>
                            <div className="text-xl font-light h-fit mb-8 lg:mb-0">
                                <p>RESEARCH</p>
                                <p>BLOCKCHAIN</p>
                            </div>
                        </div>

                        <div className="text-4xl lg:text-right self-center">
                            <p>BLOCKCHAIN</p>
                        </div>
                    </div>
                    <div className="flex flex-row justify-center">
                        <img
                            src={require("./certificate.png")}
                            alt="image"
                            className="mx-auto"
                        />
                    </div>
                </div>

                <div className="bg-darkbg rounded-lg mb-3 pb-10">
                    <div className="flex flex-col md:flex-row md:justify-between mb-3 py-9 px-3">
                        <div className="flex flex-col md:flex-row ">
                            <p className="md:-rotate-90 text-primary brightness-50 text-4xl">
                                2020
                            </p>
                            <div className="text-xl font-light h-fit mb-8 lg:mb-0">
                                <p>IN POSITION OF</p>
                                <p>video editor</p>
                            </div>
                        </div>

                        <div className="text-4xl lg:text-right self-center">
                            <p>JAI RAW</p>
                        </div>
                    </div>
                    <div className="flex flex-row justify-center">
                        <img
                            src={require("./jairaw1.png")}
                            alt="image"
                            className="mx-auto"
                        />
                        <img
                            src={require("./jairaw2.png")}
                            alt="image"
                            className="mx-auto"
                        />
                    </div>
                </div>

                <div className="bg-darkbg rounded-lg mb-3 pb-10">
                    <div className="flex flex-col md:flex-row md:justify-between mb-3 py-9 px-3">
                        <div className="flex flex-col md:flex-row ">
                            <p className="md:-rotate-90 text-primary brightness-50 text-4xl">
                                2019
                            </p>
                            <div className="text-xl font-light h-fit mb-8 lg:mb-0">
                                <p>IN POSITION OF</p>
                                <p>video editor</p>
                            </div>
                        </div>

                        <div className="text-4xl lg:text-right self-center">
                            <p>JAI RAW</p>
                        </div>
                    </div>
                    <div className="flex flex-row justify-center">
                        <img
                            src={require("./jairaw1.png")}
                            alt="image"
                            className="mx-auto"
                        />
                        <img
                            src={require("./jairaw2.png")}
                            alt="image"
                            className="mx-auto"
                        />
                    </div>
                </div>

                <div className="bg-darkbg rounded-lg mb-3 pb-10">
                    <div className="flex flex-col md:flex-row md:justify-between mb-3 py-9 px-3">
                        <div className="flex flex-col md:flex-row ">
                            <p className="md:-rotate-90 text-primary brightness-50 text-4xl">
                                2018
                            </p>
                            <div className="text-xl font-light h-fit mb-8 lg:mb-0">
                                <p>IN POSITION OF</p>
                                <p>video editor</p>
                            </div>
                        </div>

                        <div className="text-4xl lg:text-right self-center">
                            <p>JAI RAW</p>
                        </div>
                    </div>
                    <div className="flex flex-row justify-center">
                        <img
                            src={require("./jairaw1.png")}
                            alt="image"
                            className="mx-auto"
                        />
                        <img
                            src={require("./jairaw2.png")}
                            alt="image"
                            className="mx-auto"
                        />
                    </div>
                </div>
            </div>
        </Layout>
    );
}
