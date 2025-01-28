import FakeData from '@/shared/FakeData'
import React from 'react'
import CarItem from './CarItem'
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
  } from "@/components/ui/carousel"
  
function MostSearched() {
  return (
    <div className='mx-24'>
      <h2 className='font-bold text-3xl text-center my-16'>Most Seacrhed Cars</h2>
      
    <Carousel>
        <CarouselContent>
        {FakeData.carList.map((car, index)=>(
        <CarouselItem className='basis-1/1 md:basis-1/4'>
            <CarItem car={car} key={index} />
        </CarouselItem>
      ))}
            

        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
    </Carousel>

      

    </div>
  )
}

export default MostSearched
