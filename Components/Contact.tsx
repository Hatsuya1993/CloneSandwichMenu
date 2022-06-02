import React from 'react'

const Contact = () => {
  return (
    <div className='p-16'>
        <div>
            <h1 className='text-4xl py-10'>Contact</h1>
            <div className='space-y-5'>
            <p>We offer full-service catering for any event, large or small. We understand your needs and we will cater the food to satisfy the biggerst criteria of them all, both look and taste. Do not hesitate to contact us.</p>
            <p className='text-xl'>Catering Service, 42nd Living St, 43043 New York, NY</p>
            <p>You can also contact us by phone 00553123-2323 or email catering@catering.com, or you can send us a message here:</p>
            <input type="text" placeholder='name' className='w-full p-3 border-b-2'/>
            <input type="number" placeholder='How many people' className='w-full p-3 border-b-2'/>
            <input type="datetime-local" placeholder='name' className='w-full p-3 border-b-2'/>
            <input type="text" placeholder='Message \ Special requirements' className='w-full p-3 border-b-2'/>
            <button className='bg-gray-200 p-3'>SEND MESSAGE</button>
            </div>
        </div>
    </div>
  )
}

export default Contact