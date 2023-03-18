import React from "react";

export default function Item() {
	return (
		<div className="container">
			<div className="main-container itemContainer">
				<div className="itemHeader">
					<h2>OPPO A3s offer price (6/128) (New)</h2>
					<p>Posted on 17 Mar 12:15 pm</p>
				</div>
				<div className="itemBody row">
					<div className="itemMain">
						<div className="itemBlock itemImgContainer">
							<img src="https://picsum.photos/510/321" alt="" />
						</div>
						<div className="itemBlock itemPrice">TK 2133</div>
						<div className="itemInfo">
							<div className="itemLocation textColor">Location: Dhaka</div>
							<div className="itemCatagory textColor">Catagory: Mobile</div>
						</div>
						<div className="itemDesc itemBlock textColor">
							<p>
								Lorem ipsum dolor, sit amet consectetur
								adipisicing elit. Harum esse libero, magni sequi
								officia, excepturi molestiae voluptatibus
								aperiam praesentium eligendi eaque aspernatur
								corrupti quasi fuga quidem necessitatibus
								tenetur enim sunt!
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
