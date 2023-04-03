import React, { useState } from 'react';
import List from '../List/List'
import { Bars3Icon,XMarkIcon } from '@heroicons/react/24/solid'


const Navbar = () => {
    const lists= [
        {
          "name": "Home",
          "id": 1001,
          "route": "/"
        },
        {
          "name": "About",
          "id": 1002,
          "route": "/about"
        },
        {
          "name": "Contact",
          "id": 1003,
          "route": "/contact"
        },
        {
          "name": "Products",
          "id": 1004,
          "route": "/products"
        },
        {
          "name": "Services",
          "id": 1005,
          "route": "/services"
        }
      ];

      let [close,setClose]=useState(false)
    return (
        <div className='flex justify-between flex-col md:flex-row p-5'>
          <div className='order-2 md:order-1'>
            <h1 >Hello Tailwind</h1>
          </div>
          <div className='order-1 md:order-2'>
            <div className='cursor-pointer md:hidden' onClick={()=>setClose(!close)}>
              {
                close?<XMarkIcon className="h-6 w-6 text-purple-500" /> : <Bars3Icon className="h-6 w-6 text-purple-500" /> 
              }
            </div>
            <div className={`md:flex md:static absolute   duration-500 ${close?"top-20":"-top-96"}`}>
              {
                  lists.map(list=><List key={list.id} list={list}></List>)
              }
            </div>
          </div>
        </div>
    );
};

export default Navbar;