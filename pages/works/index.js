import Layout from "../../layout/Secondary";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { TypeAnimation } from "react-type-animation";
import { useState } from "react";

import Image from "next/image";

import rushapp from "../../img/rushapp-1.png";
import gamefi from "../../img/game-fi.png";
import gamefi2 from "../../img/game-fi-design.png";
import blockchain from "../../img/certificate.png";
import jairaw1 from "../../img/jairaw1.png";
import jairaw2 from "../../img/jairaw2.png";

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
                        <Image src={rushapp} alt="image" className="mx-auto" />
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
                        <Image
                            src={gamefi}
                            alt="image"
                            className="mx-auto h-10 aspect-auto"
                        />
                        <Image
                            src={gamefi2}
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
                        <Image
                            src={blockchain}
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
                        <Image src={jairaw1} alt="image" className="mx-auto" />
                        <Image src={jairaw2} alt="image" className="mx-auto" />
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
                        <Image src={jairaw1} alt="image" className="mx-auto" />
                        <Image src={jairaw2} alt="image" className="mx-auto" />
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
                        <Image src={jairaw1} alt="image" className="mx-auto" />
                        <Image src={jairaw2} alt="image" className="mx-auto" />
                    </div>
                </div>
            </div>
        </Layout>
    );
}
