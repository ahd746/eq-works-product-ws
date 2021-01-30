import EventChart from "../../components/EventChart";
import StatsChart from "../../components/StatsChart";
import { useSelector, useDispatch } from "react-redux";
import { getHourlyEvents } from "../../redux/actions/events";
import { getHourlyStats } from "../../redux/actions/stats";
import { useEffect } from "react";

const HourlyCharts = () => {
  const stats = useSelector((state) => state.stats);
  const eventsData = useSelector((state) => state.events);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getHourlyEvents());
    dispatch(getHourlyStats());
  }, [dispatch]);

  return (
    <div className="mb-5">
      <h3>Hourly Events Chart:</h3>
      <EventChart eventsData={eventsData} type={false} />
      <h3 className="mt-5">Hourly Stats Chart:</h3>
      <StatsChart stats={stats} type={false} />
    </div>
  );
};

export default HourlyCharts;
