import React from 'react';
import Card from '../Card/Card';

const Cardlist = () => {
    const datas=[  
        {    "id": "BG001",
            "name": "Basic ",
            "price": 2000,
            "features": ["Access to basic gym equipment", "stationary bikes", "weight machines", "and free weights"]
        },
        {
            "id": "SG002",
            "name": "Standard ",
            "price": 4000,
            "features": [ "resistance machines", "and free weights", "Access to additional amenities such as locker rooms", "showers, and sauna"]
        },
        {
            "id": "PG003",
            "name": "Premium",
            "price": 6000,
            "features": ["Access to  high-end cardio machines", "power racks", " Olympic lifting platforms", "Access to additional amenities such as towel service", "steam room, and group fitness classes."]
        }
        ]

    return (
        <div className='grid grid-cols-3'>
            {
                datas.map(data=><Card key={data.id} data={data}></Card>)
            }
        </div>
    );
};

export default Cardlist;