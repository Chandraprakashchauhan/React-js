import React, { useEffect, useState } from 'react'
import Chart from 'react-apexcharts'
import { nameData } from '../Object';

const Stackebar = (props) => {

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
            <Chart type='bar' width={props.w} height={props.h}
                series={[
                    { name: "student", data: data, color: '#ff9933' },
                    { name: "dia", data: [300, 500, 600, 700, 100, 256], color: '#ff2233' }
                ]}
                options={{
                    title: { text: 'Stackebar', style: { fontSize: 20 } },
                    chart: { stacked: true },
                    plotOptions: {
                        // bar: { horizontal: true, }
                    },
                    stroke: { width: '3' },
                    xaxis: {
                        categories: name,
                        title: { text: 'a to f', tyle: { color: "#ff9933" } }
                    },

                    yaxis: {
                        labels: { formatter: (val) => { return `$${val}` }, style: { colors: "#ff9933" } },
                        title: { text: '0 to 6K', style: { color: "#ff9933" } }

                    },
                    legend: { position: 'top' },
                    dataLabels: { enabled: true },
                    grid: {
                        ow: true,
                        xaxis: {
                            // lines: { show: false }
                        },
                        yaxis: {
                            // lines: { show: false }
                        }
                    },
                }}
            />
        </>
    )
}

export default Stackebar