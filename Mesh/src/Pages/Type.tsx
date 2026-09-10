import React from 'react'
import Typewriter from 'typewriter-effect'

export default function Type() {
  return (
    <Typewriter
    options={{
      strings: ["Student | Tech Enthusiast | software Developer "],
      autoStart: true,
      loop: true,
      deleteSpeed: 50,
    }}
    />
  )
}
