import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';


const Chart = () => {
    //data
    const students = [    {'id': 1, 'math': 85, 'physics': 78, 'chemistry': 90},    {'id': 2, 'math': 72, 'physics': 89, 'chemistry': 76},    {'id': 3, 'math': 93, 'physics': 87, 'chemistry': 82},    {'id': 4, 'math': 80, 'physics': 76, 'chemistry': 85},    {'id': 5, 'math': 68, 'physics': 91, 'chemistry': 78},    {'id': 6, 'math': 92, 'physics': 83, 'chemistry': 89},    {'id': 7, 'math': 76, 'physics': 82, 'chemistry': 77},    {'id': 8, 'math': 88, 'physics': 94, 'chemistry': 92},    {'id': 9, 'math': 81, 'physics': 75, 'chemistry': 83},    {'id': 10, 'math': 79, 'physics': 89, 'chemistry': 87}]

    return (
          
            <div>
              <LineChart
                width={500}
                height={300}
                data={students}
                margin={{
                  top: 5,
                  right: 30,
                  left: 20,
                  bottom: 5,
                }}
              >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="math" stroke="#8884d8" activeDot={{ r: 8 }} />
                <Line type="monotone" dataKey="physics" stroke="#82ca9d" />
              </LineChart>
              
                <div>
                  <LineChart
                    layout="vertical"
                    width={500}
                    height={300}
                    data={students}
                    margin={{
                      top: 20,
                      right: 30,
                      left: 20,
                      bottom: 5,
                    }}
                  >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis type="number" />
                    <YAxis dataKey="name" type="category" />
                    <Tooltip />
                    <Legend />
                    <Line dataKey="math" stroke="#8884d8" />
                    <Line dataKey="chemistry" stroke="#82ca9d" />
                  </LineChart>
                </div>
              
            </div>

            
        
    );
};

export default Chart;