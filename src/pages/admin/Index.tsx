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
  responsive: true,
  plugins: {
    legend: {
      position: "top" as const,
    },
    title: {
      display: true,
      text: "Order Bar Chart",
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
      <div className="w-1/2">
        <Bar options={options} data={data} />
      </div>
      <div className="flex justify-center w-1/2 border rounded-lg">
        <div className="flex flex-col justify-center">
          <div className="text-5xl text-center">3</div>
          <ReactStars
            count={5}
            onChange={ratingChanged}
            value={3}
            size={24}
            color2={"#ffd700"}
          />
        </div>
      </div>
    </Admin>
  );
};

export default Index;
