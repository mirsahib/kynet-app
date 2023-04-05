import { useEffect, useState } from "react";
import { useParams} from "react-router-dom";
import { readByCatagory } from "./api/api-item";
import Card ,{ICard} from "./components/Card";


export default function Catagory() {

	const {catagory} = useParams()
	const [items,setItems] = useState<ICard[]>([])
	
	useEffect(()=>{
		const abortController = new AbortController()
		const signal = abortController.signal
		if(catagory){
			readByCatagory(catagory,signal).then(data=>{
				setItems(data)
			})
		}
		return ()=>{
			abortController.abort()
		}
	},[catagory])

	return (
		<div className="container">
			<main role="main" className="main-container">
				<div className="row-flex adsHead">
					<div className="col-2 ads-header-block">
						<button className="btnZero">
							<i
								className="fa fa-map-marker"
								aria-hidden="true"
							></i>
							Select Location
						</button>
					</div>
					<div className="col-2 ads-header-block">
						<button className="btnZero">
							<i className="fa fa-tag" aria-hidden="true"></i>
							Select Catagory
						</button>
					</div>
					<div className="col-2 ads-search"></div>
					<div className="col-2 ads-header-block ads-filter">
						<i className="fa fa-filter" aria-hidden="true"></i>
					</div>
				</div>
				<div className="row-flex">
					<aside className="col-2 sidebar">
						<div className="ads-filter-block sort">
							<label htmlFor="">Sort result by</label>
							<select name="" id="sort">
								<option value="new-top">
									Date:Newest on top
								</option>
								<option value="old-top">
									Date:Oldest on top
								</option>
								<option value="high-low">
									Price:High to Low
								</option>
								<option value="low-high">
									Price:Low to High
								</option>
							</select>
						</div>
						<div className="ads-filter-block tag">
							<label htmlFor="">Filter by tag</label>
							<div>
								<input
									type="checkbox"
									id="urgent"
									name="urgent"
									value="urgent"
								/>
								<label htmlFor="urgent"> Urgent</label>
								<br />
							</div>
							<div>
								<input
									type="checkbox"
									id="featured"
									name="featured"
									value="featured"
								/>
								<label htmlFor="featured">Featured</label>
								<br />
							</div>
						</div>
						<div className="ads-filter-block poster">
							<label htmlFor="">Type of poster</label>
							<select name="" id="poster">
								<option value="all">All</option>
								<option value="member">Members</option>
								<option value="authorized">Authorized</option>
								<option value="non-authorized">
									Non-Authorized
								</option>
							</select>
						</div>
						<div className="ads-filter-block ads-catagory">
							<label htmlFor="">Catagory</label>
							<select name="" id="sort">
								<option value="new-top">
									Date:Newest on top
								</option>
								<option value="old-top">
									Date:Oldest on top
								</option>
								<option value="high-low">
									Price:High to Low
								</option>
								<option value="low-high">
									Price:Low to High
								</option>
							</select>
						</div>
						<div className="ads-filter-block ads-location">
							<label htmlFor="">Location</label>
							<select name="" id="sort">
								<option value="new-top">
									Date:Newest on top
								</option>
								<option value="old-top">
									Date:Oldest on top
								</option>
								<option value="high-low">
									Price:High to Low
								</option>
								<option value="low-high">
									Price:Low to High
								</option>
							</select>
						</div>
					</aside>
					<div className="col-1 main">
						{/* <!-- page details -->
						<!-- feature ads list --> */}
						<ul className="ads-menu">
							{items && items.map(item=>(
								<Card key={item.id} {...item}/>
							))}
						</ul>
						<div className="pagination">
							<div className="pg-block">Prev</div>
							<div className="pages">1 to 201</div>
							<div className="pg-block">Next</div>
						</div>
					</div>
				</div>
			</main>
		</div>
	);
}
