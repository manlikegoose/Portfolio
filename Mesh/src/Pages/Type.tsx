import React from 'react'
import Typewriter from 'typewriter-effect'

export default function Type() {
  return (
    <Typewriter
    options={{
      strings: ["Student | Tech Enthusiast | Web Developer - front-end "],
      autoStart: true,
      loop: true,
      deleteSpeed: 50,
    }}
    />
  )
}
