import Navbar from "../components/Navbar";
import { motion } from "framer-motion";

export default function Default({ children }) {
    const variants = {
        hidden: { opacity: 0, x: 0, y: 200 },
        enter: { opacity: 1, x: 0, y: 0 },
        exit: { opacity: 0, x: 0, y: 200 },
    };
    return (
        <motion.div className="bg-background">
            <motion.div className="p-5 w-full min-h-screen flex flex-col justify-center">
                <motion.main
                    variants={variants}
                    initial="hidden"
                    animate="enter"
                    exit="exit"
                    transition={{ type: "linear" }}
                    className="w-full"
                >
                    {children}
                </motion.main>
            </motion.div>
        </motion.div>
    );
}
