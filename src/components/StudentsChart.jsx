import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const StudentsChart = ({ students }) => {
  if (!students || students.length === 0) return null;

  // Group students by age ranges
  const ageGroups = {
    '18-20': 0,
    '21-23': 0,
    '24-26': 0,
    '27+': 0,
  };

  students.forEach((student) => {
    const age = parseInt(student.age, 10);
    if (age >= 18 && age <= 20) ageGroups['18-20']++;
    else if (age >= 21 && age <= 23) ageGroups['21-23']++;
    else if (age >= 24 && age <= 26) ageGroups['24-26']++;
    else ageGroups['27+']++;
  });

  const data = {
    labels: Object.keys(ageGroups),
    datasets: [
      {
        label: 'Number of Students',
        data: Object.values(ageGroups),
        backgroundColor: 'rgba(54, 162, 235, 0.6)',
        borderColor: 'rgba(54, 162, 235, 1)',
        borderWidth: 1,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'Students Age Distribution',
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        ticks: {
          stepSize: 1
        }
      }
    }
  };

  return (
    <div className="card bg-base-100 shadow-xl mb-6 p-4">
      <div className="card-body p-0">
        <h2 className="card-title justify-center mb-4">Analytics</h2>
        <div className="w-full max-w-lg mx-auto">
          <Bar options={options} data={data} />
        </div>
      </div>
    </div>
  );
};

export default StudentsChart;
