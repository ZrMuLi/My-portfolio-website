import Layout from "../layout/Default";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { TypeAnimation } from "react-type-animation";
import { useState } from "react";
import Link from "next/link";

export default function Home() {
    const jobs = [
        "front-end developer",
        "UX/UI Designer",
        "game developer",
        "video editor",
        "as you wish",
    ];

    return (
        <Layout>
            <div className="pt-10 flex flex-col-reverse md:flex-row justify-between uppercase gap-20 select-none">
                <div className="text-white relative space-y-10">
                    <div className="text-6xl lg:text-7xl xl:text-8xl transition-all cursor-default ">
                        <TypeAnimation
                            sequence={["paisan"]}
                            wrapper="h1"
                            cursor={false}
                            repeat={0}
                        />
                        <TypeAnimation
                            sequence={["frontend dev."]}
                            wrapper="h2"
                            cursor={false}
                            repeat={0}
                        />
                    </div>
                    <div className="pl-10 md:pl-20 space-y-10">
                        <div className="flex flex-col cursor-default">
                            {jobs.map((e, i) => {
                                return (
                                    <p className="font-light text-lg" key={i}>
                                        {e}
                                    </p>
                                );
                            })}
                        </div>
                        <div>
                            <Link href={"info"}>
                                <button className="space-x-2 place-content-center text-xl lg:text-4xl transition-all text-primary uppercase">
                                    <span>about me</span>
                                    <FontAwesomeIcon icon={faArrowRight} />
                                </button>
                            </Link>
                        </div>
                    </div>
                </div>

                <div className="w-full md:w-96 flex flex-col items-center justify-center pr-0 md:pr-48">
                    <div className="w-48 h-48 xl:w-80 xl:h-80 bg-primary rounded-full flex flex-col items-center justify-center transition-all">
                        <div className="w-36 h-36 xl:w-60 xl:h-60 bg-primary brightness-95 animate-ping-mini rounded-full transition-all"></div>
                    </div>
                </div>
            </div>
        </Layout>
    );
}
