import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { read, readByCatagory } from "./api/api-item";
import { ICard } from "./components/Card";

export default function Item() {
	
	const [item,setItem] = useState<ICard>()
	const {id} = useParams()

	useEffect(()=>{
		const abortController = new AbortController()
		const signal = abortController.signal
		if(id){
			read(id,signal).then(data=>{
				setItem(data)
			})
		}
		return ()=>{
			abortController.abort()
		}
	},[id])
	

	return (
		<div className="container">
			<div className="main-container itemContainer">
				<div className="itemHeader">
					<h2>{item?.title}</h2>
					<p>Posted on {item?.created}</p>
				</div>
				<div className="itemBody row">
					<div className="itemMain">
						<div className="itemBlock itemImgContainer">
							<img src={item?.image} alt="" />
						</div>
						<div className="itemBlock itemPrice">TK {item?.price}</div>
						<div className="itemInfo">
							<div className="itemLocation textColor">Location: {item?.location}</div>
							<div className="itemCatagory textColor">Catagory: {item?.catagory}</div>
						</div>
						<div className="itemDesc itemBlock textColor">
							<p>
								{item?.description}
							</p>
						</div>
					</div>
                    <div className="itemSidebar">
                        <div className="profileContainer">
                            <div className="profileImg"></div>
                            <div className="profileInfo">
                                <p>Posted by</p>
                                <h4>Mir Sahib</h4>
                                <p>019******</p>
                            </div>
                        </div>
                    </div>
				</div>
			</div>
		</div>
	);
}
