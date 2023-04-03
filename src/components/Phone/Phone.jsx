import axios from 'axios';
import React, { useEffect, useState } from 'react';
import {
    ComposedChart,
    Line,
    Area,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
    ResponsiveContainer,
  } from 'recharts';

const Phone = () => {
    const [phones,setPhones]=useState([])
    useEffect(()=>{
        //data load with Axios
        axios.get('https://openapi.programming-hero.com/api/phones?search=iphone')
        .then(data=>{
            let phoneDatas=data.data.data;
            // console.log(phoneData);
            let phonePrice=phoneDatas.map(phone=>{
                let slug=phone.slug;
                let price= slug.split('-')[1];
                // console.log(price);
                const phoneInfo={
                    name :phone.phone_name,
                    price: price,
                }
                return phoneInfo;
            })
            // console.log(phonePrice)
            setPhones(phonePrice);
        })
    },[])
    return (
        <div>
        <ComposedChart
          width={500}
          height={400}
          data={phones}
          margin={{
            top: 20,
            right: 20,
            bottom: 20,
            left: 20,
          }}
        >
          <CartesianGrid stroke="#f5f5f5" />
          <XAxis dataKey="name" scale="band" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="price" barSize={20} fill="#413ea0" />
          <Line type="monotone" dataKey="price" stroke="#ff7300" />
        </ComposedChart>
        </div>
    );
};

export default Phone;