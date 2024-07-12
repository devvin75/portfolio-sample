'use client'
import {delay, motion} from 'framer-motion'

const testAnimation = () => {
    const variants = {
        variant1:{
            x:400,
            y:300,
            opacity:0.5,
            
        },
        variant2:{
            x:100,
            y:-300,
        }
    }
    return (        
            <div className="h-full flex items-center justify-center">
                <motion.div className="w-96 h-96 bg-red-400 rounded"
                            initial={{x:-300}}
                            variants={variants}
                            animate= "variant2"                            
                            transition={{delay:3, duration:8}}
                >                    
                </motion.div>        
                
            </div>       
    )
}

export default testAnimation