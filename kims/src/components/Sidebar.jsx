import React from 'react';
import logo from '../logo.png';
import { Link } from 'react-router-dom';

const Sidebar = () => {
	return (
		<div className="container">
			<nav id="sidebar">
				<div className="sidebar-header">
					<Link to="/">
						<div className="row">
							<div className="col" style={{ textAlign: 'center' }}>
								<img src={logo} id="logo_img" alt="?" />
							</div>
						</div>
						<div className="row">
							<div className="col" style={{ textAlign: 'center' }}>
								<span id="KIMS">KIMS</span>
							</div>
						</div>
					</Link>
				</div>

				<ul className="list-unstyled components">
					<p id="storage_slogan">Storage is Important.</p>
					<li className="active">
						<Link to="/" className="link">
							<div className="row">
								<div className="col-md-2 custom_icon" />
								<div className="col-md-10 custom_item_sidebar">
									<span>Dashboard</span>
								</div>
							</div>
						</Link>
					</li>
					<li>
						<div className="">
							<Link to="/inventory" className="link">
								<div className="row">
									<div className="col-md-2 custom_icon" />
									<div className="col-md-10 custom_item_sidebar">
										<span>Inventory</span>
									</div>
								</div>
							</Link>
						</div>
					</li>
					<li>
						<Link to="/salesperson" className="link">
							<div className="row">
								<div className="col-md-2 custom_icon" />
								<div className="col-md-10 custom_item_sidebar">
									<span>Salesperson</span>
								</div>
							</div>
						</Link>
					</li>
					<li>
						<Link to="/retailers" className="link">
							<div className="row">
								<div className="col-md-2 custom_icon" />
								<div className="col-md-10 custom_item_sidebar">
									<span>Retailers</span>
								</div>
							</div>
						</Link>
					</li>
					<li>
						<Link to="/purchase" className="link">
							<div className="row">
								<div className="col-md-2 custom_icon" />
								<div className="col-md-10 custom_item_sidebar">
									<span>Purchase</span>
								</div>
							</div>
						</Link>
					</li>
					<li>
						<Link to="/accounts" className="link">
							<div className="row">
								<div className="col-md-2 custom_icon" />
								<div className="col-md-10 custom_item_sidebar">
									<span>Accounts</span>
								</div>
							</div>
						</Link>
					</li>
					<li>
						<Link to="/invoices" className="link">
							<div className="row">
								<div className="col-md-2 custom_icon" />
								<div className="col-md-10 custom_item_sidebar">
									<span>Invoices</span>
								</div>
							</div>
						</Link>
					</li>
					<li>
						<Link to="/help" className="link">
							<div className="row">
								<div className="col-md-2 custom_icon" />
								<div className="col-md-10 custom_item_sidebar">
									<span>Help</span>
								</div>
							</div>
						</Link>
					</li>
				</ul>
			</nav>
		</div>
	);
};

export default Sidebar;
