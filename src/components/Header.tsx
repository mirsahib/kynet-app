import { Link } from "react-router-dom";

export default function Header() {
	return (
		<header>
			<div className="container">
				<div className="navbar-container container-flex">
					<div className="site-title">
						<Link to="/"><h1>kynet</h1></Link>
						<Link to="/items" className="site-link">
							All ads
						</Link>
					</div>
					<nav className="navbar">
						<ul className="nav-menu">
							<li className="nav-link">
								<Link to="/signup">
									<i
										className="fa fa-user"
										aria-hidden="true"
									></i>
									Sign Up
								</Link>
							</li>
							<li className="nav-link">
								<Link to="/publish">
									<i
										className="fa fa-clipboard"
										aria-hidden="true"
									></i>
									Post Ads
								</Link>
							</li>
						</ul>
						<div className="hamburger">
							<span className="bar"></span>
							<span className="bar"></span>
							<span className="bar"></span>
						</div>
					</nav>
				</div>
			</div>
		</header>
	);
}
