import "./App.css";
import { BrowserRouter } from "react-router-dom";
import MainRouter from "./MainRouter";
import { Provider } from "react-redux";
import store from "./store";
import AuthProvider from "./context/AuthContext";
function App() {
	return (
		<Provider store={store}>
			<BrowserRouter>
				<AuthProvider>
					<MainRouter />
				</AuthProvider>
			</BrowserRouter>
		</Provider>
	);
}

export default App;
