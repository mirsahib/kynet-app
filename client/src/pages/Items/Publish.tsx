import InputField from "../../components/InputField";
import TextAreadField from "../../components/TextAreaField";
import SubmitBtn from "../../components/SubmitBtn";

export default function Publish() {
	return (
		<div className="flex  items-center justify-center lg:max-w-[920px] sm:w-[90%] mx-auto ">
			<form action="" className="bg-green-600 ">
				<h1 className="mt-4 mb-8 text-center text-white text-3xl font-semibold">
					Welcome back, let's post an ad
				</h1>
				<div className="flex flex-row mb-4 sm:mx-3">
					<label htmlFor="" className="font-semibold text-white w-48">
						Choose A Catagory
					</label>
					<select name="" id="catagory" className="bg-green-700 text-yellow-50 w-60">
						<option value="mobile">Mobiles & Smartphone</option>
						<option value="home">Homes & livings</option>
						<option value="electronic">Electronics</option>
						<option value="car">Cars</option>
						<option value="property">Property</option>
						<option value="pet">Pets & animals</option>
						<option value="hobby">Hobbies, Sports & Kids</option>
					</select>
				</div>
				<div className="flex flex-row mb-4 sm:mx-3">
					<label htmlFor="" className="font-semibold text-white w-48">
						Choose Your Location
					</label>
					<select name="" id="catagory" className="bg-green-700 text-yellow-50 w-60">
						<option value="dhaka">Dhaka</option>
						<option value="chittagong">Chittagong</option>
						<option value="sylhet">Sylhet</option>
						<option value="barishal">Barishal</option>
						<option value="rajshahi">Rajshahi</option>
						<option value="rangpur">Rangpur</option>
						<option value="mymensingh">Mymensingh</option>
					</select>
				</div>
				<InputField label="title" placeholder="Please write a nice title for your ads"/>
				<TextAreadField label={"Description"} rows={10} placeholder="Please write a description for your product"/>
				<div className="flex flex-row mb-4 sm:mx-3">
					<label htmlFor="" className="text-white font-semibold w-48">
						Upload Image
					</label>
					<div>
						<input
							type="file"
							accept="image/png, image/jpg, image/gif, image/jpeg"
							className="text-yellow-50"
						/>
					</div>
				</div>

				<SubmitBtn label={"Publis Ads"}/>
			</form>
		</div>
	);
}
