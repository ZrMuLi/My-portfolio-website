import Layout from "../../layout/Default";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

export default function contact() {
    const jobs = [
        "front-end developer",
        "UX/UI Designer",
        "game developer",
        "video editor",
        "as you wish",
    ];
    return (
        <Layout>
            <div className="pt-10 flex flex-col uppercase gap-10 select-none">
                <div className="text-white relative text-4xl md:text-6xl">
                    CONTACT
                </div>
                <div className="text-white relative text-lg md:text-2xl">
                    Feel free to contact me
                </div>
                <div className="text-white relative text-xl md:text-4xl flex flex-row gap-3">
                    <FontAwesomeIcon
                        icon={faEnvelope}
                        className="text-primary"
                    ></FontAwesomeIcon>
                    ratchanon.pais@gmail.com
                </div>
            </div>
        </Layout>
    );
}
