import React from 'react';
import { Button, Modal, Form } from 'react-bootstrap';
import userService from '../../services/UserServices';
import { toast } from 'react-toastify';
import LoginModal from './LoginModal';

const RegisterModal = (props) => {
	const [ email, setEmail ] = React.useState('kazimhr@hotmail.com');
	const [ password, setPassword ] = React.useState('test');
	const [ confirmPassword, setConfirmPassword ] = React.useState('test');
	const [ name, setName ] = React.useState('kazim');

	const [ LoginShow, setLoginShow ] = React.useState(false);
	const handleLoginClose = () => setLoginShow(false);
	const submitCheck = async (e) => {
		if (password !== confirmPassword) {
			toast.error('Passwords dont match.', {
				position: toast.POSITION.TOP_LEFT
			});
		} else {
			userService
				.register(name, email, password)
				.then((data) => {
					props.onHide();
					setLoginShow(true);
				})
				.catch((err) => {
					console.log(err);
					toast.error('Email Already exist', {
						position: toast.POSITION.TOP_LEFT
					});
				});
		}
	};

	return (
		<div className="content-div">
			<Modal {...props} backdrop="static" keyboard={false}>
				<Modal.Header closeButton>
					<Modal.Title>Welcome!</Modal.Title>
				</Modal.Header>
				<Modal.Body>
					<Form>
						<Form.Group controlId="formBasicEmail">
							<Form.Label>Name</Form.Label>
							<Form.Control
								type="string"
								placeholder="Enter name"
								value={name}
								onChange={(e) => setName(e.target.value)}
							/>
							<Form.Text className="text-muted">We'll never share your email with anyone else.</Form.Text>
						</Form.Group>
						<Form.Group controlId="formBasicEmail">
							<Form.Label>Email address</Form.Label>
							<Form.Control
								type="email"
								placeholder="Enter email"
								value={email}
								onChange={(e) => setEmail(e.target.value)}
							/>
							<Form.Text className="text-muted">We'll never share your email with anyone else.</Form.Text>
						</Form.Group>

						<Form.Group controlId="formBasicPassword">
							<Form.Label>Password</Form.Label>
							<Form.Control
								type="password"
								placeholder="Password"
								value={password}
								onChange={(e) => setPassword(e.target.value)}
							/>
						</Form.Group>
						<Form.Group controlId="formBasicPassword">
							<Form.Label>Confirm Password</Form.Label>
							<Form.Control
								type="password"
								placeholder="Password"
								value={confirmPassword}
								onChange={(e) => setConfirmPassword(e.target.value)}
							/>
						</Form.Group>
						<Form.Group controlId="formBasicCheckbox">
							<Form.Check type="checkbox" label="Check me out" />
						</Form.Group>

						<Modal.Footer>
							<Button variant="primary" onClick={submitCheck}>
								Submit
							</Button>
							<Button variant="secondary" onClick={props.onHide}>
								Close
							</Button>
						</Modal.Footer>
					</Form>
				</Modal.Body>
			</Modal>
			<LoginModal show={LoginShow} onHide={handleLoginClose} />
		</div>
	);
};

export default RegisterModal;
