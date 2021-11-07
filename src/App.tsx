import { ErrorBoundary } from "./components/ErrorBoundary";
import { Matches } from "./components/Matches";
import "./App.scss";

const App = () => {
  return (
    <div className="container matches">
      <div className="row justify-content-center">
        <div className="col">
          <ErrorBoundary>
            <Matches />
          </ErrorBoundary>
        </div>
      </div>
    </div>
  );
};

export default App;
