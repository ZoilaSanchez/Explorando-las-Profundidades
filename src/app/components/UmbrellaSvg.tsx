'use client'

import * as React from 'react'
import { SVGProps } from 'react'
import { motion } from 'framer-motion'

export default function UmbrellaSvg(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      // width="296"
      // height="358"
      viewBox="0 0 296 358"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <motion.g
        id="umbrella"
        filter="url(#filter0_dddd_193_26)"
        animate={{
          rotate: [0, 360],
        }}
        transition={{
          times: [0, 1],
          duration: 6,
          repeat: Infinity,
          type: 'keyframes',
          ease: 'linear',
        }}
      >
        <path
          d="M71.7373 42.7373C50.4717 64.0028 36 72.6081 36 72.6081L148 119L101.608 7C101.608 7 93.0028 21.4717 71.7373 42.7373Z"
          fill="#FFF8EB"
        />
        <path
          d="M224.263 42.7372C202.997 21.4716 194.392 7 194.392 7L148 119L260 72.6081C260 72.6081 245.528 64.0028 224.263 42.7372Z"
          fill="#FFF8EB"
        />
        <path
          d="M224.263 195.263C245.528 173.997 260 165.392 260 165.392L148 119L194.392 231C194.392 231 202.997 216.528 224.263 195.263Z"
          fill="#FFF8EB"
        />
        <path
          d="M71.7372 195.263C93.0028 216.528 101.608 231 101.608 231L148 119L36 165.392C36 165.392 50.4717 173.997 71.7372 195.263Z"
          fill="#FFF8EB"
        />
        <path
          d="M40.1481 119C40.1481 149.074 36 165.392 36 165.392L148 119L36 72.6081C36 72.6081 40.1481 88.9259 40.1481 119Z"
          fill="#D0474F"
        />
        <path
          d="M148 226.852C178.074 226.852 194.392 231 194.392 231L148 119L101.608 231C101.608 231 117.926 226.852 148 226.852Z"
          fill="#D0474F"
        />
        <path
          d="M255.852 119C255.852 88.9259 260 72.6081 260 72.6081L148 119L260 165.392C260 165.392 255.852 149.074 255.852 119Z"
          fill="#D0474F"
        />
        <path
          d="M148 11.1481C117.926 11.1481 101.608 7 101.608 7L148 119L194.392 7C194.392 7 178.074 11.1481 148 11.1481Z"
          fill="#D0474F"
        />
      </motion.g>
    </svg>
  )
}
