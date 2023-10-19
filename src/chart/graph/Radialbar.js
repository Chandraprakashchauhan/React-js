import React, { useState, useEffect } from 'react';
import Chart from 'react-apexcharts';
import { nameData } from '../Object';

const Radialbar = () => {
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
                type='radialBar'
                width={1300}
                height={600}
                series={[95, 30, 90, 50, 90, 50]}

                options={{
                    // colors: ['#1ab7ea', '#0084ff', '#39539E', '#0077B5'],
                    labels: name,


                    title: {
                        text: 'RadialBar',
                        style: { fontSize: 20 }
                    },
                    plotOptions: {
                        radialBar: {
                            offsetY: 0,
                            offsetX: 0,
                            startAngle: 0,
                            endAngle: 360,
                            hollow: {
                                margin: 3,
                                size: '20%',
                                background: 'transparent',
                                // image: 'https://media.architecturaldigest.com/photos/57c7003fdc03716f7c8289dd/16:9/w_1280,c_limit/IMG%20Worlds%20of%20Adventure%20-%201.jpg',
                            },
                            dataLabels: {
                                name: {
                                    show: true,
                                    fontSize: '30px'
                                },
                                value: {
                                    // show: false,
                                    fontSize: '20px'
                                },
                                total: {
                                    show: true,
                                    label: 'Total',
                                    formatter: function (w) { return 400 }
                                }

                            },
                        }
                    },


                    legend: {
                        show: true,
                        floating: true,
                        fontSize: '16px',
                        position: 'left',
                        offsetX: 300,
                        offsetY: 60,
                        labels: {
                            useSeriesColors: true,
                        },
                    },

                    dataLabels: {
                        enabled: true
                    },

                }
                }
            />
        </>
    );
};

export default Radialbar;
