import { Link } from "react-router-dom";

export default function Home() {
	return (
		<div className="flex items-center  max-w-screen-lg  mx-auto">
			{/* <div className="search-bar">
				<div className="search-field">
					<input
						type="text"
						placeholder="What are you looking for"
						className="search-input"
					/>
					<button>
						<i
							className="fa fa-search fa-2x"
							aria-hidden="true"
						></i>
					</button>
				</div>
			</div> */}
			<main role="main">
				<section className="catagory">
					<div className="catagory-title">
						<h5>Browse item by catagory</h5>
						<Link to="" className="see-more">
							See All
						</Link>
					</div>
					<ul className="horizontal-menu catagory-menu">
						<li className="horizontal-list catagory-list">
							<Link to="/items/mobile">
								<div className="cat-icon">
									<svg
										width="32"
										height="32"
										viewBox="0 0 24 24"
										className="svg-wrapper--8ky9e"
									>
										<defs>
											<path
												id="mobiles_svg__a"
												d="M0 .76h12v24H0z"
											></path>
											<path
												id="mobiles_svg__c"
												d="M0 25h12V1.24H0z"
											></path>
											<path
												d="M8 7.096c0 .575-.418 1.042-.934 1.042H.934C.418 8.138 0 7.67 0 7.096V1.179C0 .604.418.138.934.138h6.132C7.582.138 8 .604 8 1.179v5.917z"
												id="mobiles_svg__e"
											></path>
										</defs>
										<g
											transform="translate(6 -1)"
											fill="none"
											fill-rule="evenodd"
										>
											<g transform="translate(0 .24)">
												<mask
													id="mobiles_svg__b"
													fill="#fff"
												>
													<use xlinkHref="#mobiles_svg__a"></use>
												</mask>
												<path
													d="M2.595 4.101V2.06A1.298 1.298 0 1 0 0 2.06V21.73c0 3.386 2.686 3.019 6 3.019s6 .367 6-3.019V6.35c0-1.242-.965-2.249-2.155-2.249h-7.25z"
													fill="#59BCD1"
													mask="url(#mobiles_svg__b)"
												></path>
											</g>
											<path
												d="M3.638 18.643a.456.456 0 0 1-.455.456H1.778a.456.456 0 0 1-.455-.456V17.24c0-.25.204-.455.455-.455h1.405c.25 0 .455.204.455.455v1.404z"
												fill="#2CA4A9"
											></path>
											<path
												d="M3.183 16.784H1.778a.456.456 0 0 0-.455.455v.862c0-.252.204-.456.455-.456h1.405c.25 0 .455.204.455.456v-.862a.456.456 0 0 0-.455-.455"
												fill="#2A8F9E"
											></path>
											<path
												d="M10.914 18.643a.456.456 0 0 1-.455.456H9.054a.455.455 0 0 1-.455-.456V17.24c0-.25.204-.455.455-.455h1.405c.25 0 .455.204.455.455v1.404z"
												fill="#2CA4A9"
											></path>
											<path
												d="M10.458 16.784H9.054a.456.456 0 0 0-.455.455v.862c0-.252.204-.456.455-.456h1.404c.251 0 .456.204.456.456v-.862a.456.456 0 0 0-.456-.455"
												fill="#2A8F9E"
											></path>
											<path
												d="M7.276 18.643a.456.456 0 0 1-.455.456H5.416a.455.455 0 0 1-.455-.456V17.24c0-.25.204-.455.455-.455H6.82c.25 0 .455.204.455.455v1.404z"
												fill="#2CA4A9"
											></path>
											<path
												d="M6.82 16.784H5.416a.456.456 0 0 0-.455.455v.862c0-.252.204-.456.455-.456H6.82c.252 0 .456.204.456.456v-.862a.456.456 0 0 0-.456-.455"
												fill="#2A8F9E"
											></path>
											<path
												d="M3.638 22.281a.456.456 0 0 1-.455.456H1.778a.456.456 0 0 1-.455-.456v-1.404c0-.25.204-.455.455-.455h1.405c.25 0 .455.204.455.455v1.404z"
												fill="#2CA4A9"
											></path>
											<path
												d="M3.183 20.422H1.778a.456.456 0 0 0-.455.455v.862c0-.252.204-.456.455-.456h1.405c.25 0 .455.204.455.456v-.862a.456.456 0 0 0-.455-.455"
												fill="#2A8F9E"
											></path>
											<path
												d="M10.914 22.281a.456.456 0 0 1-.455.456H9.054a.455.455 0 0 1-.455-.456v-1.404c0-.25.204-.455.455-.455h1.405c.25 0 .455.204.455.455v1.404z"
												fill="#2CA4A9"
											></path>
											<path
												d="M10.458 20.422H9.054a.456.456 0 0 0-.455.455v.862c0-.252.204-.456.455-.456h1.404c.251 0 .456.204.456.456v-.862a.456.456 0 0 0-.456-.455"
												fill="#2A8F9E"
											></path>
											<path
												d="M7.276 22.281a.456.456 0 0 1-.455.456H5.416a.455.455 0 0 1-.455-.456v-1.404c0-.25.204-.455.455-.455H6.82c.25 0 .455.204.455.455v1.404z"
												fill="#2CA4A9"
											></path>
											<path
												d="M5.416 20.422a.456.456 0 0 0-.455.455v.862c0-.252.204-.456.455-.456H6.82c.252 0 .456.204.456.456v-.862a.456.456 0 0 0-.456-.455H5.416z"
												fill="#2A8F9E"
											></path>
											<mask
												id="mobiles_svg__d"
												fill="#fff"
											>
												<use xlinkHref="#mobiles_svg__c"></use>
											</mask>
											<path
												fill="#2CA4A9"
												mask="url(#mobiles_svg__d)"
												d="M0 4h2.6V3H0z"
											></path>
											<g mask="url(#mobiles_svg__d)">
												<g transform="translate(2 6.862)">
													<mask
														id="mobiles_svg__f"
														fill="#fff"
													>
														<use xlinkHref="#mobiles_svg__e"></use>
													</mask>
													<use
														fill="#F1F0E5"
														xlinkHref="#mobiles_svg__e"
													></use>
													<path
														d="M.443 0C.313 0 .191.026.075.067l8.493 8.219c.212-.204.346-.49.346-.807V1.12A1.12 1.12 0 0 0 7.794 0H.444z"
														fill="#E4E3D7"
														mask="url(#mobiles_svg__f)"
													></path>
												</g>
											</g>
										</g>
									</svg>
								</div>
								<div className="cat-info">
									<p>Mobiles & Smartphone</p>
									<span>2312 ads</span>
								</div>
							</Link>
						</li>
						<li className="horizontal-list catagory-list">
							<Link to="/items/home">
								<div className="cat-icon">
									<svg
										width="32"
										height="32"
										viewBox="0 0 24 24"
										className="svg-wrapper--8ky9e"
									>
										<defs>
											<path
												id="home_svg__a"
												d="M0 .113h19.625v5.815H0z"
											></path>
											<path
												id="home_svg__c"
												d="M0 .261h19.625v14.9H0z"
											></path>
											<path
												id="home_svg__e"
												d="M.135.129H4.86v1.453H.135z"
											></path>
											<path
												id="home_svg__g"
												d="M.26.129h4.725v1.453H.26z"
											></path>
										</defs>
										<g fill="none" fill-rule="evenodd">
											<path
												fill="#2E4A74"
												d="M4.18 18.435h15.265V8.986H4.18z"
											></path>
											<path
												fill="#7F727B"
												d="M2.727 8.26h18.171V5.351H2.728z"
											></path>
											<path
												fill="#006750"
												d="M3.082 5.458h17.73V1.106H3.082z"
											></path>
											<path
												fill="#2A8F9E"
												d="M6.208 8.26L4.923 9.543l4.527 4.527h2.57zM9.707 8.516l-.771.771 4.783 4.784h1.542z"
											></path>
											<g transform="translate(2 .15)">
												<mask
													id="home_svg__b"
													fill="#fff"
												>
													<use xlinkHref="#home_svg__a"></use>
												</mask>
												<path
													d="M16.718 4.111a1.09 1.09 0 1 1 0-2.181 1.09 1.09 0 0 1 0 2.181m-2.908 0a1.09 1.09 0 1 1 0-2.18 1.09 1.09 0 0 1 0 2.18m-8.359 0h-2.18a1.09 1.09 0 1 1 0-2.18h2.18a1.09 1.09 0 0 1 0 2.18M18.171.113H1.454C.65.113 0 .764 0 1.567v2.908c0 .802.65 1.453 1.454 1.453H18.17c.803 0 1.454-.65 1.454-1.453V1.567c0-.803-.65-1.454-1.454-1.454"
													fill="#009F7F"
													mask="url(#home_svg__b)"
												></path>
											</g>
											<g transform="translate(2 7.271)">
												<mask
													id="home_svg__d"
													fill="#fff"
												>
													<use xlinkHref="#home_svg__c"></use>
												</mask>
												<path
													d="M16.718 8.256c0 .803-.651 1.454-1.454 1.454H4.361c-.803 0-1.454-.65-1.454-1.454v-4.36c0-.803.651-1.454 1.454-1.454h10.903c.803 0 1.454.65 1.454 1.453v4.361zM18.17.261H1.454C.65.261 0 .911 0 1.715v11.993c0 .803.65 1.454 1.454 1.454H18.17c.803 0 1.454-.651 1.454-1.454V1.715c0-.803-.65-1.454-1.454-1.454z"
													fill="#E4E3D7"
													mask="url(#home_svg__d)"
												></path>
											</g>
											<g transform="translate(3.319 22.304)">
												<mask
													id="home_svg__f"
													fill="#fff"
												>
													<use xlinkHref="#home_svg__e"></use>
												</mask>
												<path
													d="M4.86.129v.727a.727.727 0 0 1-.727.727H.862A.727.727 0 0 1 .135.856V.129"
													fill="#7F727B"
													mask="url(#home_svg__f)"
												></path>
											</g>
											<g transform="translate(15.187 22.304)">
												<mask
													id="home_svg__h"
													fill="#fff"
												>
													<use xlinkHref="#home_svg__g"></use>
												</mask>
												<path
													d="M4.985.129v.727a.727.727 0 0 1-.727.727H.988A.727.727 0 0 1 .26.856V.129"
													fill="#7F727B"
													mask="url(#home_svg__h)"
												></path>
											</g>
											<path
												d="M5.27 2.08h2.181a1.09 1.09 0 0 1 0 2.181h-2.18a1.09 1.09 0 1 1 0-2.18M2 1.717v2.908c0 .803.65 1.454 1.454 1.454h8.359V.264h-8.36C2.652.264 2 .914 2 1.717"
												fill="#008D70"
											></path>
											<path
												d="M2 8.986v11.993c0 .803.651 1.454 1.454 1.454h8.359V16.98H6.36c-.803 0-1.454-.65-1.454-1.453v-4.361c0-.803.651-1.454 1.454-1.454h5.452v-2.18h-8.36C2.652 7.532 2 8.182 2 8.985"
												fill="#C7C7BD"
											></path>
										</g>
									</svg>{" "}
								</div>
								<div className="cat-info">
									<p>Homes & livings</p>
									<span>2312 ads</span>
								</div>
							</Link>
						</li>
						<li className="horizontal-list catagory-list">
							<Link to="/items/electronics">
								<div className="cat-icon">
									<svg
										width="32"
										height="32"
										viewBox="0 0 24 24"
										className="svg-wrapper--8ky9e"
									>
										<g fill="none" fill-rule="evenodd">
											<path
												d="M1 2h22a1 1 0 0 1 1 1v14.8a1 1 0 0 1-1 1H1a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1z"
												fill="#29394C"
											></path>
											<path
												d="M2.2 3.2h19.6a1 1 0 0 1 1 1v12.4a1 1 0 0 1-1 1H2.2a1 1 0 0 1-1-1V4.2a1 1 0 0 1 1-1z"
												fill="#E6E7E8"
											></path>
											<path
												d="M20.444 3.2L5.993 17.6H2.2a1 1 0 0 1-1-1V4.2a1 1 0 0 1 1-1h18.244z"
												fill="#FFF"
												opacity="0.4"
											></path>
											<path
												d="M3 20h18a.6.6 0 0 1 0 1.2H3A.6.6 0 0 1 3 20z"
												fill="#29394C"
											></path>
											<path
												fill="#27323F"
												d="M9.6 18.8h3.6V20H9.6z"
											></path>
										</g>
									</svg>
								</div>
								<div className="cat-info">
									<p>Electronics</p>
									<span>2312 ads</span>
								</div>
							</Link>
						</li>
						<li className="horizontal-list catagory-list">
							<Link to="/items/cars">
								<div className="cat-icon">
									<svg
										width="32"
										height="32"
										viewBox="0 0 24 24"
										className="svg-wrapper--8ky9e"
									>
										<defs>
											<path
												id="vehicles_svg__a"
												d="M.032.03H21.86v17.244H.032z"
											></path>
											<path
												id="vehicles_svg__c"
												d="M.146.03H11.06v17.244H.146z"
											></path>
										</defs>
										<g fill="none" fill-rule="evenodd">
											<path
												d="M0 8.571c0 .73.592 1.323 1.323 1.323h1.984a1.323 1.323 0 0 0 0-2.646H1.323C.593 7.248 0 7.841 0 8.571M19.182 8.571c0 .73.592 1.323 1.323 1.323h1.984a1.323 1.323 0 0 0 0-2.646h-1.984c-.73 0-1.323.593-1.323 1.323"
												fill="#00997A"
											></path>
											<g transform="translate(.96 2.21)">
												<mask
													id="vehicles_svg__b"
													fill="#fff"
												>
													<use xlinkHref="#vehicles_svg__a"></use>
												</mask>
												<path
													d="M21.847 11.52c-.041-.391-.354-2.745-.8-3.433l-.84-2.766S19.025 1.044 16.65.545C15.02.203 13.59.022 10.946.03 8.302.022 6.872.203 5.24.545c-2.375.499-3.555 4.776-3.555 4.776l-.84 2.766c-.447.688-.76 3.042-.801 3.433H.039v5.38l-.007.374H21.86l-.008-.374v-5.38h-.005z"
													fill="#009F7F"
													mask="url(#vehicles_svg__b)"
												></path>
											</g>
											<g transform="translate(11.76 2.21)">
												<mask
													id="vehicles_svg__d"
													fill="#fff"
												>
													<use xlinkHref="#vehicles_svg__c"></use>
												</mask>
												<path
													d="M10.246 8.087l-.84-2.766S8.226 1.044 5.851.545C4.22.203 2.79.022.146.03v17.244H11.06l-.008-.374v-5.38h-.005c-.041-.391-.354-2.745-.8-3.433"
													fill="#008D70"
													mask="url(#vehicles_svg__d)"
												></path>
											</g>
											<path
												d="M3.969 15.516a1.323 1.323 0 1 1 0-2.647 1.323 1.323 0 0 1 0 2.647"
												fill="#E4E3D7"
											></path>
											<path
												d="M4.673 9.894c-.437 0-.402-.455-.402-.455S5.443 5.905 5.518 5.7a.658.658 0 0 1 .55-.436h11.61c.052 0 .41.057.548.436a806.05 806.05 0 0 1 1.247 3.74s.102.454-.335.454H4.673z"
												fill="#2E4A74"
											></path>
											<path
												d="M18.85 14.194a1.323 1.323 0 1 1 2.648 0 1.323 1.323 0 0 1-2.647 0"
												fill="#E4E3D7"
											></path>
											<path
												d="M19.513 19.485v.973c0 .924.74 1.672 1.653 1.672s1.654-.748 1.654-1.672v-.973M.992 19.485v.973c0 .924.74 1.672 1.654 1.672.913 0 1.653-.748 1.653-1.672v-.973"
												fill="#2A456D"
											></path>
											<path
												d="M16.867 16.839c0 .73-.548 1.323-1.225 1.323H8.17c-.677 0-1.225-.592-1.225-1.323 0-.73.548-1.323 1.225-1.323h7.472c.677 0 1.225.592 1.225 1.323"
												fill="#006750"
											></path>
											<path
												d="M11.906 14.193v-4.3H6.35c.138 1.079.939 4.3 5.555 4.3"
												fill="#008D70"
											></path>
											<path
												d="M11.906 14.193v-4.3h5.555c-.139 1.079-.939 4.3-5.555 4.3"
												fill="#009F7F"
											></path>
											<path
												d="M5.656 5.472l3.43 3.43h2.235L7.683 5.264H6.068c-.04 0-.25.032-.412.208M12.798 8.902h1.341l-3.638-3.638H9.16z"
												fill="#2A8F9E"
											></path>
										</g>
									</svg>
								</div>
								<div className="cat-info">
									<p>Cars</p>
									<span>2312 ads</span>
								</div>
							</Link>
						</li>
						<li className="horizontal-list catagory-list">
							<Link to="/items/property">
								<div className="cat-icon">
									<svg
										width="32"
										height="32"
										viewBox="0 0 24 24"
										className="svg-wrapper--8ky9e"
									>
										<defs>
											<path
												id="property_svg__a"
												d="M0 .086h23.866v13.638H0z"
											></path>
											<path
												id="property_svg__c"
												d="M0 .086h11.933v13.638H0z"
											></path>
										</defs>
										<g fill="none" fill-rule="evenodd">
											<path
												d="M9.206 10.122c0 .753-.611 1.364-1.364 1.364h-3.41c-.753 0-1.363-.61-1.363-1.364V3.303c0-.753.61-1.364 1.363-1.364h3.41c.753 0 1.364.611 1.364 1.364v6.82z"
												fill="#979391"
											></path>
											<path
												d="M6.137 1.94H4.432c-.753 0-1.363.61-1.363 1.363v6.82c0 .752.61 1.363 1.363 1.363h1.705V1.94z"
												fill="#84807F"
											></path>
											<path
												d="M11.933 3.644l-8.864 9.48v8.825c0 .812.661 1.47 1.477 1.47H19.32c.816 0 1.478-.658 1.478-1.47v-8.824l-8.865-9.48z"
												fill="#D8D7CC"
											></path>
											<path
												d="M3.069 21.949c0 .812.661 1.47 1.477 1.47h7.387V3.644l-8.864 9.48v8.825z"
												fill="#C7C7BD"
											></path>
											<g transform="translate(0 .162)">
												<mask
													id="property_svg__b"
													fill="#fff"
												>
													<use xlinkHref="#property_svg__a"></use>
												</mask>
												<path
													d="M22.162 13.724c-.437 0-.873-.167-1.206-.5l-9.023-9.022-9.023 9.022a1.704 1.704 0 1 1-2.41-2.41L10.728.585a1.704 1.704 0 0 1 2.41 0l10.229 10.229a1.704 1.704 0 0 1-1.205 2.91"
													fill="#F05A4E"
													mask="url(#property_svg__b)"
												></path>
											</g>
											<path
												d="M14.66 21.033c0 .565-.457 1.023-1.022 1.023h-3.41a1.023 1.023 0 0 1-1.022-1.023v-7.501c0-.565.457-1.023 1.022-1.023h3.41c.565 0 1.023.458 1.023 1.023v7.5z"
												fill="#F05A4E"
											></path>
											<path
												d="M11.933 12.509h-1.705c-.565 0-1.022.458-1.022 1.023v7.5c0 .565.457 1.023 1.022 1.023h1.705V12.51z"
												fill="#D95247"
											></path>
											<g transform="translate(0 .162)">
												<mask
													id="property_svg__d"
													fill="#fff"
												>
													<use xlinkHref="#property_svg__c"></use>
												</mask>
												<path
													d="M10.728.585L.499 10.814a1.704 1.704 0 1 0 2.411 2.41l9.023-9.022V.086c-.436 0-.873.166-1.205.5"
													fill="#D95247"
													mask="url(#property_svg__d)"
												></path>
											</g>
										</g>
									</svg>
								</div>
								<div className="cat-info">
									<p>Property</p>
									<span>2312 ads</span>
								</div>
							</Link>
						</li>
						<li className="horizontal-list catagory-list">
							<Link to="/items/pets">
								<div className="cat-icon">
									<svg
										width="32"
										height="32"
										viewBox="0 0 24 24"
										className="svg-wrapper--8ky9e"
									>
										<defs>
											<path
												id="animals_svg__a"
												d="M0 .02h17.674v23.74H0z"
											></path>
											<path
												id="animals_svg__c"
												d="M0 .02h12.645v23.74H0z"
											></path>
										</defs>
										<g fill="none" fill-rule="evenodd">
											<path
												fill="#B19662"
												d="M17.618 16.667l1.35 6.415-6.423-.438-2.02-4.98 1.312-2.186z"
											></path>
											<g transform="translate(3 .22)">
												<mask
													id="animals_svg__b"
													fill="#fff"
												>
													<use xlinkHref="#animals_svg__a"></use>
												</mask>
												<path
													d="M15.823 22.172c-1.484-.138-2.47.024-2.486.027l-.48.084-.092-.478c-.324-1.672-.969-2.84-1.917-3.475-1.06-.708-2.165-.493-2.176-.491l-.207-.97c.062-.014 1.502-.31 2.915.623 1.093.723 1.853 1.956 2.261 3.671.424-.038 1.108-.07 1.968-.009L12.65 7.09s1.328-2.286 3.241-2.71l.691-2.393h-5.368L10.628.02S6.376 9.055 2.495 21.07C1.167 21.068.05 19.26.05 19.26s-.69 4.499 3.03 4.499h14.594s.053-1.335-1.85-1.588"
													fill="#D2B879"
													mask="url(#animals_svg__b)"
												></path>
											</g>
											<path
												d="M16.766 3.297h-1.482l-.215.65c.289-.143.76-.261 1.54-.261l.157-.39z"
												fill="#B19662"
											></path>
											<path
												d="M14.704 3.297l-.319 1.153h.233s.003-.282.451-.504l.215-.65h-.58z"
												fill="#9D8453"
											></path>
											<g transform="translate(3 .22)">
												<mask
													id="animals_svg__d"
													fill="#fff"
												>
													<use xlinkHref="#animals_svg__c"></use>
												</mask>
												<path
													d="M12.284 3.076l.361-1.09h-1.432L10.628.019S6.376 9.055 2.495 21.07C1.167 21.068.05 19.26.05 19.26s-.69 4.499 3.03 4.499h2.353l3.296-9.95a1.456 1.456 0 0 1-1.204-1.433v-.689a1.457 1.457 0 0 1 2.3-1.186l2.244-6.776c-.448.221-.45.504-.45.504h-.234l.319-1.154h.58z"
													fill="#BC9E68"
													mask="url(#animals_svg__d)"
												></path>
											</g>
											<path
												d="M11.982 14.053c.804 0 1.456-.651 1.456-1.455v-.69c0-.49-.243-.922-.614-1.186L11.73 14.03c.082.015.167.023.253.023"
												fill="#B19662"
											></path>
											<path
												d="M10.525 11.909v.688c0 .718.52 1.313 1.204 1.433l1.096-3.307a1.457 1.457 0 0 0-2.3 1.186"
												fill="#BC9E68"
											></path>
											<path
												d="M10.525 11.909v.688c0 .718.52 1.313 1.204 1.433l1.096-3.307a1.457 1.457 0 0 0-2.3 1.186M10.584 15.319a.68.68 0 0 1-1.359 0v-.321a.68.68 0 0 1 1.36 0v.32z"
												fill="#9D8453"
											></path>
											<path
												d="M12.56 15.583a.397.397 0 0 1-.795 0v-.188a.397.397 0 0 1 .794 0v.188z"
												fill="#B19662"
											></path>
											<path
												d="M15.206 13.444l.875 4.133a2.7 2.7 0 0 0 2.17 2.1L16.35 10.64a2.699 2.699 0 0 0-1.143 2.804"
												fill="#E4E3D7"
											></path>
										</g>
									</svg>
								</div>
								<div className="cat-info">
									<p>Pets & animals</p>
									<span>2312 ads</span>
								</div>
							</Link>
						</li>
						<li className="horizontal-list catagory-list">
							<Link to="/items/hobbies">
								<div className="cat-icon">
									<svg
										width="32"
										height="32"
										viewBox="0 0 24 24"
										className="svg-wrapper--8ky9e"
									>
										<defs>
											<path
												id="hobby_svg__a"
												d="M0 .007h23.986v23.447H0z"
											></path>
											<path
												id="hobby_svg__c"
												d="M.159.276h.276v.198H.159z"
											></path>
											<path
												id="hobby_svg__e"
												d="M.167.276h.275v.155H.167z"
											></path>
											<path
												id="hobby_svg__g"
												d="M.274.276H.55v.136H.274z"
											></path>
											<path
												id="hobby_svg__i"
												d="M.136.276H.62V.42H.136z"
											></path>
											<path
												id="hobby_svg__k"
												d="M.143.276h.33V.45h-.33z"
											></path>
											<path
												id="hobby_svg__m"
												d="M.158.276H.45v.227H.158z"
											></path>
										</defs>
										<g fill="none" fill-rule="evenodd">
											<g transform="translate(0 .533)">
												<mask
													id="hobby_svg__b"
													fill="#fff"
												>
													<use xlinkHref="#hobby_svg__a"></use>
												</mask>
												<path
													d="M23.986 11.73c0 6.475-5.37 11.724-11.993 11.724S0 18.205 0 11.731C0 5.256 5.37.007 11.993.007S23.986 5.256 23.986 11.73"
													fill="#E2E1D4"
													mask="url(#hobby_svg__b)"
												></path>
											</g>
											<g transform="translate(10.483 .263)">
												<mask
													id="hobby_svg__d"
													fill="#fff"
												>
													<use xlinkHref="#hobby_svg__c"></use>
												</mask>
												<path
													d="M.175.35"
													fill="#020303"
													mask="url(#hobby_svg__d)"
												></path>
											</g>
											<path
												d="M8.81.96"
												fill="#020303"
											></path>
											<g transform="translate(11.034 .263)">
												<mask
													id="hobby_svg__f"
													fill="#fff"
												>
													<use xlinkHref="#hobby_svg__e"></use>
												</mask>
												<path
													d="M.197.302C.269.298.34.292.412.29.34.293.27.298.197.302"
													fill="#020303"
													mask="url(#hobby_svg__f)"
												></path>
											</g>
											<g transform="translate(11.586 .263)">
												<mask
													id="hobby_svg__h"
													fill="#fff"
												>
													<use xlinkHref="#hobby_svg__g"></use>
												</mask>
												<path
													d="M.482.278L.407.276.343.278.407.277l.075.001"
													fill="#020303"
													mask="url(#hobby_svg__h)"
												></path>
											</g>
											<path
												d="M9.317.836"
												fill="#020303"
											></path>
											<path
												d="M11.126 12.266l-6.055 3.492c.156.248.322.488.5.72l5.978-3.448v7.24c.291.063.588.113.888.152V13.04l8.043 4.757.46-.742-8.081-4.78 8.299-4.787-.451-.748-8.27 4.77V1.575h-.888V11.5l-7.38-4.365c-.104.28-.192.565-.27.855l7.227 4.276z"
												fill="#C7C7BD"
											></path>
											<path
												d="M23.734 14.668l-.002.002a11.242 11.242 0 0 1 .002-.002M22.777 15.209l-2.789 1.573v1.655a10.075 10.075 0 0 0 2.789-3.228M19.988 20.999v.007a11.738 11.738 0 0 0 3.261-4.69A11.73 11.73 0 0 1 19.989 21"
												fill="#7F727B"
											></path>
											<path
												d="M23.986 12.263c0-.335-.018-.666-.046-.994a9.755 9.755 0 0 1-1.164 3.94l.956-.54c.166-.776.254-1.58.254-2.406"
												fill="#D8D7CC"
											></path>
											<path
												d="M23.454 15.724l-.02.064.02-.064M23.249 16.317"
												fill="#D1D1C6"
											></path>
											<path
												d="M23.433 15.788l.02-.063c.11-.346.203-.698.279-1.055l-.956.539a10.077 10.077 0 0 1-2.788 3.228v2.562a11.73 11.73 0 0 0 3.445-5.211"
												fill="#6C6068"
											></path>
											<path
												d="M13.764 20.508a10.512 10.512 0 0 1-2.215-.238 10.23 10.23 0 0 1-5.979-3.791 10.065 10.065 0 0 1-.499-.72 9.765 9.765 0 0 1-.902-8.624c.895-2.413 2.714-4.393 5.042-5.53l-.892-.502C3.494 2.62 0 7.042 0 12.263c0 6.475 5.37 11.723 11.993 11.723 3.072 0 5.873-1.13 7.995-2.987v-2.562a10.304 10.304 0 0 1-6.224 2.071"
												fill="#D8D7CC"
											></path>
											<path
												d="M3.046 7.485l.853.505c.078-.29.166-.576.27-.855l-.664-.393-.46.743z"
												fill="#CCCBBE"
											></path>
											<path
												d="M3.046 7.485l.853.505c.078-.29.166-.576.27-.855l-.664-.393-.46.743z"
												fill="#BCBCB3"
											></path>
											<path
												d="M11.549 22.965h.888v-2.544c-.3-.038-.597-.088-.888-.151v2.695z"
												fill="#CCCBBE"
											></path>
											<path
												d="M11.549 22.965h.888v-2.544c-.3-.038-.597-.088-.888-.151v2.695z"
												fill="#BCBCB3"
											></path>
											<path
												d="M2.828 17.052l.45.748L5.57 16.48a9.914 9.914 0 0 1-.499-.72l-2.243 1.293z"
												fill="#CCCBBE"
											></path>
											<path
												d="M2.828 17.052l.45.748L5.57 16.48a9.914 9.914 0 0 1-.499-.72l-2.243 1.293z"
												fill="#BCBCB3"
											></path>
											<path
												d="M9.153.873l.164-.037-.164.037"
												fill="#7F727B"
											></path>
											<g transform="translate(11.31 .263)">
												<mask
													id="hobby_svg__j"
													fill="#fff"
												>
													<use xlinkHref="#hobby_svg__i"></use>
												</mask>
												<path
													d="M.136.29"
													fill="#7F727B"
													mask="url(#hobby_svg__j)"
												></path>
											</g>
											<path
												d="M9.211 1.606l2.782 1.57 3.674-2.074A12.23 12.23 0 0 0 13.01.585a10.33 10.33 0 0 0-3.8 1.02"
												fill="#7F727B"
											></path>
											<g transform="translate(10.759 .263)">
												<mask
													id="hobby_svg__l"
													fill="#fff"
												>
													<use xlinkHref="#hobby_svg__k"></use>
												</mask>
												<path
													d="M.143.327"
													fill="#7F727B"
													mask="url(#hobby_svg__l)"
												></path>
											</g>
											<g transform="translate(10.207 .263)">
												<mask
													id="hobby_svg__n"
													fill="#fff"
												>
													<use xlinkHref="#hobby_svg__m"></use>
												</mask>
												<path
													d="M.158.387"
													fill="#7F727B"
													mask="url(#hobby_svg__n)"
												></path>
											</g>
											<path
												d="M3.997 7.695V3.534A11.657 11.657 0 0 0 .252 9.872l3.745-2.114v-.063zM3.997 16.782L.252 14.668a11.657 11.657 0 0 0 3.745 6.338V16.782zM11.993 21.33l-3.704 2.09c1.167.37 2.41.573 3.704.573 1.293 0 2.537-.202 3.704-.572l-3.704-2.09z"
												fill="#6C6068"
											></path>
											<path
												fill="#7F727B"
												d="M11.993 7.695L7.995 9.95v4.611l3.998 2.256 3.997-2.256V9.951zM19.988 7.758l3.746 2.114a11.656 11.656 0 0 0-3.746-6.338v4.224z"
											></path>
										</g>
									</svg>
								</div>
								<div className="cat-info">
									<p>Hobbies, Sports & Kids</p>
									<span>2312 ads</span>
								</div>
							</Link>
						</li>
					</ul>
				</section>
				<section className="upsell">
					<div className="row upsell-cont">
						<div className="col-1 upsell-item">
							<div className="upsell-icon">
								<svg
									viewBox="0 0 119 126"
									className="svg-wrapper--8ky9e"
								>
									<g fill="none" fill-rule="evenodd">
										<ellipse
											fill="#F3F6F5"
											cx="58.904"
											cy="66.658"
											rx="58.904"
											ry="59.342"
										></ellipse>
										<g fill-rule="nonzero">
											<path
												d="M88.078 46.845c-.928-5.296-3.62-10.302-8-14.022-4.384-3.723-9.715-5.54-15.017-5.54H40.648c-5.3 0-10.632 1.817-15.019 5.54-4.382 3.72-7.074 8.727-8 14.022L9.505 93.16a23.789 23.789 0 0 1-3.966 9.589l-3.776 5.386a2.885 2.885 0 0 0-.21 2.957 2.802 2.802 0 0 0 2.492 1.538h97.616a2.8 2.8 0 0 0 2.49-1.538 2.89 2.89 0 0 0-.206-2.957l-3.782-5.386a23.911 23.911 0 0 1-3.963-9.59l-8.122-46.315zM72.351 5.367c0 .77-.175 1.508-.482 2.155 0 .008-.582.925-.582.925a.2.2 0 0 1-.05.069l-3.947 6.413a9.332 9.332 0 0 1-3.4 3.274 9.233 9.233 0 0 1-4.537 1.188H46.349c-1.54 0-3.099-.38-4.535-1.188a9.415 9.415 0 0 1-3.402-3.271L34.42 8.446l-.579-.925a4.973 4.973 0 0 1-.488-2.154c0-2.733 2.181-4.941 4.873-4.941 2.693 0 4.872 2.208 4.872 4.94 0-2.732 2.187-4.94 4.88-4.94 2.697 0 4.872 2.208 4.872 4.94 0-2.732 2.18-4.94 4.873-4.94 2.695 0 4.882 2.208 4.882 4.94 0-2.732 2.178-4.94 4.872-4.94 2.698 0 4.875 2.209 4.875 4.941z"
												fill="#D95E46"
											></path>
											<path
												fill="#34495E"
												d="M41.158 17.803h23.38v9.48h-23.38z"
											></path>
										</g>
										<path
											d="M83.504 112.182s-3.019-1.728-6.29-23.37c-3.27-21.64-.92-26.736-2.367-33.91-1.446-7.174-2.15-7.863-6.791-15.428-4.643-7.565-11.054-12.398-11.054-12.398l-.32-9.66L63.076 4.62s-1.134-1.663 1.922-3.468c3.057-1.805 4.911 0 4.911 0s1.927.649 2.432 1.933c.506 1.284 0 4.243 0 4.243L65 17.922l-.391 9.111s5.056.04 8.754 1.424c3.699 1.384 4.932 2.681 7.258 4.568 2.326 1.887 2.762 2.174 4.419 5.118 1.656 2.943 1.16 1.407 2.71 7.55 1.55 6.141-.552-3.896 2.498 13.095 3.051 16.991 5.565 31.83 5.975 34.1.41 2.27.5 2.682.979 4.38s-1.455-1.03 1.14 3.131c2.595 4.16 4.938 6.598 5.502 7.517.564.92.757 2.687.757 2.687l-1.272 1.664-19.824-.085z"
											fill="#C94C3A"
										></path>
										<path
											fill="#34495E"
											d="M55.64 17.89h9.294v9.417h-9.293z"
										></path>
										<path
											fill="#C94C3A"
											d="M53.623 27.019l1.137 85.118 30.767.73-4.628-52.46-8.212-24.45-11.354-8.56z"
										></path>
										<path
											d="M52.852 51.466c-10.069 0-18.234 8.28-18.234 18.496 0 10.21 8.165 18.49 18.234 18.49 10.07 0 18.238-8.28 18.238-18.49 0-10.215-8.167-18.496-18.238-18.496zm0 0c-10.069 0-18.234 8.28-18.234 18.496 0 10.21 8.165 18.49 18.234 18.49 10.07 0 18.238-8.28 18.238-18.49 0-10.215-8.167-18.496-18.238-18.496z"
											fill="#F8FAF9"
											fill-rule="nonzero"
										></path>
										<path
											d="M54.352 80.236v1.93c0 .408-.164.766-.425 1.072a1.498 1.498 0 0 1-1.035.429h-.33c-.379 0-.754-.144-1.034-.429a1.531 1.531 0 0 1-.422-1.071v-1.698c-2.22-.098-4.38-.71-5.629-1.45l.988-3.912c1.391.784 3.344 1.478 5.5 1.478 1.889 0 3.168-.757 3.168-2.093 0-1.272-1.052-2.088-3.498-2.911-3.542-1.216-5.963-2.9-5.963-6.175 0-2.945 2.055-5.265 5.599-5.974v-1.694c0-.378.135-.77.426-1.042.277-.306.657-.434 1.036-.434h.313c.378 0 .76.128 1.054.434.278.273.411.664.411 1.042v1.476c2.23.09 3.718.568 4.81 1.104l-.97 3.783c-.853-.347-2.375-1.131-4.761-1.131-2.154 0-2.848.939-2.848 1.886 0 1.104 1.165 1.796 3.977 2.885 3.943 1.406 5.516 3.248 5.516 6.278-.004 2.999-2.078 5.555-5.883 6.217z"
											fill="#D95E46"
										></path>
										<path
											fill="#C94C3A"
											d="M52.96 5.288l.173 12.433 6.567.2 4.203-13.199-1.03.427-.962-2.606-1.548-1.312-2.068-.808-1.49.036-1.387.652-1.19.972-.832.96z"
										></path>
										<path
											fill="#142A3F"
											d="M52.852 17.89h12.082v9.417H52.852z"
										></path>
										<g fill-rule="nonzero">
											<path
												d="M105.012 76.084l4.89 24.49a1.325 1.325 0 0 1-1.027 1.549l-46.158 9.583a1.338 1.338 0 0 1-1.564-1.016l-4.89-24.54a1.325 1.325 0 0 1 1.027-1.548l46.157-9.535c.734-.145 1.418.29 1.565 1.017z"
												fill="#2B8272"
											></path>
											<path
												d="M95.77 101.881l11.002-2.226c.342-.049.587-.436.538-.775l-4.156-20.715c-.05-.339-.44-.58-.783-.532L91.37 79.859c-.342.048-.587.436-.538.774.05.34.44.581.783.533l10.365-2.081 3.912 19.408-10.366 2.081c-.342.049-.587.436-.538.775.098.338.44.58.783.532z"
												fill="#4B9587"
											></path>
											<path
												d="M112.688 82.327l2.445 24.878c.049.726-.44 1.355-1.173 1.452l-49.287 5.953c-.733.049-1.369-.435-1.418-1.161L60.81 88.57c-.049-.726.44-1.355 1.174-1.452l49.286-5.953c.685-.049 1.37.484 1.418 1.161z"
												fill="#359685"
											></path>
											<path
												d="M112.102 105.995c.342-.048.635-.339.586-.726l-2.053-21.006c-.05-.338-.342-.629-.734-.58l-11.197 1.113c-.342.048-.635.339-.586.726.048.339.342.629.733.58l10.513-1.016 1.906 19.699-10.512 1.016c-.342.049-.636.34-.587.726.05.34.343.63.734.581l11.197-1.113z"
												fill="#53A697"
											></path>
											<path
												d="M118.85 90.894v25.41a1.36 1.36 0 0 1-1.37 1.355H66.384a1.36 1.36 0 0 1-1.369-1.355v-25.41a1.36 1.36 0 0 1 1.37-1.355h51.095c.783 0 1.37.58 1.37 1.355z"
												fill="#3DB39E"
											></path>
											<path
												d="M91.957 93.895c-5.428 0-9.78 4.356-9.78 9.68s4.401 9.68 9.78 9.68c5.378 0 9.779-4.356 9.779-9.68s-4.4-9.68-9.78-9.68zm.244 4.501v.726c1.223.145 2.152.823 2.543 1.549a.89.89 0 0 1 .098.339c0 .387-.294.677-.636.677a.598.598 0 0 1-.538-.29c-.538-.532-1.173-.968-2.053-.968-1.125 0-1.663.387-1.663 1.162 0 1.887 4.547 1.016 4.547 4.114 0 1.161-.684 2.13-2.298 2.323v.726c0 .339-.244.63-.586.63-.343 0-.587-.291-.587-.63v-.726c-.978-.145-1.81-.532-2.25-1.162-.097-.097-.146-.242-.146-.435 0-.388.293-.678.684-.678.196 0 .343.097.538.29.391.388 1.027.678 1.76.678 1.027 0 1.418-.484 1.418-1.016 0-1.694-4.547-.92-4.547-4.114 0-1.404.88-2.324 2.543-2.517v-.726c0-.339.244-.63.586-.63a.68.68 0 0 1 .587.678zm-14.913 16.07a.748.748 0 0 0-.733-.727h-7.58V93.411h7.58a.748.748 0 0 0 .733-.726.748.748 0 0 0-.733-.726h-8.313a.748.748 0 0 0-.733.726v21.78c0 .387.342.726.733.726h8.313a.748.748 0 0 0 .733-.726zm39.117 0v-21.78a.748.748 0 0 0-.734-.727h-8.312a.748.748 0 0 0-.734.726c0 .387.343.726.734.726h7.579v20.328h-7.58a.748.748 0 0 0-.733.726c0 .387.343.726.734.726h8.312a.748.748 0 0 0 .734-.726zm-41.073-12.343c-.83 0-1.466.63-1.466 1.452 0 .823.635 1.452 1.466 1.452.832 0 1.467-.63 1.467-1.452 0-.823-.684-1.452-1.467-1.452zm33.25 2.904c.83 0 1.466-.63 1.466-1.452 0-.823-.636-1.452-1.467-1.452-.831 0-1.467.63-1.467 1.452 0 .823.636 1.452 1.467 1.452z"
												fill="#81CEC0"
											></path>
										</g>
									</g>
								</svg>
							</div>
							<div className="upsell-info">
								<h2>Start making money</h2>
								<p>
									Minim cupidatat enim fugiat nostrud Lorem
									incididunt minim labore sin
								</p>
								<button>Post Your Ads For Free</button>
							</div>
						</div>
						<div className="col-1 upsell-second-type">
							<div className="upsell-title">
								<img src="https://img.icons8.com/external-goofy-line-kerismaker/96/000000/external-Kite-summer-goofy-line-kerismaker.png" />
								<h2>
									Kynet<span>Jobs</span>
								</h2>
							</div>
							<div className="upsell-info">
								<p>
									Minim cupidatat enim fugiat nostrud Lorem
									incididunt minim labore sin
								</p>
								<button>Explore</button>
							</div>
						</div>
					</div>
				</section>
				<section className="quick-links">
					<h5>Quick links</h5>
					<ul className="horizontal-menu">
						<li className="horizontal-list quick-links-item">
							<p className="quick-links-info">
								<Link to="" className="link">
									<span>Appartment for sale</span>
								</Link>
								<Link to="" className="link">
									<span>Electronic</span>
								</Link>
								<Link to="" className="link">
									<span>Vehicle for sale</span>
								</Link>
								<Link to="" className="link">
									<span>Commercial space for sale</span>
								</Link>
							</p>
						</li>
						<li className="horizontal-list quick-links-item">
							<p className="quick-links-info">
								<Link to="" className="link">
									<span>Appartment for sale</span>
								</Link>
								<Link to="" className="link">
									<span>Electronic</span>
								</Link>
								<Link to="" className="link">
									<span>Vehicle for sale</span>
								</Link>
								<Link to="" className="link">
									<span>Commercial space for sale</span>
								</Link>
							</p>
						</li>
						<li className="horizontal-list quick-links-item">
							<p className="quick-links-info">
								<Link to="" className="link">
									<span>Appartment for sale</span>
								</Link>
								<Link to="" className="link">
									<span>Electronic</span>
								</Link>
								<Link to="" className="link">
									<span>Vehicle for sale</span>
								</Link>
								<Link to="" className="link">
									<span>Commercial space for sale</span>
								</Link>
							</p>
						</li>
						<li className="horizontal-list quick-links-item">
							<p className="quick-links-info">
								<Link to="" className="link">
									<span>Appartment for sale</span>
								</Link>
								<Link to="" className="link">
									<span>Electronic</span>
								</Link>
								<Link to="" className="link">
									<span>Vehicle for sale</span>
								</Link>
								<Link to="" className="link">
									<span>Commercial space for sale</span>
								</Link>
							</p>
						</li>
					</ul>
				</section>
			</main>
		</div>
	);
}
