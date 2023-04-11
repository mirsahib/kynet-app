import { NavLink, NavLinkProps, Outlet, useMatch } from "react-router-dom";

export default function Auth() {
	const location = useMatch('/form/')

	return (
		<div className="flex justify-center  mx-auto ">
			<div className="flex flex-col lg:w-[520px] sm:w-[5/6] bg-green-600 ">
				<ul className="flex flex-row bg-green-500">
					<li className={`flex w-[50%] ${location?.pathname==='/form'?"bg-green-600":""}`} >
						<NavLink
							to={"signup"}
							className={({ isActive,isPending }) =>
								isPending ? `${style.inActive}`:
								isActive
									? `${style.active}`
									: `${style.inActive}`
							}
						>
							Sign Up
						</NavLink>
					</li>
					<li className="flex w-[50%] ">
						<NavLink
							to="login"
							className={({ isActive }) =>
								isActive
									? `${style.active}`
									: `${style.inActive}`
							}
						>
							Log In
						</NavLink>
					</li>
				</ul>
				<Outlet />
			</div>
		</div>
	);
}

const style:{[key:string]:NavLinkProps["className"]} = {
	active: "flex w-full justify-center py-4 text-white font-semibold bg-green-600",
	inActive: "flex w-full justify-center py-4 text-white font-semibold",
};
