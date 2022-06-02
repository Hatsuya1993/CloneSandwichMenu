import React from 'react'

const Menu = () => {
  return (
    <div className='border-solid border-2 p-16'>
        <div className='md:grid md:grid-cols-2 lg:grid lg:grid-cols-2 gap-x-4'>
            <div>
                <h1 className='text-5xl text-center pb-12'>Our Menu</h1>
                <ul>
                    <li className='space-y-4 py-4'>
                        <h4 className='text-2xl'>Bread Basket</h4>
                        <p>Assortment of fresh baked fruit breads and muffins 5.50</p>
                    </li>
                    <li className='space-y-4 py-4'>
                        <h4 className='text-2xl'>Honey Almond Granola with Fruits</h4>
                        <p>Natural cereal of honey toasted oats, raisins, almonds and dates 7.00</p>
                    </li>
                    <li className='space-y-4 py-4'>
                        <h4 className='text-2xl'>Belgian Waffle</h4>
                        <p>Vanilla flavored batter with malted flour 7.50</p>
                    </li>
                    <li className='space-y-4 py-4'>
                        <h4 className='text-2xl'>Scrambled eggs</h4>
                        <p>Scrambled eggs, roasted red pepper and garlic, with green onions 7.50</p>
                    </li>
                    <li className='space-y-4 py-4'>
                        <h4 className='text-2xl'>Blueberry Pancakes</h4>
                        <p>With syrup, butter and lots of berries 8.50</p>
                    </li>
                </ul>
            </div>
            <div>
                <img src="https://www.w3schools.com/w3images/tablesetting.jpg" alt="" />
            </div>
        </div>
    </div>
  )
}

export default Menu