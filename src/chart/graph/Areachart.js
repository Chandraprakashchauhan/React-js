import React, { useEffect, useState } from 'react'
import Chart from 'react-apexcharts'
import { nameData } from '../Object';

const Areachart = (props) => {

    const [name, setName] = useState([]);
    const [data, setData] = useState([]);

    useEffect(() => {
        const names = nameData.map((e) => e.name);
        const chartData = nameData.map((e) => e.data);
        setName(names);
        setData(chartData);
    }, []);

    return (
        <>
            <Chart type='area' width={props.w} height={props.h}
                series={[
                    { name: "media", data: data, color: '#ff9933' },
                    { name: "dia", data: [300, 500, 200, 350, 100, 150], color: '#ff5566' }
                ]}
                options={{
                    title: { text: 'Area', style: { fontSize: 20 } },
                    // colors: ['#6cc1de']
                    stroke: { width: 2, curve: 'smooth' },
                    // fill: { opacity: 0, type: 'string' },
                    xaxis: { title: { text: 'Student' }, categories: name },
                    yaxis: { title: { text: 'Student', } },
                }}
            />
        </>
    )
}

export default Areachart