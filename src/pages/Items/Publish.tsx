import { Link } from "react-router-dom";

export default function Publish() {
	return (
		<div className="container main-container">
			<div className="publishContainer">
				<h1>Welcome back, let's post an ad</h1>
				<form action="">
					<div className="fieldWrap dropdownBlock">
						<label htmlFor="" className="dropdownLabel">
							Choose A Catagory
						</label>
						<select name="" id="catagory" className="options">
							<option value="mobile">Mobiles & Smartphone</option>
							<option value="home">Homes & livings</option>
							<option value="electronic">Electronics</option>
							<option value="car">Cars</option>
							<option value="property">Property</option>
							<option value="pet">Pets & animals</option>
							<option value="hobby">
								Hobbies, Sports & Kids
							</option>
						</select>
					</div>
					<div className="fieldWrap dropdownBlock">
						<label htmlFor="" className="dropdownLabel">
							Choose Your Location
						</label>
						<select name="" id="catagory" className="options">
							<option value="dhaka">Dhaka</option>
							<option value="chittagong">Chittagong</option>
							<option value="sylhet">Sylhet</option>
							<option value="barishal">Barishal</option>
							<option value="rajshahi">Rajshahi</option>
							<option value="rangpur">Rangpur</option>
							<option value="mymensingh">Mymensingh</option>
						</select>
					</div>
					<div className="fieldWrap bgWhite">
						<input
							type="text"
							placeholder="Please write a nice title for your ads"
						/>
					</div>
					<div className="fieldWrap bgWhite">
						<textarea
							className="textArea"
							name=""
							id=""
							rows={5}
							cols={80}
							placeholder="Please write a description for your product"
						/>
					</div>
					<div className="fieldWrap dropdownBlock">
						<label htmlFor="" className="dropdownLabel">
							Upload Image
						</label>
						<div>
							<input
								type="file"
								accept="image/png, image/jpg, image/gif, image/jpeg"
							/>
						</div>
					</div>

					<div className="buttonContainer">
						<button className="button button-block">
							Publish Ads
						</button>
					</div>
				</form>
			</div>
		</div>
	);
}
