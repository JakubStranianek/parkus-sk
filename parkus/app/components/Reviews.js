"use client"
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { StarIcon, ArrowLeftIcon, ArrowRightIcon } from '@heroicons/react/20/solid'
import data from "../data.json"
import Image from 'next/image';
import { useEffect } from 'react';
import "../carousel.css"

export default function Reviews() {
  return (
    <section className="px-6 py-24 sm:py-32 lg:px-8" id='referencie'>
    <Carousel showThumbs={false} infiniteLoop="true" swipeable="true" showIndicators={false} showStatus={false} className='hidden lg:block'
    centerMode
    centerSlidePercentage={33}
        renderArrowPrev={(clickHandler, hasPrev) => {
            return (
              <div
                className={`${
                  hasPrev ? "absolute" : "hidden"
                } hidden top-0 bottom-0 left-0 lg:flex justify-center items-center p-3 opacity-30 hover:opacity-100 cursor-pointer z-20`}
                onClick={clickHandler}
              >
                <ArrowLeftIcon className="w-9 h-9 text-black" />
              </div>
            );
          }}
          renderArrowNext={(clickHandler, hasNext) => {
            return (
              <div
                className={`${
                  hasNext ? "absolute" : "hidden"
                } hidden top-0 bottom-0 right-0 lg:flex justify-center items-center p-3 opacity-30 hover:opacity-100 cursor-pointer z-20`}
                onClick={clickHandler}
              >
                <ArrowRightIcon className="w-9 h-9 text-black" />
              </div>
            );
          }}
    >
      {data.reviews.map((review, index) => (
       <figure className="mx-auto max-w-2xl px-20" key={review.id + review.name}>
       <p className="sr-only">5 out of 5 stars</p>
       <div className="flex justify-center gap-x-1 text-black">
         <StarIcon className="h-5 w-5 flex-none" aria-hidden="true" />
         <StarIcon className="h-5 w-5 flex-none" aria-hidden="true" />
         <StarIcon className="h-5 w-5 flex-none" aria-hidden="true" />
         <StarIcon className="h-5 w-5 flex-none" aria-hidden="true" />
         <StarIcon className="h-5 w-5 flex-none" aria-hidden="true" />
       </div>
       <blockquote className="mt-10 text-xl font-semibold leading-8 tracking-tight text-gray-900 sm:text-2xl sm:leading-9">
         <p className='text-lg'>
          {review.review}
         </p>
       </blockquote>
       <figcaption className="mt-10 flex items-center justify-center lg:flex-col gap-x-6">
         <Image
           className="!h-12 !w-12 rounded-full bg-gray-50"
           src="/anonym.svg"
           alt="anonymous user"
           width={48}
           height={48}
         />
         <div className="text-sm leading-6">
           <div className="font-semibold text-gray-900">{review.name}</div>
         </div>
       </figcaption>
     </figure>
      ))}
    </Carousel>

    <Carousel showThumbs={false} infiniteLoop="true" swipeable="true" showIndicators={true} showStatus={false} className='lg:hidden'
        renderArrowPrev={(clickHandler, hasPrev) => {
            return (
              <div
                className={`${
                  hasPrev ? "absolute" : "hidden"
                } hidden top-0 bottom-0 left-0 lg:flex justify-center items-center p-3 opacity-30 hover:opacity-100 cursor-pointer z-20`}
                onClick={clickHandler}
              >
                <ArrowLeftIcon className="w-9 h-9 text-black" />
              </div>
            );
          }}
          renderArrowNext={(clickHandler, hasNext) => {
            return (
              <div
                className={`${
                  hasNext ? "absolute" : "hidden"
                } hidden top-0 bottom-0 right-0 lg:flex justify-center items-center p-3 opacity-30 hover:opacity-100 cursor-pointer z-20`}
                onClick={clickHandler}
              >
                <ArrowRightIcon className="w-9 h-9 text-black" />
              </div>
            );
          }}
    >
      {data.reviews.map((review, index) => (
       <figure className="mx-auto max-w-2xl px-3" key={review.id + review.name}>
       <p className="sr-only">5 out of 5 stars</p>
       <div className="flex justify-center gap-x-1 text-black">
         <StarIcon className="h-5 w-5 flex-none" aria-hidden="true" />
         <StarIcon className="h-5 w-5 flex-none" aria-hidden="true" />
         <StarIcon className="h-5 w-5 flex-none" aria-hidden="true" />
         <StarIcon className="h-5 w-5 flex-none" aria-hidden="true" />
         <StarIcon className="h-5 w-5 flex-none" aria-hidden="true" />
       </div>
       <blockquote className="mt-10 text-xl font-semibold leading-8 tracking-tight text-gray-900 sm:text-2xl sm:leading-9">
         <p className='text-lg'>
          {review.review}
         </p>
       </blockquote>
       <figcaption className="mt-10 flex items-center justify-center lg:flex-col gap-x-6">
         <Image
           className="!h-12 !w-12 rounded-full bg-gray-50"
           src="/anonym.svg"
           alt="anonymous user"
           width={48}
           height={48}
         />
         <div className="text-sm leading-6">
           <div className="font-semibold text-gray-900">{review.name}</div>
         </div>
       </figcaption>
     </figure>
      ))}
    </Carousel>
    </section>
  );
}