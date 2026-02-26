import { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';
export default function UmfrageTorte({ parteien, prozente }) {

    console.log("Parteien:", parteien);
    console.log("Prozente:", prozente);

    const chartRef = useRef(null);
    const chartInstance = useRef(null);

    useEffect(() => {
        if (!parteien || !prozente || parteien.length === 0 || prozente.length === 0) return;
        chartInstance.current = new Chart(chartRef.current, {
            type: 'pie',
            data: {
                labels: parteien,
                datasets: [{
                    data: prozente,
                    backgroundColor: [
                        'rgba(255, 99, 132, 0.8)',
                        'rgba(54, 162, 235, 0.8)',
                        'rgba(255, 205, 86, 0.8)',
                        'rgba(75, 192, 192, 0.8)',
                        'rgba(153, 102, 255, 0.8)',
                        'rgba(255, 159, 64, 0.8)'
                    ]
                }]
            }
        });
        return () => {
            if (chartInstance.current) {
                chartInstance.current.destroy();
            }
        };

    }, [parteien, prozente]);




    return (
        <div style={{
            width: '50%',
            maxWidth: '1400px',
            margin: '0 auto',
            marginTop: '10px',
            minHeight: '60vh',      // ← Mindesthöhe für den Container
        }}>
            <canvas ref={chartRef}
                style={{
                    width: '100%',
                    height: '500px', // ← Feste Höhe statt 100%
                    backgroundColor: 'white',
                    padding: 0,
                    margin: 0,
                    border: 'none',
                    display: 'block'
                }}
            ></canvas>
        </div>
    );
}