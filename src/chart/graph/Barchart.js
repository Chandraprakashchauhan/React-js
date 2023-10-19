import React, { useEffect, useState } from 'react'
import Chart from 'react-apexcharts'

import { nameData } from '../Object';








const Barchart = () => {
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

            <Chart type='bar' width={1300} height={600}
                series={[
                    { name: "student", data: data, color: '#ff9933' },
                    { name: "dia", data: [200, 500, 600, 700, 100, 256], color: '#ff2233' }
                ]}

                options={{
                    title: { text: 'Bar', style: { fontSize: 20 } },
                    subtitle: { text: 'Chart Bar' },
                    // colors: ['#ff9933'],
                    xaxis: {
                        categories: name,
                        title: { text: 'a to f', style: { color: "#ff9933" } }
                    },

                    yaxis: {
                        labels: { formatter: (val) => { return `$${val}` }, style: { colors: "#ff9933" } },
                        title: { text: '0 to 6K', style: { color: "#ff9933" } }
                    },
                    dataLabels: {
                        formatter: (val) => { return `$${val}` },
                        style: { colors: ["#fff"] }
                    }
                }}
            />






        </>
    )
}

export default Barchart