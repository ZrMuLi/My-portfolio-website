import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import Image from "next/image";
import myImage from "../../img/image1.png";
import Link from "next/link";

export default function Info() {
    const variants = {
        hidden: { opacity: 0, x: 0, y: 200 },
        enter: { opacity: 1, x: 0, y: 0 },
        exit: { opacity: 0, x: 0, y: 200 },
    };
    return (
        <div className="bg-background p-5 pt-28 min-h-screen flex flex-col">
            <motion.main
                variants={variants}
                initial="hidden"
                animate="enter"
                exit="exit"
                transition={{ type: "linear" }}
                className="w-full"
            >
                <div className="pt-10 flex flex-col-reverse lg:flex-row justify-between uppercase gap-20 select-none h-full">
                    <div className="text-white relative space-y-10">
                        <div className="text-6xl lg:text-7xl xl:text-8xl transition-all cursor-default ">
                            <TypeAnimation
                                sequence={["infomation"]}
                                wrapper="h1"
                                cursor={false}
                                repeat={0}
                            />
                        </div>
                        <div className="pl-0 md:pl-20 space-y-10 transition-all">
                            <article className="flex flex-col cursor-default lg:text-xl xl:text-2xl ">
                                <p className=" mb-10">
                                    A little information about myself
                                </p>
                                <p>Hello&apos; MY NAME IS RATCHANON PAISAN</p>
                                <p>I&lsquo;M A PERSON DRIVE MY INSPIRATION</p>
                                <p>AND LOVE TO DAYDREAM ABOUT FANTASY</p>
                                <p>LOOKING FOWARD TO MEET YOU&#39;</p>
                            </article>
                            <Link href={"/contact"}>
                                <button className="bg-primary px-9 py-2 rounded-full brightness-90 hover:brightness-100 transition-all">
                                    CONTACT ME
                                </button>
                            </Link>
                        </div>
                    </div>

                    <div className="block items-center h-full pr-0 lg:pr-24">
                        <Image src={myImage} alt="myImage"></Image>
                    </div>
                </div>
            </motion.main>
        </div>
    );
}
