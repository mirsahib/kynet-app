import InputField from "../../components/InputField";
import TextAreadField from "../../components/TextAreaField";
import SubmitBtn from "../../components/SubmitBtn";
import { IPublishField, publish } from "./api/api-item";
import { SubmitHandler, useForm } from "react-hook-form";

export default function Publish() {
	const { register, handleSubmit, watch,formState: { errors }} = useForm<IPublishField>();
	
	const onSubmit: SubmitHandler<IPublishField> = async (data) =>{
		console.log('onsubmit',data)
		const response = await publish(data)
		console.log(response)
	};

	return (
		<div className="flex  items-center justify-center lg:max-w-[920px] sm:w-[90%] mx-auto ">
			<form onSubmit={handleSubmit(onSubmit)} action="" className="bg-green-600 ">
				<h1 className="mt-4 mb-8 text-center text-white text-3xl font-semibold">
					Welcome back, let's post an ad
				</h1>
				<div className="flex flex-row mb-4 sm:mx-3">
					<label htmlFor="" className="font-semibold text-white w-48">
						Choose A Catagory
					</label>
					<select {...register("catagory")} required={true} className="bg-green-700 text-yellow-50 w-60">
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
					<select {...register("location")} required={true} className="bg-green-700 text-yellow-50 w-60">
						<option value="Dhaka">Dhaka</option>
						<option value="Chittagong">Chittagong</option>
						<option value="Sylhet">Sylhet</option>
						<option value="Barishal">Barishal</option>
						<option value="Rajshahi">Rajshahi</option>
						<option value="Rangpur">Rangpur</option>
						<option value="Mymensingh">Mymensingh</option>
					</select>
				</div>
				<InputField {...register('title')} required={true} placeholder="Please write a nice title for your ads"/>
				<TextAreadField {...register('description')} rows={10} placeholder="Please write a description for your product"/>
				<InputField {...register('price')} required={true} placeholder="Price . TK" type={'number'} min={0} />
				<div className="flex flex-row mb-4 sm:mx-3">
					<label htmlFor="" className="text-white font-semibold w-48">
						Upload Image
					</label>
					<div>
						<input
							{...register('image')}
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
