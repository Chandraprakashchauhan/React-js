import React, { useState, useEffect } from 'react';
import Chart from 'react-apexcharts';
import { nameData } from '../Object';

const Donutchart = (props) => {

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
            <Chart type='donut' width={props.w} height={props.h}
                series={data}
                options={{
                    labels: name,
                    title: { text: 'Donut', style: { fontSize: 20 } },
                    plotOptions: {
                        pie: {
                            donut: {
                                labels: {
                                    show: true,
                                    total: { show: true, fontSize: '50', color: '#ff5566', howAlways: true, }
                                },
                                size: "60",
                            }
                        }
                    },
                    dataLabels: { enabled: true },
                    noData: { text: 'Empty Data' },
                    // color: ['#ff5533', '#33ffa3', '#ffs733', '#3333ff', '#ff9933', '#778cde']
                }}
            />
        </>
    )
}

export default Donutchart