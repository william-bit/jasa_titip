import Admin from "../../components/layouts/Admin";
import ReactStars from "react-stars";

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  maintainAspectRatio: false,
  responsive: true,
  plugins: {
    legend: {
      position: "top" as const,
    },
    title: {
      display: true,
      text: "Total Transaction",
    },
  },
};

const labels = ["January", "February", "March", "April", "May", "June", "July"];

export const data = {
  labels,
  datasets: [
    {
      label: "Order Count",
      data: labels.map(() => Math.random() * 100),
      backgroundColor: "rgba(255, 99, 132, 0.5)",
    },
  ],
};

const ratingChanged = (newRating: number) => {
  console.log(newRating);
};

const Index = () => {
  return (
    <Admin>
      <div className="flex flex-col w-full h-full">
        <div className="flex justify-center w-full border rounded-lg">
          <div className="flex flex-col justify-center p-4">
            <div className="mt-5 text-5xl text-center">Ranting</div>
            <div className="mt-6 text-5xl text-center">3</div>
            <div className="flex justify-center">
              <ReactStars
                count={5}
                onChange={ratingChanged}
                value={3}
                size={24}
                color2={"#ffd700"}
              />
            </div>
          </div>
        </div>
        <div className="h-80">
          <Bar options={options} data={data} />
        </div>
      </div>
    </Admin>
  );
};

export default Index;
