import React, { useState, useEffect } from 'react';
import Chart from 'react-apexcharts';
import { nameData } from '../Object';

const Piechart = () => {
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

            <Chart
                type='pie'
                width={1300}
                height={600}
                series={data}


                options={{
                    labels: name,
                    title: {
                        text: 'Pie',
                        style: { fontSize: 20 }
                    },
                    subtitle: {
                        text: 'Pie Chart'
                    },
                    noData: { text: 'Empty Data' },
                    colors: ['#ff9933', '#33ffa4', '#ffd733', '#3333ff', '#ff33c8', '#766cde']

                }}
            />

        </>
    );
};

export default Piechart;
