import { Link } from "react-router-dom";

export default function Header() {
	return (
		<header className="bg-green-600 py-6 mb-6">
			<nav className="flex justify-between items-center w-[90%] max-w-screen-lg  mx-auto">
				<div className="flex flex-row gap-8 items-center text-white ">
					<Link to="/">
						<h1 className="text-4xl font-semibold">kynet</h1>
					</Link>
					<Link to="/items" className="site-link">
						All ads
					</Link>
				</div>
				<ul className="flex gap-8 text-white">
					<li className="font-semibold">
						<Link to="/form">
							<i className="fa fa-user mr-1" aria-hidden="true"></i>
							Sign Up
						</Link>
					</li>
					<li className="font-semibold">
						<Link to="/publish">
							<i
								className="fa fa-clipboard mr-1"
								aria-hidden="true"
							></i>
							Post Ads
						</Link>
					</li>
				</ul>
			</nav>
		</header>
	);
}
