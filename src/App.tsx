import "./App.css";
import { BrowserRouter } from "react-router-dom";
import MainRouter from "./MainRouter";
import { Provider } from "react-redux";
import store from "./store";
function App() {
	return (
		<Provider store={store}>
			<BrowserRouter>
				<MainRouter />
			</BrowserRouter>
		</Provider>
	);
}

export default App;
