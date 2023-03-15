import "./App.css";
import Home from "./pages/Home";
import { BrowserRouter } from "react-router-dom";
import MainRouter from "./MainRouter";
function App() {
	return (
		<BrowserRouter>
      <MainRouter/>
    </BrowserRouter>
	);
}

export default App;
