import React, { useState, useEffect } from 'react';
import Chart from 'react-apexcharts';
import { nameData } from '../Object';

const Polararea = () => {
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
            <Chart type='polarArea' width={1300} height={600}
                series={data}

                options={{
                    title: { text: 'Polar Area', style: { fontSize: 20 } },
                    labels: name,

                    stroke: {
                        width: 1,
                        colors: ['#ff9933']
                    },
                    fill: {
                        opacity: .5
                    },



                    legend: {
                        position: 'bottom'
                    },
                    plotOptions: {
                        polarArea: {
                            rings: {
                                strokeWidth: 3
                            },

                        }
                    },
                    colors: ['#ff9933', '#ff5533', '#ffd733', '#3393ff', '#ff33c8', '#766cde']



                }}

            />

        </>
    )
}

export default Polararea