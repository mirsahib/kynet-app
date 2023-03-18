import { Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import Items from "./pages/Items";
import Publish from "./pages/Publish";
import Catagory from "./pages/Catagory";
import Error from "./pages/Error";
import Auth from "./pages/Auth";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import Footer from "./components/Footer";
import Item from "./pages/Item";

export default function MainRouter() {
	return (
		<>
			<Header />
			<Routes>
				<Route path="*" element={<Error />} />
				<Route path="/" element={<Home />} />
				<Route path="publish" element={<Publish />} />
				<Route path="auth" element={<Auth />}>
					<Route index element={<Signup />} />
					<Route path="signup" element={<Signup />} />
					<Route path="login" element={<Login />} />
				</Route>
				<Route path="items" element={<Items />} />
				<Route path="items/:catagory" element={<Catagory />} />
				<Route path="items/:catagory/:id" element={<Item/>}/>
			</Routes>
			<Footer/>
		</>
	);
}
