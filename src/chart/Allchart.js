import React from 'react';
import Barchart from './graph/Barchart';
import Areachart from './graph/Areachart';
import Donutchart from './graph/Donutchart';
import Linechart from './graph/Linechart';
import Piechart from './graph/Piechart';
import Polararea from './graph/Polararea';
import Radialbar from './graph/Radialbar';
import Stackebar from './graph/Stackebar';

const Allchart = () => {
    const width = '600';
    const height = '400';

    const charts = [
        'Barchart',
        'Areachart',
        'Donutchart',
        'Linechart',
        'Piechart',
        'Polararea',
        'Radialbar',
        'Stackebar'
    ];

    return (
        <div className="container text-center">
            <div className="row g-2">
                {charts.map((chart, index) => {
                    return (
                        <div className="col-6" key={index}>
                            {chart === 'Barchart' && <Barchart w={width} h={height} />}
                            {chart === 'Areachart' && <Areachart w={width} h={height} />}
                            {chart === 'Donutchart' && <Donutchart w={width} h={height} />}
                            {chart === 'Linechart' && <Linechart w={width} h={height} />}
                            {chart === 'Piechart' && <Piechart w={width} h={height} />}
                            {chart === 'Polararea' && <Polararea w={width} h={height} />}
                            {chart === 'Radialbar' && <Radialbar w={width} h={height} />}
                            {chart === 'Stackebar' && <Stackebar w={width} h={height} />}
                        </div>
                    )
                }
                )}
            </div>
        </div>
    );
};

export default Allchart;
