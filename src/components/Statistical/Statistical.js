import 'chart.js/auto';
import { Chart } from 'react-chartjs-2';

function Statistical() {

    const rooms = [
        'Java',
        'ASP.net',
        'PHP',
        'OOP',
        'C#',
        'Lập trình Web',
    ];

    const COLORS = [
        '#4dc9f6',
        '#f67019',
        '#f53794',
        '#537bc4',
        '#acc236',
        '#166a8f',
        '#00a950',
        '#58595b',
        '#8549ba'
    ];

    const data = {
        labels: rooms,
        datasets: [
            {
                label: 'Statistic Month',
                data: [20, 80, 30, 50, 15, 70, 100],
                borderColor: 'red',
                backgroundColor: COLORS,
                stack: 'combined',
                type: 'bar',
            },
        ],
    };

    return (
        <div className="wrapper pie-chart">
            <Chart type="line" data={data} />
        </div>
    );
}

export default Statistical;
