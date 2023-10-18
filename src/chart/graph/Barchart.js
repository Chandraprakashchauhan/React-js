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
            <div className='float-start m-5'>
                <Chart type='bar' width={1200} height={600}
                    series={[
                        {
                            name: "media",
                            data: data
                        }
                    ]} options={{
                        title: {
                            text: 'Bar',
                            style: { fontSize: 20 }
                        },

                        subtitle: {
                            text: 'Chart Bar '
                        },

                        colors: ['#ff9933'],


                        xaxis: {

                            categories: name,
                            title: {
                                text: 'a to f',
                                style: { color: "#ff9933" }
                            }
                        },

                        yaxis: {
                            labels: {
                                formatter: (val) => { return `$${val}` },
                                style: { colors: "#ff9933" }
                            },
                            title: {
                                text: '0 to 6K',
                                style: { color: "#ff9933" }
                            }

                        },
                        dataLabels: {
                            formatter: (val) => { return `$${val}` },
                            style: {
                                colors: ["#fff"]
                            }
                        }

                    }}
                > </Chart>



            </div>
        </>
    )
}

export default Barchart