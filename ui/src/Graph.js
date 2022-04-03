import React from 'react';
import { Bar } from "react-chartjs-2";
import { useEffect, useState } from "react";
import { Chart, registerables } from 'chart.js';
Chart.register(...registerables);

const Graph = ({}) => {
    const [chartData, setChartData] = useState({});

    const data = {
        labels: ['03-23-2022', '03-24-2022', '03-25-2022', '03-26-2022', '03-27-2022', '03-28-2022', '03-29-2022', '03-30-2022', '03-31-2022', '04-01-2022', '04-02-2022', '04-03-2022'],
        datasets:[
        {
            label: "No Stress",
            data: [1,2,3,1,2,3,1,2,3,4,1,10,11],
            backgroundColor: [
                'rgba(255, 99, 132, 0.6)'
              ],
        },
        {
            label: "Low Stress",
            data: [10,4,5,6,7,5,4,3,5,1,1,2,3],
            backgroundColor: [
                'rgba(255, 159, 64, 0.6)'
              ],
        },
        {
            label: "High Stress",
            data: [1,2,3,1,2,3,1,2,3,4,1,10,11],
            backgroundColor: [
                'rgba(255, 205, 86, 0.6)',
              ],
        }
        ]
    }

    useEffect(() => {
        setChartData(data)
      }, []);

    return (
        <div style={{display: "flex", flexDirection: "col", alignItems: "center", justifyContent: "center"}}>
            <div style ={{width: "70vw"}}>
                <Bar
            data={data}
            options={{
            plugins: {
                title: {
                display: true,
                text: "Unit 556"
                },
                legend: {
                display: true,
                position: "bottom"
            }
            },
            responsive: true,
            maintainAspectRatio: true,
            }}
        />
            </div>
            
        </div>
    )

}
export default Graph;