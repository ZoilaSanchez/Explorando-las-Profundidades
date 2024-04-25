'use client'

import Image from 'next/image'
import BeachSvg from './components/BeachSvg'
import { motion } from 'framer-motion'
import UmbrellaSvg from './components/UmbrellaSvg'

export default function Home() {
  return (
    <main className="flex min-h-screen items-center justify-center">
      <div className="flex max-h-screen w-full items-center justify-center">
        <motion.div
          className="relative overflow-hidden"
          initial={{ width: 536, height: 536, borderRadius: '50%' }}
          animate={{ width: 1920, height: 1920, borderRadius: '50%' }}
          transition={{
            duration: 2,
            delay: 5,
            times: [0, 1],
            type: 'keyframes',
            ease: 'easeInOut',
          }}
        >
          <div
            style={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
            }}
          >
            <div className="w-[1920px]">
              <BeachSvg />
            </div>
            <div className="absolute left-[692px] top-[296px] w-[296px] overflow-visible umbrella-shadow">
              <UmbrellaSvg />
            </div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 5 }}
              className="absolute left-[25.1%] top-[29.5%] text-shadow"
            >
            <span className="text-with-border">Explorando lo<br/>profundo</span>
            </motion.div>

          </div>
        </motion.div>
      </div>
    </main>
  )
}
