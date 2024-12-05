import React from 'react';
import Chart from 'react-apexcharts';

const regionData = [
    { region: 'Tashkent', deliveries: 120 },
    { region: 'Samarqand', deliveries: 95 },
    { region: 'Bukhara', deliveries: 80 },
    { region: 'Namangan', deliveries: 70 },
    { region: 'Fergana', deliveries: 65 },
    { region: 'Andijan', deliveries: 50 },
    { region: 'Xorezm', deliveries: 40 },
];


const monthlyData = [
    { month: 'January', sales: 200 },
    { month: 'February', sales: 180 },
    { month: 'March', sales: 220 },
    { month: 'April', sales: 240 },
    { month: 'May', sales: 260 },
    { month: 'June', sales: 300 },
    { month: 'July', sales: 300 },
    { month: 'August', sales: 300 },
    { month: 'September', sales: 300 },
    { month: 'October', sales: 300 },
    { month: 'November', sales: 300 },
    { month: 'December', sales: 300 },
];

const StatisticsPage = () => {
    const regionChartOptions = {
        chart: {
            type: 'bar',
            height: 350,
        },
        plotOptions: {
            bar: {
                horizontal: false,
                columnWidth: '55%',
                endingShape: 'rounded',
            },
        },
        dataLabels: {
            enabled: false,
        },
        xaxis: {
            categories: regionData.map((item) => item.region),
        },
        yaxis: {
            title: {
                text: 'Steaks Sold by Region',
            },
        },
        grid: {
            borderColor: '#dddddd',
            strokeDashArray: 5,
        },
        fill: {
            opacity: 1,
        },
        colors: ['#FF5733'], // Цвет баров
    };

    const regionChartSeries = [
        {
            name: 'Sold',
            data: regionData.map((item) => item.deliveries),
        },
    ];

    const monthlyChartOptions = {
        chart: {
            type: 'bar',
            height: 350,
        },
        plotOptions: {
            bar: {
                horizontal: false,
                columnWidth: '55%',
                endingShape: 'rounded',
            },
        },
        dataLabels: {
            enabled: false,
        },
        xaxis: {
            categories: monthlyData.map((item) => item.month),
        },
        yaxis: {
            title: {
                text: 'Steaks Sold by Month',
            },
        },
        grid: {
            borderColor: '#dddddd',
            strokeDashArray: 5,
        },
        fill: {
            opacity: 1,
        },
        colors: ['#2c8cff'],
    };

    const monthlyChartSeries = [
        {
            name: 'Sales',
            data: monthlyData.map((item) => item.sales),
        },
    ];

    return (
        <div className="p-8">
            <h1 className="text-4xl my-10 font-bold text-center">Statistics</h1>

            <div className="flex gap-10 justify-between">
                {/* Таблица */}
                <div className="w-[45%] border">
                    <h2 className="text-xl text-center font-bold p-3 text-gray-800">
                        Sales Data by Region
                    </h2>
                    <div className="overflow-hidden border-gray-100">
                        <table className="min-w-full border-collapse bg-white">
                            <thead className="bg-gray-100 border-b">
                            <tr>
                                <th className="px-6 py-3 border-r text-left text-sm font-semibold text-gray-600 uppercase tracking-wider">
                                    Region
                                </th>
                                <th className="px-6 py-3 text-left text-sm font-semibold text-gray-600 uppercase tracking-wider">
                                    Sold
                                </th>
                            </tr>
                            </thead>
                            <tbody>
                            {regionData.map((item, index) => (
                                <tr
                                    key={index}
                                    className={`border-b ${
                                        index % 2 === 0 ? 'bg-gray-50' : 'bg-white'
                                    }`}
                                >
                                    <td className="px-6 border-r py-4 text-sm font-medium text-gray-800">
                                        {item.region}
                                    </td>
                                    <td className="px-6 py-4 text-sm text-gray-600">
                                        {item.deliveries}
                                    </td>
                                </tr>
                            ))}
                            </tbody>
                        </table>
                    </div>
                </div>

                {/* Барчарт по регионам */}
                <div className="w-[45%]">
                    <Chart
                        options={regionChartOptions}
                        series={regionChartSeries}
                        type="bar"
                        height={500}
                    />
                </div>
            </div>

            {/* Таблица и Барчарт по месяцам */}
            <div className="mt-10 relative flex gap-10">
                {/* Таблица по месяцам */}
                <div className="w-[45%] border">
                    <h2 className="text-xl text-center font-bold p-3 text-gray-800">
                        Sales Data by Month
                    </h2>
                    <div className="overflow-hidden border-gray-100">
                        <table className="min-w-full border-collapse bg-white">
                            <thead className="bg-gray-100 border-b">
                            <tr>
                                <th className="px-6 py-3 border-r text-left text-sm font-semibold text-gray-600 uppercase tracking-wider">
                                    Month
                                </th>
                                <th className="px-6 py-3 text-left text-sm font-semibold text-gray-600 uppercase tracking-wider">
                                    Sales
                                </th>
                            </tr>
                            </thead>
                            <tbody>
                            {monthlyData.map((item, index) => (
                                <tr
                                    key={index}
                                    className={`border-b ${
                                        index % 2 === 0 ? 'bg-gray-50' : 'bg-white'
                                    }`}
                                >
                                    <td className="px-6 border-r py-4 text-sm font-medium text-gray-800">
                                        {item.month}
                                    </td>
                                    <td className="px-6 py-4 text-sm text-gray-600">
                                        {item.sales}
                                    </td>
                                </tr>
                            ))}
                            </tbody>
                        </table>
                    </div>
                </div>

                {/* Барчарт по месяцам */}
                <div className="w-[100%] sticky top-0">
                    <Chart
                        options={monthlyChartOptions}
                        series={monthlyChartSeries}
                        type="bar"
                        height={500}
                    />
                </div>
            </div>
        </div>
    );
};

export default StatisticsPage;
