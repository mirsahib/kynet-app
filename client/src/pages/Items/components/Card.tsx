import React from "react";
import { Link } from "react-router-dom";

export interface ICard{
    id:string;
    catagory:string,
    location:string,
    title:string,
    description:string,
    price:number,
    image:string,
	created:string
}

export default function Card({id,catagory,location,title,description,price,image,created}:ICard) {
	return (
		<li className="card">
			<Link to={`/items/${catagory}/${id}`} className="card-link">
				<div className="card-container ">
					<div className="cardImg">
						<img src={image} alt="" />
					</div>
					<div className="cardInfo">
						<h2 className="cardTitle">{title}</h2>
						<p className="cardDesc">{description}</p>
						<p className="cardPrice">Tk {price}</p>
						<div className="cardUpdateTime">{created}</div>
					</div>
				</div>
			</Link>
		</li>
	);
}
