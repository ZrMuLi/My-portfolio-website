import Link from "next/link";
import { AnimateSharedLayout, motion } from "framer-motion";
import { useRouter } from "next/router";

export default function Navbar() {
    const router = useRouter();
    const pathname = router.pathname;

    const menu = ["info", "skill", "works", "contact"];
    return (
        <AnimateSharedLayout>
            <nav className="flex flex-row justify-between absolute w-full p-5">
                <Link href={"/"}>
                    <a className="font-bold text-white text-xl cursor-pointer">
                        RP.
                    </a>
                </Link>
                <div className="flex flex-row gap-2">
                    {menu.map((e, i) => {
                        return (
                            <Link href={e} key={i}>
                                <button
                                    className={
                                        pathname == "/" + e
                                            ? "text-primary hover:text-primary transition-all duration-300 uppercase"
                                            : "text-gray hover:text-primary transition-all duration-300 uppercase"
                                    }
                                >
                                    {e}
                                </button>
                            </Link>
                        );
                    })}
                </div>
            </nav>
        </AnimateSharedLayout>
    );
}
