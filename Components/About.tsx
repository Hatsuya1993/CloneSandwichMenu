import React from 'react'

const About = () => {
  return (
    <div className='p-16'>
        <div className='md:grid md:grid-cols-2 lg:grid lg:grid-cols-2 gap-x-4'>
            <div className='hidden md:block md:w-11/12'>
                <img src="https://www.w3schools.com/w3images/tablesetting2.jpg" alt="" />
            </div>
            <div>
                <h1 className='text-center text-4xl'>About Catering</h1>
                <h4 className='text-center pt-12 text-xl'>Tradition since 1889</h4>
                <p className='py-3'>The Catering was founded in blabla by Mr. Smith in lorem ipsum dolor sit amet, consectetur adipiscing elit consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute iruredolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.We only use <span className='bg-gray-100 p-1'>seasonal</span> ingredients.</p>
                <p className='py-3 text-gray-400'>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum consectetur adipiscing elit, sed do eiusmod temporincididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
            </div>
        </div>
    </div>
  )
}

export default About