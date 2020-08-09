import React from 'react';
import LoginModal from './auth/LoginModal';
import userService from '../services/UserServices';
import RegisterModal from './auth/RegisterModal';
import { toast } from 'react-toastify';
import Button from '@material-ui/core/Button';
import { Navbar, Nav, NavDropdown, Form } from 'react-bootstrap';

const NavbarTop = () => {
	const [ LoginShow, setLoginShow ] = React.useState(false);
	const [ RegisterShow, setRegisterShow ] = React.useState(false);
	const handleLoginClose = () => setLoginShow(false);
	const handleLoginShow = () => setLoginShow(true);
	const handleRegisterClose = () => setRegisterShow(false);
	const handleRegisterShow = () => setRegisterShow(true);

	function timeout(delay) {
		return new Promise((res) => setTimeout(res, delay));
	}

	return (
		<div className="content-div">
			<Navbar bg="light" expand="lg">
				<Navbar.Brand id="navbar-welcome">
					<p>Welcome to Kaza Inventory Management System!!</p>
				</Navbar.Brand>
				<Navbar.Toggle aria-controls="basic-navbar-nav" />
				<Navbar.Collapse id="basic-navbar-nav">
					<Nav className="mr-auto">
						<ul className="navbar-nav mr-auto mt-2 mt-lg-0">
							{!userService.isLoggedIn() ? (
								<li className="nav-item">
									<Button className="nav-link" onClick={handleLoginShow}>
										Login
									</Button>
								</li>
							) : (
								<li className="nav-item">
									<p className="nav-name">
										Welcome Mr.
										{userService.getLoggedInUser().name}
										<Button
											className="nav-link"
											onClick={async () => {
												userService.logout();
												toast.info('Logged Out', {
													position: toast.POSITION.TOP_CENTER
												});
												await timeout(1500);
												window.location.reload();
											}}
										>
											Log out
										</Button>
									</p>
								</li>
							)}
							{!userService.isLoggedIn() && (
								<li className="nav-item">
									<Button
										className="nav-link"
										onClick={() => {
											handleRegisterShow();
										}}
									>
										Register
									</Button>
								</li>
							)}
						</ul>
					</Nav>
				</Navbar.Collapse>
			</Navbar>
			{/* <nav className="navbar navbar-expand-sm navbar-light bg-light">
				<button
					className="navbar-toggler"
					type="button"
					data-toggle="collapse"
					data-target="#navbarTogglerDemo03"
					aria-controls="navbarTogglerDemo03"
					aria-expanded="false"
					aria-label="Toggle navigation"
				>
					<span className="navbar-toggler-icon" />
				</button>

				<p id="navbar-welcome">Welcome to Kaza Inventory Management System!!</p>

				<div className="collapse navbar-collapse" id="navbarTogglerDemo03">
					<ul className="navbar-nav mr-auto mt-2 mt-lg-0">
						{!userService.isLoggedIn() ? (
							<li className="nav-item">
								<Button className="nav-link" onClick={handleLoginShow}>
									Login
								</Button>
							</li>
						) : (
							<li className="nav-item">
								<p className="nav-name">
									Welcome Mr.
									{userService.getLoggedInUser().name}
									<Button
										className="nav-link"
										onClick={async () => {
											userService.logout();
											toast.info('Logged Out', {
												position: toast.POSITION.TOP_CENTER
											});
											await timeout(1500);
											window.location.reload();
										}}
									>
										Log out
									</Button>
								</p>
							</li>
						)}
						{!userService.isLoggedIn() && (
							<li className="nav-item">
								<Button
									className="nav-link"
									onClick={() => {
										handleRegisterShow();
									}}
								>
									Register
								</Button>
							</li>
						)}
					</ul>
				</div>
			</nav>

			<LoginModal show={LoginShow} onHide={handleLoginClose} />
			<RegisterModal show={RegisterShow} onHide={handleRegisterClose} /> */}
		</div>
	);
};

export default NavbarTop;
