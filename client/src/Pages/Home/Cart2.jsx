import { useState } from "react";
import "./Carousel.css";

export const Cart2 = function Cart2({ price, cartItems, onAdd, onRemove }) {
	const [counter, setCounter] = useState(1);
	const delivery = 49;
	// const [cartItems, setCartItems] = useState([]);
	// console.log(price);

	return (
		<div className="row">
			{/* <h2>Cart Items</h2> */}
			<div>{cartItems.length === 0 && <div>Cart is empty</div>}</div>
			<div style={{ flexGrow: "1" }}>
				{cartItems.map((item) => (
					<div key={item.id} className="add">
						<div className="addFlex">
							<img src={item.image} className="image_css" alt="" />
							<div>
								<div style={{ fontSize: "14px" }}>{item.name}</div>
								<div>{item.seller}</div>
								<div>
									{item.qty} x ${price}
								</div>
							</div>
							<div
								style={{
									background: "white",
									height: "5%",
									margin: "1% 18%",
									borderRadius: "20px",
								}}
							>
								<button
									onClick={() => {
										onAdd(item);
										setCounter(counter + 1);
									}}
									className="add"
									style={{ border: "none", background: "white" }}
								>
									+
								</button>
								{item.qty}
								<button
									onClick={() => {
										onRemove(item);
										setCounter(counter - 1);
									}}
									className="remove"
									style={{ background: "white" }}
								>
									-
								</button>
							</div>
						</div>
					</div>
				))}
				<div>
					<h2>Order Details</h2>
					<div>
						<p>Items Total (inclusive all taxes)</p>
						<p>&#8377;{price}</p>
					</div>
					<div>
						<p>Delivery charges</p>
						<p>&#8377;{delivery}</p>
					</div>
					<div>
						<p>Total Discount</p>
						<p>&#8377;49</p>
					</div>
					<div>
						<p>Amount Payable</p>
						<p>&#8377;{price + delivery}</p>
					</div>
				</div>
			</div>
			<div style={{ marginLeft: "15%" }}>
				<h3>Payment method</h3>
				<div>
					<span>COD</span>
					<span>
						<input type="radio" />
					</span>
				</div>
				<div>
					<span>Google Play</span>
					<span>
						<input type="radio" />
					</span>
				</div>
				<div>
					<span>Paytm</span>
					<span>
						<input type="radio" />
					</span>
				</div>
				<div>
					<span>Phone pe</span>
					<span>
						<input type="radio" />
					</span>
				</div>
				<div>
					<span>Debit card/Credit card</span>
					<span>
						<input type="radio" />
					</span>
				</div>
                <div>Home</div>
                <button>Proceed to Payment</button>
			</div>
		</div>
	);
};
