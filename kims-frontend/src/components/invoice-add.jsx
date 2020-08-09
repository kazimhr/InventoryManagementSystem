import React from 'react';
import { Modal, Button, Form, Col } from 'react-bootstrap';
import invoiceService from '../services/InvoiceServices';
import inventoryService from '../services/InventoryServices';

function InvoiceAdd(props) {
	const [ validated, setValidated ] = React.useState(false);
	const [ salesman_id, setSalesman ] = React.useState(0);
	const [ checkqnty, setCheckQnty ] = React.useState([]);
	const [ product_details, setProduct_details ] = React.useState([
		{
			product_id: 0,
			qnty: 0
		}
	]);

	const handleSubmit = (event) => {
		const form = event.currentTarget;
		if (form.checkValidity() === false) {
			event.preventDefault();
			event.stopPropagation();
		} else {
			console.log('inside');
			setValidated(true);
			invoiceService
				.addinvoice({ salesman_id, product_details })
				.then((data) => console.log(data))
				.catch((err) => console.log(err));
		}
	};

	const handleChange = (e, index) => {
		const { name, value } = e.target;
		const list = [ ...product_details ];
		list[index][name] = value;
		setProduct_details(list);
	};

	const handleNewRow = () => {
		setProduct_details([ ...product_details, { product_id: 0, qnty: 0 } ]);
	};

	const handleRemove = (index) => {
		const list = [ ...product_details ];
		list.splice(index, 1);
		setProduct_details(list);
	};

	const getQuantity = (e, index) => {
		console.log(index);
		const list = [ ...product_details ];
		console.log(list);
		inventoryService
			.getSingleinventory(list[index].product_id)
			.then((data) => {
				// console.log(data.product_qnty);
				if (checkqnty[index] !== data.product_qnty) {
					setCheckQnty([ ...checkqnty, data.product_qnty ]);
				}
			})
			.catch((err) => console.log(err));
	};

	console.log(checkqnty);

	return (
		<Modal {...props} size="lg" aria-labelledby="contained-modal-title-vcenter" centered backdrop="static">
			<Modal.Header>
				<Modal.Title id="contained-modal-title-vcenter">Add New Invoice</Modal.Title>
			</Modal.Header>
			<Modal.Body>
				<Form noValidate validated={validated} onSubmit={handleSubmit}>
					<Form.Group as={Col} md="4" controlId="validationCustom01" style={{ textAlign: 'center' }}>
						<Form.Label>Salesman Id</Form.Label>
						<Form.Control
							required
							type="number"
							placeholder="Salesman Id"
							value={salesman_id}
							onChange={(e) => setSalesman(e.target.value)}
						/>
						<Form.Control.Feedback>Looks good!</Form.Control.Feedback>
					</Form.Group>
					{product_details.map((item, i) => {
						return (
							<Form.Row key={i}>
								<Form.Group as={Col} md="4" controlId="validationCustom01">
									<Form.Label>Product Id</Form.Label>
									<Form.Control
										required
										name="product_id"
										type="number"
										placeholder="Product Id"
										value={item.product_id}
										onChange={(e) => handleChange(e, i)}
										onBlur={(e) => getQuantity(e, i)}
									/>
									<Form.Control.Feedback>Looks good!</Form.Control.Feedback>
								</Form.Group>

								<Form.Group as={Col} md="4" controlId="validationCustom02">
									<Form.Label>Avaliable Quantity</Form.Label>
									<Form.Control
										required
										type="number"
										placeholder="Avaliable Quantity"
										value={checkqnty[i]}
										disabled
									/>
									<Form.Control.Feedback>Looks good!</Form.Control.Feedback>
								</Form.Group>
								<Form.Group as={Col} md="4" controlId="validationCustom02">
									<Form.Label>Quantity</Form.Label>
									<Form.Control
										required
										name="qnty"
										type="number"
										placeholder="Quantity"
										value={item.qnty}
										onChange={(e) => handleChange(e, i)}
									/>
									<Form.Control.Feedback>Looks good!</Form.Control.Feedback>
								</Form.Group>
								<Button hidden={i === 0 ? true : false} onClick={(e) => handleRemove(i)}>
									Remove
								</Button>
							</Form.Row>
						);
					})}
					<Form.Row>
						<Button onClick={handleNewRow} style={{ width: '30%', margin: 'auto' }}>
							Add
						</Button>
					</Form.Row>
					<Modal.Footer>
						<Button type="submit">Submit form</Button>
						<Button
							onClick={() => {
								props.onHide();
								setSalesman(0);
								setProduct_details([
									{
										product_id: 0,
										qnty: 0
									}
								]);
								setCheckQnty([]);
							}}
						>
							Close
						</Button>
					</Modal.Footer>
				</Form>
			</Modal.Body>
		</Modal>
	);
}

export default InvoiceAdd;
