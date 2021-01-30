import EventChart from "../../components/EventChart";
import StatsChart from "../../components/StatsChart";
import { useSelector, useDispatch } from "react-redux";
import { getDailyEvents } from "../../redux/actions/events";
import { getDailyStats } from "../../redux/actions/stats";
import { useEffect } from "react";

const DailyCharts = () => {
  const stats = useSelector((state) => state.stats);
  const eventsData = useSelector((state) => state.events);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getDailyEvents());
    dispatch(getDailyStats());
  }, [dispatch]);

  return (
    <div className="mb-5">
      <h3>Daily Events Chart:</h3>
      <EventChart eventsData={eventsData} type={true} />
      <h3 className="mt-5">Daily Stats Chart:</h3>
      <StatsChart stats={stats} type={true} />
    </div>
  );
};

export default DailyCharts;
