import React from 'react'

export default function ImageCard() {
  return (
    <div className="bg-red-500 max-w-full lg:h-64 h-40 rounded-md relative overflow-hidden"
      tabIndex={0}>
      <img src="assets/images/avatars/avatar-lg-1.jpg"
        className="w-full h-full absolute object-cover inset-0" />

      <div className="absolute bg-black bg-opacity-40 bottom-0 flex h-full items-center justify-center space-x-5 text-lg text-white uk-transition-scale-up w-full">
        <a href="#story-modal" className="flex items-center"> 150 </a>
        <a href="#story-modal" className="flex items-center"> 30 </a>
        <a href="#story-modal" className="flex items-center"> 12</a>
      </div>

    </div>
  )
}
