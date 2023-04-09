import { Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home/Home";
import Items from "./pages/Items/Items";
import Publish from "./pages/Items/Publish";
import Catagory from "./pages/Items/Catagory";
import Error from "./pages/Misc/Error";
import Auth from "./pages/Users/Auth";
import Signup from "./pages/Users/Signup";
import Login from "./pages/Users/Login";
import Footer from "./components/Footer";
import Item from "./pages/Items/Item";
import ProtectedRoute from "./ProtectedRoutes";
import Profile from "./pages/Users/Profile";

export default function MainRouter() {
	return (
		<>
			<Header />
			<Routes>
				<Route path="/" element={<Home />} />
				<Route element={<ProtectedRoute/>}>
					<Route path="publish" element={<Publish/>} />
					<Route path="profile" element={<Profile/>} />
				</Route>
				<Route path="form" element={<Auth />}>
					<Route index element={<Signup />} />
					<Route path="signup" element={<Signup />} />
					<Route path="login" element={<Login />} />
				</Route>
				<Route path="items" element={<Items />} />
				<Route path="items/:catagory" element={<Catagory />} />
				<Route path="items/:catagory/:id" element={<Item />} />
				<Route path="*" element={<Error />} />
			</Routes>
			<Footer />
		</>
	);
}
