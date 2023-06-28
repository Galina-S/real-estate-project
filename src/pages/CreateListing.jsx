import React from 'react'
import { useState } from 'react';

export default function CreateListing() {
    const [formData, setFormData] = useState({
        type: "rent",
        name: "",
        bedrooms:1,
        bathrooms:1,
        parking: false,
        furnished: false,
        addess:"",
        description:""
       
    });
    const {type, name, bedrooms, bathrooms, parking, furnished} = formData;  //destructure
    function onChange() {

    }
  return (
    <main className='max-w-md px-2 mx-auto'>
        <h1 className='text-3xl text-center mt-6 font-bold'>
        Create a listing
        </h1>
        <form action="">
            <p className='text-lg mt-6 font-semibold'>Sell / Rent</p>
            <div className='flex'> 
                <button type = "button" id="type" 
                onClick= {onChange} className= {`mr-3 px-7 py-3 font-medium text-sm uppercase 
                shadow-md rounded hover:shadow-lg focus:shadow-lg active:shadow-lg transition duration-150 ease-in-out w-full 
                ${type==="rent" 
                    ? "bg-white text-black"
                    : "bg-slate-600 text-white"}`}>
                    sell
                </button>

                <button type = "button" id="type" 
                onClick= {onChange} className= {`ml-3 px-7 py-3 font-medium text-sm uppercase 
                shadow-md rounded hover:shadow-lg focus:shadow-lg active:shadow-lg transition duration-150 ease-in-out w-full 
                ${type==="sale" 
                    ? "bg-white text-black"
                    : "bg-slate-600 text-white"}`}>
                    rent
                </button>
            </div>
            <p className='text-lg mt-6 font-semibold'>Name </p>
            <input type="text" id='name' value={name} onChange={onChange} placeholder="Name" maxlength="32" minLength={10} required
            className='w-full px-4 py-2 text-xl text-gray-700 bg-white border border-gray-300 rounded transition
            duration-150 ease-in-out focus:text-gray-700
            focus:bg-white focus:border-slate-600 mb-6'/>
            <div className="flex space-x-6 mb-6">
                <div className=''>
                    <p className="text-lg font-semibold">Beds</p>
                    <input type="number" id="bedrooms" value = {bedrooms} 
                    onChange={onChange} min ="1" max="50" required  
                    className="w-full px-4 py-2 text-xl text-gray-700 bg-white border 
                    border-gray-300 rounded transition duration-150 ease-in-out focus:text-gray-700
                     focus:bg-white focus:border-slate-600 text-center" />
                </div>
                <div className=''>
                    <p className="text-lg font-semibold">Baths</p>
                    <input type="number" id="bathrooms" value = {bathrooms} 
                    onChange={onChange} min ="1" max="50" required  
                    className="w-full px-4 py-2 text-xl text-gray-700 bg-white border 
                    border-gray-300 rounded transition duration-150 ease-in-out focus:text-gray-700
                     focus:bg-white focus:border-slate-600 text-center" />
                </div>
            </div>
            <p className='text-lg font-semibold'>Parking slot</p>
            <div className='flex'> 
                <button type = "button" id="parking" value={true}
                onClick= {onChange} className= {`mr-3 px-7 py-3 font-medium text-sm uppercase 
                shadow-md rounded hover:shadow-lg focus:shadow-lg active:shadow-lg transition duration-150 ease-in-out w-full 
                ${!parking 
                    ? "bg-white text-black"
                    : "bg-slate-600 text-white"}`}>
                    Yes
                </button>

                <button type = "button" id="parking" value= {false} 
                onClick= {onChange} className= {`ml-3 px-7 py-3 font-medium text-sm uppercase 
                shadow-md rounded hover:shadow-lg focus:shadow-lg active:shadow-lg transition duration-150 ease-in-out w-full 
                ${parking 
                    ? "bg-white text-black"
                    : "bg-slate-600 text-white"}`}>
                    rent!!
                </button>
            </div>

            <p className='text-lg mt-6 font-semibold'>Furnished</p>
            <div className='flex'> 
                <button type = "button" id="furnished" 
                onClick= {onChange} className= {`mr-3 px-7 py-3 font-medium text-sm uppercase 
                shadow-md rounded hover:shadow-lg focus:shadow-lg active:shadow-lg transition duration-150 ease-in-out w-full 
                ${ !furnished==="rent" 
                    ? "bg-white text-black"
                    : "bg-slate-600 text-white"}`}>
                    sell
                </button>

                <button type = "button" id="type" 
                onClick= {onChange} className= {`ml-3 px-7 py-3 font-medium text-sm uppercase 
                shadow-md rounded hover:shadow-lg focus:shadow-lg active:shadow-lg transition duration-150 ease-in-out w-full 
                ${furnished==="sale" 
                    ? "bg-white text-black"
                    : "bg-slate-600 text-white"}`}>
                    on
                </button>
            </div>
            <p className='text-lg mt-6 font-semibold'>Address </p>
            <input type="text" id='name' value={name} onChange={onChange} placeholder="Address" maxlength="32" minLength={10} required
            className='w-full px-4 py-2 text-xl text-gray-700 bg-white border border-gray-300 rounded transition
            duration-150 ease-in-out focus:text-gray-700
            focus:bg-white focus:border-slate-600 mb-6'/>
            
            <p className='text-lg mt-6 font-semibold'>Description </p>
            <input type="text" id='description' value={name} onChange={onChange} placeholder="Description" maxlength="32" minLength={10} required
            className='w-full px-4 py-2 text-xl text-gray-700 bg-white border border-gray-300 rounded transition
            duration-150 ease-in-out focus:text-gray-700
            focus:bg-white focus:border-slate-600 mb-6'/>
        </form>
    </main>
  )
}
