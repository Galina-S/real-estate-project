import React from 'react'

export default function CreateListing() {
    function onChange() {}
  return (
    <main className='max-w-md px-2 mx-auto'>
        <h1 className='text-3xl text-center mt-6 font-bold'>
        Create a listing
        </h1>
        <form action="">
            <p className='text-lg mt-6 font-semibold'>Sell / Rent</p>
            <div>
                <button type = "button" id="type" 
                onClick= {onChange} className= "">
                    sell
                </button>
            </div>
        </form>
    </main>
  )
}
