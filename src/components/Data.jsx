import React from "react";
import { Doughnut, Bar, Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
  CategoryScale,
  LinearScale,
  BarElement,
  PointElement,
  LineElement,
} from "chart.js";
import { FaQuestion } from "react-icons/fa";

ChartJS.register(
  ArcElement,
  Tooltip,
  Legend,
  CategoryScale,
  LinearScale,
  BarElement,
  PointElement,
  LineElement
);

const Data = () => {
  const doughnutData = {
    labels: ["On-Time Departures", "On-Time Arrivals"],
    datasets: [
      {
        label: "# of Votes",
        data: [16, 21],
        backgroundColor: ["#012555", "#36A2EB"],
      },
    ],
  };
  const doughnutData1 = {
    labels: ["Log Out", "Log In"],
    datasets: [
      {
        label: "# of Votes",
        data: [16, 21],
        backgroundColor: ["#36A2EB", "#012555"],
      },
    ],
  };

  const barData = {
    labels: ["70%", "60%"],
    datasets: [
      {
        label: "# of Votes",
        data: [70, 60],
        backgroundColor: ["#012555", "#36A2EB"],

        borderWidth: 1,
      },
    ],
  };

  const lineData = {
    labels: ["01", "02", "03", "04", "05", "06", "07", "08", "09", "10"],
    datasets: [
      {
        label: "Performance",
        data: [16, 28, 34, 45, 37, 53, 58, 64, 55, 48],
        fill: false,
        backgroundColor: "#012555",
        tension: 0.4,
      },
      {
        label: "Target",
        data: [10, 24, 28, 40, 30, 50, 55, 70, 50, 45],
        fill: false,
        backgroundColor: "#3B82F6",
        tension: 0.4,
      },
    ],
  };

  return (
    <div className="p-6 bg-gray-100 space-y-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="bg-white rounded-lg shadow-lg p-6 flex flex-col items-center">
          <div className="text-4xl font-bold text-blue-500 mb-2">55</div>
          <div className="text-lg font-medium text-gray-700">
            Unique Drivers
          </div>
        </div>
        <div className="bg-white rounded-lg shadow-lg p-6 flex flex-col items-center">
          <div className="text-4xl font-bold text-blue-500 mb-2">33</div>
          <div className="text-lg font-medium text-gray-700">
            Completed Rides
          </div>
        </div>
        <div className="bg-white rounded-lg shadow-lg p-6 flex flex-col items-center">
          <div className="text-4xl font-bold text-blue-500 mb-2">22</div>
          <div className="text-lg font-medium text-gray-700">
            Boardings on Time
          </div>
        </div>
        <div className="bg-white rounded-lg shadow-lg p-6 flex flex-col items-center">
          <div className="text-4xl font-bold text-blue-500 mb-2">66</div>
          <div className="text-lg font-medium text-gray-700">
            Unique Vehicles
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 ">
        <div className="bg-white rounded-lg shadow-lg p-6 ">
          <div className="w-full h-[230px] flex flex-col items-center justify-center">
            <Doughnut data={doughnutData} />
          </div>
        </div>
        <div className="bg-white rounded-lg shadow-lg p-6 flex flex-col items-center justify-center">
          <div className="w-full h-64">
            <Bar data={barData} />
            <div>
              <h3 className="flex justify-start items-center gap-2">
                <div className="h-[15px] w-[15px] bg-blue-500 rounded-full"></div>{" "}
                Vehicle compliance
              </h3>
            </div>
            <div>
              <h3 className="flex justify-start items-center gap-2">
                <div className="h-[15px] w-[15px] bg-[#012555] rounded-full"></div>{" "}
                Driver compliance
              </h3>
            </div>
          </div>
        </div>
        <div className="bg-white rounded-lg shadow-lg p-6 flex flex-col items-center justify-center">
          <FaQuestion className="text-9xl text-blue-500 mb-4" />
          <h3 className="text-lg font-medium text-gray-700">No shows</h3>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:flex ">
        <div className="bg-white rounded-lg shadow-lg p-6 flex flex-col lg:flex-row items-center justify-between ">
          <div className="w-full lg:w-1/2 h-[180px]">
            <Line data={lineData} />
          </div>
          <div className="mt-6 lg:mt-0 lg:ml-6">
            <h3 className="text-lg font-medium text-gray-700 mb-2">
              Benefits of Analyzing seat utilization
            </h3>
            <ul className="list-disc pl-6 mt-2">
              <li>Improved Efficiency</li>
              <li>Punctuality Monitoring</li>
              <li>Shift-wise Insights</li>
              <li>Reduced Costs</li>
            </ul>
          </div>
        </div>
        <div className="bg-white rounded-lg shadow-lg p-6 flex flex-col items-center justify-center lg:w-[40%]">
          <div className="w-full h-[200px] flex flex-col items-center justify-center">
            <Doughnut data={doughnutData1} />
            <h2 className="font-bold text-2xl">Overall On-Time Arrival %</h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Data;
