import React, { useEffect, useState } from 'react';
import Chart from 'react-apexcharts';
import { nameData } from '../Object';

const Linechart = (props) => {
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
            <Chart width={props.w} height={props.h}
                series={[
                    { type: 'line', name: "media", data: data, color: '#ff9933' },
                    { name: "dia", type: 'area', data: [300, 500, 200, 350, 100, 10], color: '#ff5566' }
                ]}
                options={{
                    title: { text: 'Line', style: { fontSize: 20 } },
                    xaxis: { title: { text: 'Student' }, categories: name },
                    yaxis: { title: { text: 'Student' } },
                    stroke: { width: [3, 3], curve: 'smooth', dashArray: [0, 10] },
                    grid: { borderColor: '#ff9933' },
                }}
            />
        </>
    )
}

export default Linechart;
