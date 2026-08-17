import type { SwapViewFn } from "../../types";
import Home from "../sections/Home";
import { useState } from "react";
import { motion } from "motion/react"

type projectProps = { swapViewFn: SwapViewFn }   

function Projects({ swapViewFn }: projectProps) {
    const [ isBobbing, setIsBobbing ] = useState(false);
    return (
        <div className="grid grid-cols-3 h-dvh bg-gray-700">
            <div className="bg-white hidden md:block">
                {/* Cat */}
            </div>
            <div className="p-5 bg-blue-500 col-span-3 md:col-span-2">
                {/* Book Shelves */}
                <div className="h-full grid gap-10 grid-cols-1 grid-rows-3"> 
                    {/* Shelf 1 */}
                    <div className="h-full relative bg-black px-4 flex items-end gap-2">
                        <motion.div
                        whileHover={{ 
                            scale: 1.05,
                            translateY: isBobbing ? ["-1rem", "-0.5rem", "-1rem"] : [null, "-1rem"],
                            translateX: isBobbing ? ["-1rem", "-0.5rem", "-1rem"] : [null, "-1rem"],
                            transition: isBobbing
                                ? { translateY: { repeat: Infinity, duration: 0.8, ease: 'easeInOut' },
                                    translateX: { repeat: Infinity, duration: 0.8, ease: 'easeInOut' }}
                                : { ease: 'easeOut' },
                        }}
                        onHoverStart={() => setIsBobbing(false)}
                        onAnimationComplete={() => setIsBobbing(true)}
                        onHoverEnd={() => setIsBobbing(false)}
                        className="origin-bottom-right mr-[clamp(4rem,10vw,6rem)] bg-white w-[clamp(3rem,8vw,5rem)] aspect-[1/3] rotate-[30deg]" 
                        />
                        <motion.div 
                        whileHover={{ scale: 1.05 }} 
                        className="origin-bottom bg-white w-[clamp(3rem,8vw,5rem)] aspect-[1/3]"/>
                        
                    </div>
                    {/* Shelf 2 */}
                    <div className="bg-black ">

                    </div>
                    {/* Shelf 3 */}
                    <div className="bg-black ">

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Projects
