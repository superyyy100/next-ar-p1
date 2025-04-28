import React from 'react'

const page = ({params}: {params: {id: string}}) => {
  return (
    <div className="min-h-screen flex items-center justify-center font-[family-name:var(--font-geist-sans)]">
        <div className="space-y-3 max-w-3xl gap-2">
            <h1 className="text-4xl font-bold sm:text-left">
                Product:{params.id} Details
            </h1>
            <p>Product 1: Amazing Widget</p>
            <p>Description: This widget is amazing because...</p>
            <p>Price: $19.99</p>
        </div>
  </div>
  )
}

export default page