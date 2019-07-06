import React, { Component } from 'react';
import { Menu, Dropdown } from 'semantic-ui-react';
import './submenu.css';
export default class Submenu extends Component {
	state = {};

	handleItemClick = (e, { name }) => this.setState({ activeItem: name });

	render() {
		const { activeItem } = this.state;

		return (
			<div>
				<Menu stackable style={{ justifyContent: 'space-between' }}>
					<Dropdown
						text="Electronics"
						pointing
						className="link item"
						style={{ justifyContent: 'space-arround' }}
					>
						<Dropdown.Menu>
							<Dropdown.Header>Mobile</Dropdown.Header>
							<Dropdown.Item>Nokia</Dropdown.Item>
							<Dropdown.Item>Mi</Dropdown.Item>
							<Dropdown.Item>Realme</Dropdown.Item>
							<Dropdown.Divider />
							<Dropdown.Header>Lenovo</Dropdown.Header>
							<Dropdown.Item>Apple</Dropdown.Item>
							<Dropdown.Item>Samsang</Dropdown.Item>
						</Dropdown.Menu>
					</Dropdown>

					<Dropdown text="Automobiles" pointing className="link item">
						<Dropdown.Menu>
							<Dropdown.Header>Categories</Dropdown.Header>
							<Dropdown.Item>
								<Dropdown text="Clothing">
									<Dropdown.Menu>
										<Dropdown.Header>Mens</Dropdown.Header>
										<Dropdown.Item>Shirts</Dropdown.Item>
										<Dropdown.Item>Pants</Dropdown.Item>
										<Dropdown.Item>Jeans</Dropdown.Item>
										<Dropdown.Item>Shoes</Dropdown.Item>
										<Dropdown.Divider />
										<Dropdown.Header>Womens</Dropdown.Header>
										<Dropdown.Item>Dresses</Dropdown.Item>
										<Dropdown.Item>Shoes</Dropdown.Item>
										<Dropdown.Item>Bags</Dropdown.Item>
									</Dropdown.Menu>
								</Dropdown>
							</Dropdown.Item>
							<Dropdown.Item>Home Goods</Dropdown.Item>
							<Dropdown.Item>Bedroom</Dropdown.Item>
							<Dropdown.Divider />
							<Dropdown.Header>Order</Dropdown.Header>
							<Dropdown.Item>Status</Dropdown.Item>
							<Dropdown.Item>Cancellations</Dropdown.Item>
						</Dropdown.Menu>
					</Dropdown>

					<Dropdown text="Men" pointing className="link item">
						<Dropdown.Menu>
							<Dropdown.Header>Categories</Dropdown.Header>
							<Dropdown.Item>
								<Dropdown text="Clothing">
									<Dropdown.Menu>
										<Dropdown.Header>Mens</Dropdown.Header>
										<Dropdown.Item>Shirts</Dropdown.Item>
										<Dropdown.Item>Pants</Dropdown.Item>
										<Dropdown.Item>Jeans</Dropdown.Item>
										<Dropdown.Item>Shoes</Dropdown.Item>
										<Dropdown.Divider />
										<Dropdown.Header>Womens</Dropdown.Header>
										<Dropdown.Item>Dresses</Dropdown.Item>
										<Dropdown.Item>Shoes</Dropdown.Item>
										<Dropdown.Item>Bags</Dropdown.Item>
									</Dropdown.Menu>
								</Dropdown>
							</Dropdown.Item>
							<Dropdown.Item>Home Goods</Dropdown.Item>
							<Dropdown.Item>Bedroom</Dropdown.Item>
							<Dropdown.Divider />
							<Dropdown.Header>Order</Dropdown.Header>
							<Dropdown.Item>Status</Dropdown.Item>
							<Dropdown.Item>Cancellations</Dropdown.Item>
						</Dropdown.Menu>
					</Dropdown>

					<Dropdown text="Women" pointing className="link item">
						<Dropdown.Menu>
							<Dropdown.Header>Categories</Dropdown.Header>
							<Dropdown.Item>
								<Dropdown text="Clothing">
									<Dropdown.Menu>
										<Dropdown.Header>Mens</Dropdown.Header>
										<Dropdown.Item>Shirts</Dropdown.Item>
										<Dropdown.Item>Pants</Dropdown.Item>
										<Dropdown.Item>Jeans</Dropdown.Item>
										<Dropdown.Item>Shoes</Dropdown.Item>
										<Dropdown.Divider />
										<Dropdown.Header>Womens</Dropdown.Header>
										<Dropdown.Item>Dresses</Dropdown.Item>
										<Dropdown.Item>Shoes</Dropdown.Item>
										<Dropdown.Item>Bags</Dropdown.Item>
									</Dropdown.Menu>
								</Dropdown>
							</Dropdown.Item>
							<Dropdown.Item>Home Goods</Dropdown.Item>
							<Dropdown.Item>Bedroom</Dropdown.Item>
							<Dropdown.Divider />
							<Dropdown.Header>Order</Dropdown.Header>
							<Dropdown.Item>Status</Dropdown.Item>
							<Dropdown.Item>Cancellations</Dropdown.Item>
						</Dropdown.Menu>
					</Dropdown>

					<Dropdown text=" Baby & Kids" pointing className="link item">
						<Dropdown.Menu>
							<Dropdown.Header>Categories</Dropdown.Header>
							<Dropdown.Item>
								<Dropdown text="Clothing">
									<Dropdown.Menu>
										<Dropdown.Header>Mens</Dropdown.Header>
										<Dropdown.Item>Shirts</Dropdown.Item>
										<Dropdown.Item>Pants</Dropdown.Item>
										<Dropdown.Item>Jeans</Dropdown.Item>
										<Dropdown.Item>Shoes</Dropdown.Item>
										<Dropdown.Divider />
										<Dropdown.Header>Womens</Dropdown.Header>
										<Dropdown.Item>Dresses</Dropdown.Item>
										<Dropdown.Item>Shoes</Dropdown.Item>
										<Dropdown.Item>Bags</Dropdown.Item>
									</Dropdown.Menu>
								</Dropdown>
							</Dropdown.Item>
							<Dropdown.Item>Home Goods</Dropdown.Item>
							<Dropdown.Item>Bedroom</Dropdown.Item>
							<Dropdown.Divider />
							<Dropdown.Header>Order</Dropdown.Header>
							<Dropdown.Item>Status</Dropdown.Item>
							<Dropdown.Item>Cancellations</Dropdown.Item>
						</Dropdown.Menu>
					</Dropdown>

					<Dropdown text="Home" pointing className="link item">
						<Dropdown.Menu>
							<Dropdown.Header>Categories</Dropdown.Header>
							<Dropdown.Item>
								<Dropdown text="Clothing">
									<Dropdown.Menu>
										<Dropdown.Header>Mens</Dropdown.Header>
										<Dropdown.Item>Shirts</Dropdown.Item>
										<Dropdown.Item>Pants</Dropdown.Item>
										<Dropdown.Item>Jeans</Dropdown.Item>
										<Dropdown.Item>Shoes</Dropdown.Item>
										<Dropdown.Divider />
										<Dropdown.Header>Womens</Dropdown.Header>
										<Dropdown.Item>Dresses</Dropdown.Item>
										<Dropdown.Item>Shoes</Dropdown.Item>
										<Dropdown.Item>Bags</Dropdown.Item>
									</Dropdown.Menu>
								</Dropdown>
							</Dropdown.Item>
							<Dropdown.Item>Home Goods</Dropdown.Item>
							<Dropdown.Item>Bedroom</Dropdown.Item>
							<Dropdown.Divider />
							<Dropdown.Header>Order</Dropdown.Header>
							<Dropdown.Item>Status</Dropdown.Item>
							<Dropdown.Item>Cancellations</Dropdown.Item>
						</Dropdown.Menu>
					</Dropdown>

					<Dropdown text="Furniture" pointing className="link item">
						<Dropdown.Menu>
							<Dropdown.Header>Categories</Dropdown.Header>
							<Dropdown.Item>
								<Dropdown text="Clothing">
									<Dropdown.Menu>
										<Dropdown.Header>Mens</Dropdown.Header>
										<Dropdown.Item>Shirts</Dropdown.Item>
										<Dropdown.Item>Pants</Dropdown.Item>
										<Dropdown.Item>Jeans</Dropdown.Item>
										<Dropdown.Item>Shoes</Dropdown.Item>
										<Dropdown.Divider />
										<Dropdown.Header>Womens</Dropdown.Header>
										<Dropdown.Item>Dresses</Dropdown.Item>
										<Dropdown.Item>Shoes</Dropdown.Item>
										<Dropdown.Item>Bags</Dropdown.Item>
									</Dropdown.Menu>
								</Dropdown>
							</Dropdown.Item>
							<Dropdown.Item>Home Goods</Dropdown.Item>
							<Dropdown.Item>Bedroom</Dropdown.Item>
							<Dropdown.Divider />
							<Dropdown.Header>Order</Dropdown.Header>
							<Dropdown.Item>Status</Dropdown.Item>
							<Dropdown.Item>Cancellations</Dropdown.Item>
						</Dropdown.Menu>
					</Dropdown>

					<Dropdown text="Sports" pointing className="link item">
						<Dropdown.Menu>
							<Dropdown.Header>Categories</Dropdown.Header>
							<Dropdown.Item>
								<Dropdown text="Clothing">
									<Dropdown.Menu>
										<Dropdown.Header>Mens</Dropdown.Header>
										<Dropdown.Item>Shirts</Dropdown.Item>
										<Dropdown.Item>Pants</Dropdown.Item>
										<Dropdown.Item>Jeans</Dropdown.Item>
										<Dropdown.Item>Shoes</Dropdown.Item>
										<Dropdown.Divider />
										<Dropdown.Header>Womens</Dropdown.Header>
										<Dropdown.Item>Dresses</Dropdown.Item>
										<Dropdown.Item>Shoes</Dropdown.Item>
										<Dropdown.Item>Bags</Dropdown.Item>
									</Dropdown.Menu>
								</Dropdown>
							</Dropdown.Item>
							<Dropdown.Item>Home Goods</Dropdown.Item>
							<Dropdown.Item>Bedroom</Dropdown.Item>
							<Dropdown.Divider />
							<Dropdown.Header>Order</Dropdown.Header>
							<Dropdown.Item>Status</Dropdown.Item>
							<Dropdown.Item>Cancellations</Dropdown.Item>
						</Dropdown.Menu>
					</Dropdown>

					<Dropdown text="Books" pointing className="link item">
						<Dropdown.Menu>
							<Dropdown.Header>Mobile</Dropdown.Header>
							<Dropdown.Item>Nokia</Dropdown.Item>
							<Dropdown.Item>Mi</Dropdown.Item>
							<Dropdown.Item>Realme</Dropdown.Item>
							<Dropdown.Divider />
							<Dropdown.Header>Lenovo</Dropdown.Header>
							<Dropdown.Item>Apple</Dropdown.Item>
							<Dropdown.Item>Samsang</Dropdown.Item>
						</Dropdown.Menu>
					</Dropdown>

					<Dropdown text="Offer Zone" pointing className="link item">
						<Dropdown.Menu>
							<Dropdown.Header>Mobile</Dropdown.Header>
							<Dropdown.Item>Nokia</Dropdown.Item>
							<Dropdown.Item>Mi</Dropdown.Item>
							<Dropdown.Item>Realme</Dropdown.Item>
							<Dropdown.Divider />
							<Dropdown.Header>Lenovo</Dropdown.Header>
							<Dropdown.Item>Apple</Dropdown.Item>
							<Dropdown.Item>Samsang</Dropdown.Item>
						</Dropdown.Menu>
					</Dropdown>

					<Dropdown text="More" pointing className="link item">
						<Dropdown.Menu>
							<Dropdown.Header>Mobile</Dropdown.Header>
							<Dropdown.Item>Nokia</Dropdown.Item>
							<Dropdown.Item>Mi</Dropdown.Item>
							<Dropdown.Item>Realme</Dropdown.Item>
							<Dropdown.Divider />
							<Dropdown.Header>Lenovo</Dropdown.Header>
							<Dropdown.Item>Apple</Dropdown.Item>
							<Dropdown.Item>Samsang</Dropdown.Item>
						</Dropdown.Menu>
					</Dropdown>
				</Menu>
			</div>
		);
	}
}
