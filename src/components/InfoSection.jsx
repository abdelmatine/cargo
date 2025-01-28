import React from 'react'
import { Button } from './ui/button'

function InfoSection() {
  return (
    <section>
  <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 lg:px-8">
    <div className="grid grid-cols-1 gap-4 md:grid-cols-4 md:items-center md:gap-8">
      <div className="md:col-span-3">
        <img
          src="/audi.jpg"
          className="rounded"
          alt=""
        />
      </div>

      <div className="md:col-span-1">
        <div className="max-w-lg md:max-w-none">
          <h2 className="text-2xl font-semibold text-gray-900 sm:text-3xl">
          The Audi RS e-tron GT
          </h2>

          <p className="mt-4 text-gray-700">
          The Audi RS e-tron GT is the electric and sporty flagship in the Audi Sport product portfolio. It is proof of the transformation into an electrified future.
          </p>
          <Button className='mt-5'>Buy Now</Button>
        </div>
      </div>
    </div>
  </div>
</section>
  )
}

export default InfoSection
