import Layout from "../../layout/Secondary";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { TypeAnimation } from "react-type-animation";
import { useState } from "react";

export default function skill() {
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
                <div className="flex flex-col justify-start md:flex-row md:justify-between transition-all mb-36">
                    <h1 className="text-7xl md:text-8xl">Skill</h1>
                    <div className="self-start md:self-center transition-all">
                        <p className="">THESE ARE MY SKILLS CATEGORIES,</p>
                        <p>
                            I CAN PROVIDE CONCEPT DESIGN FUEL BY MY inspiration
                        </p>
                    </div>
                </div>

                <div className="flex flex-col lg:flex-row lg:justify-between mb-16">
                    <h2 className="text-4xl border-l-primary border-l-8 pl-2 h-fit mb-8 lg:mb-0">
                        Developer
                    </h2>

                    <div className="text-xl lg:text-4xl lg:text-right">
                        <p>
                            NEXT.JS, NUXT.JS, REACT, VUE, HTML, CSS, JAVASCRIPT
                        </p>
                        <p>Axios, C#, Python, Node, Tailwind and more</p>
                    </div>
                </div>

                <div className="flex flex-col lg:flex-row lg:justify-between mb-16">
                    <h2 className="text-4xl border-l-primary border-l-8 pl-2 h-fit mb-8 lg:mb-0">
                        editor
                    </h2>

                    <p className="text-xl lg:text-4xl">
                        PREMIRE PRO, Photoshop, Sony vegas
                    </p>
                </div>

                <div className="flex flex-col lg:flex-row lg:justify-between mb-16">
                    <h2 className="text-4xl border-l-primary border-l-8 pl-2 h-fit mb-8 lg:mb-0">
                        DESIGNER
                    </h2>

                    <p className="text-xl lg:text-4xl">ux/ui design</p>
                </div>
            </div>
        </Layout>
    );
}
