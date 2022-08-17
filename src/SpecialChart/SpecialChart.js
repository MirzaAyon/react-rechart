import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Bar, BarChart, Tooltip, XAxis, YAxis } from 'recharts';

const SpecialChart = () => {
    const [phones, setPhones] = useState([]);
    //age fetch martam ekhn axios marbo
    useEffect(() => {
        axios.get('https://openapi.programming-hero.com/api/phones?search=iphone')
            // .then(data => console.log(data.data.data))
            .then(data => {
                const loadedData = data.data.data;
                const phoneData = loadedData.map(phone => {
                    const parts = phone.slug.split('-')
                    const ph = {
                        name: parts[0],
                        // value: parts[1]
                        value: parseInt(parts[1])
                    };
                    return ph;

                });
                setPhones(phoneData);
                console.log(phoneData)
                //name and value are showing
                //parse korar por string theke value showing
                //data processing done

            })

    }, [])
    return (
        <BarChart width={800} height={400} data={phones}>
            <Bar dataKey="value" fill="#8884d8" />
            <XAxis dataKey='name'></XAxis>
            <Tooltip></Tooltip>
            <YAxis></YAxis>
        </BarChart>
    );
};

export default SpecialChart;