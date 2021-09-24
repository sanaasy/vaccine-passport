import NavigationBar from "./components/NavigationBar";
import UploadBox from "./components/UploadBox";
import QRCode from "./components/QRCode";
import SearchPage from "./components/SearchPage";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    <Router>
        <NavigationBar />

        <Switch>
          <Route path="/home">
            <UploadBox />
          </Route>
          <Route path="/search">
            <SearchPage />
          </Route>
          {/* <Route path="/">
            <Home />
          </Route> */}
        </Switch>
      
    </Router>
  );
}

export default App;
