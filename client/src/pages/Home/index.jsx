import { getHome } from "../../redux/actions/home";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

const Home = () => {
  const content = useSelector((state) => state.home);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getHome());
  }, [dispatch]);
  return <>{!content ? <p>Loading ...</p> : <p>{content}</p>}</>;
};

export default Home;
