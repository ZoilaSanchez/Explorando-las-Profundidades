import { ReactNode } from 'react'
import { motion } from 'framer-motion'

interface AnimatedLiProps {
    children: ReactNode
}

export const AnimatedLi = ({ children }: AnimatedLiProps) => (
    <motion.div
        className='flex justify-center items-center py-[11px] px-[16px] rounded-[12px]'
        initial={{ backgroundColor: '#FFF', color: '000000' }}
        animate={{ backgroundColor: '#978662', color: '#FFF' }}
        transition={{
            duration: 2,
            delay: 6,
            times: [0, 1],
            type: 'keyframes',
            ease: 'easeInOut',
        }}
    >
        {children}
    </motion.div>
)
