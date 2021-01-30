import Router from "./route";
import { BrowserRouter } from "react-router-dom";
import { Container } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { Provider } from "react-redux";
import store from "./redux/store";
import Navigation from "./components/Navigation";

const App = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Navigation />
        <Container>
          <Router />
        </Container>
      </BrowserRouter>
    </Provider>
  );
};

export default App;
