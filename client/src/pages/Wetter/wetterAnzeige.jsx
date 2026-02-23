import { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';

export default function WetterAnzeige({ wetter }) {
    const chartRef = useRef(null);
    const chartInstance = useRef(null);

    useEffect(() => {
        if (!wetter || wetter.length === 0) return;

        const datum = [];
        const temperatur = [];

        for (let i = 0; i < wetter.length; i += 6) {
            datum.push(wetter[i][0]);
            temperatur.push(wetter[i][1]);
        }

        if (chartInstance.current) {
            chartInstance.current.destroy();
        }

    chartInstance.current = new Chart(chartRef.current, {
    type: 'line',
    data: {
        labels: datum,
        datasets: [{
            label: 'Temperatur',
            data: temperatur,
            borderColor: 'white',           // ← weiße Linie
            tension: 0.4,
            fill: false,
            pointRadius: 0,
            pointHitRadius: 10,
            pointHoverRadius: 5,
        }]
    },
    options: {
        responsive: true,
        maintainAspectRatio: false,
        aspectRatio: 2,
        plugins: {
            legend: {
                display: true,
                position: 'top',
                labels: {
                    color: 'white'           // ← weiße Legendenschrift
                }
            }
        },
        scales: {
            x: {
                grid: {
                    display: false            // ← KEIN Gitter auf X-Achse
                },
                ticks: {
                    color: 'white'             // ← weiße X-Achsen-Beschriftung
                }
            },
            y: {
                beginAtZero: true,
                grid: {
                    display: false            // ← KEIN Gitter auf Y-Achse
                },
                ticks: {
                    color: 'white'             // ← weiße Y-Achsen-Beschriftung
                }
            }
        }
    }
});

        return () => {
            if (chartInstance.current) {
                chartInstance.current.destroy();
            }
        };
    }, [wetter]);

return (
<div style={{
  width: '75%',
  maxWidth: '1400px',
  margin: '0 auto',
  marginTop: '100px',
  minHeight: '60vh',      // ← Mindesthöhe für den Container
}}>
<canvas
  ref={chartRef}
  style={{
    width: '100%',
    height: '500px', // ← Feste Höhe statt 100%
    backgroundColor: 'var(--color-secondary)',
    padding: 0,
    margin: 0,
    border: 'none',
    display: 'block'
  }}
></canvas>

</div>

);
}