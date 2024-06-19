import React from 'react'

export default function Card({image, title, description="placeholder text here"}) { //you can do object destructuring here as well {username, title}
  return (
    <div className="relative h-[400px] w-[300px] rounded-md">
      <img
        src={image.url}
        alt={image.alt}
        className="z-0 h-full w-full rounded-md object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent"></div>
      <div className="absolute bottom-4 left-4 text-left">
        <h1 className="text-lg font-semibold text-white">{title}</h1>
        <p className="mt-2 text-sm text-gray-300">
         {description}
        </p>
        <button className="mt-2 inline-flex cursor-pointer items-center text-sm font-semibold text-white">
          View Profile &rarr;
        </button>
      </div>
    </div>
  )
}
