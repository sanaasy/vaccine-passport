import NavigationBar from "./components/NavigationBar";
import UploadBox from "./components/UploadBox";
import SearchPage from "./components/SearchPage";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import QRCode from "./components/QRCode";
import AcceptProof from "./components/AcceptProof/AcceptProof";

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
          <Route path="/acceptQR">
            <QRCode accept={true} />
          </Route>
          <Route path="/accept">
            <AcceptProof />
          </Route>
        </Switch>
      
    </Router>
  );
}

export default App;
