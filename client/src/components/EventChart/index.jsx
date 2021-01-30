import { Bar, Line } from "react-chartjs-2";
import { useState, useEffect } from "react";
import moment from "moment";

const EventChart = ({ eventsData, type }) => {
  const [date, setDate] = useState([]);
  const [events, setEvents] = useState([]);

  useEffect(() => {
    setDate(
      eventsData.map((event) =>
        moment(event.date).add(1, "days").format("DD/MM/YYYY")
      )
    );
    setEvents(eventsData.map((event) => event.events));
  }, [eventsData]);

  const data = {
    labels: date,
    datasets: [
      {
        label: "Events",
        data: events,
        backgroundColor: "green",
        borderColor: "black",
        borderWidth: 1,
      },
    ],
  };
  const options = {
    elements: {
      point: {
        radius: 0,
      },
    },
  };
  return (
    <>{type ? <Bar data={data} /> : <Line data={data} options={options} />}</>
  );
};

export default EventChart;
