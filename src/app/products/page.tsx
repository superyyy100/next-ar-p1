import Link from 'next/link'
import React from 'react'

//${encodeURIComponent(params.id)}

const page = () => {
  return (
    <div className="flex justify-center p-4">
        <div className=" items-start justify-center lg:w-[50cqw]">

              <h1 className="text-4xl font-bold sm:text-left">
                  My Products
              </h1>
              <div className='flex flex-col items-start justify-center'>
              <Link href="/products/1">Product 1: Amazing Widget</Link>
              <Link href="/products/2">Product 2: Super Gadget</Link>
              <Link href="/products/3">Product 3: Incredible Device</Link>
              <Link href="/products/4">Product 4: Fantastic Thingamajig</Link>
              <Link href="/products/5">Product 5: Awesome Contraption</Link>
              <Link href="/products/6">Product 6: Spectacular Gizmo</Link>
              <Link href="/products/7">Product 7: Remarkable Invention</Link>
              <Link href="/products/8">Product 8: Extraordinary Apparatus</Link>
              <Link href="/products/9">Product 9: Unbelievable Mechanism</Link>
              <Link href="/products/10">Product 10: Mind-blowing Tool</Link>
              <Link href="/products/11">Product 11: Jaw-dropping Device</Link>
              <Link href="/products/12">Product 12: Revolutionary Gadget</Link>
              <Link href="/products/13">Product 13: Cutting-edge Widget</Link>
              <Link href="/products/14">Product 14: State-of-the-art Thingamajig</Link>
              <Link href="/products/15">Product 15: Next-gen Device</Link>
              <Link href="/products/16">Product 16: Innovative Tool</Link>
              <Link href="/products/17">Product 17: Futuristic Gadget</Link>
              <Link href="/products/18">Product 18: Cutting-edge Appliance</Link>
              <Link href="/products/19">Product 19: Advanced Mechanism</Link>
              </div>

        </div>
  </div>
  )
}

export default page