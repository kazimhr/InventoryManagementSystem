var express = require('express');
var router = express.Router();
var { Inventory } = require('../../models/inventoryModel');
const validateInventory = require('../../middleware/validateInventory');
const auth = require('../../middleware/auth');
const admin = require('../../middleware/admin');

router.get('/', async (req, res) => {
	const invent = await Inventory.find();
	res.send(invent);
});

router.get('/:id', async (req, res) => {
	const invent = await Inventory.findOne({ product_id: req.params.id });
	if (!invent) return res.status(400).send('Not found');
	res.send(invent);
});

router.post('/post', validateInventory, async (req, res) => {
	const postInventory = new Inventory({
		product_id: req.body.product_id,
		product_name: req.body.product_name,
		product_qnty: req.body.product_qnty,
		company: req.body.company
	});

	await postInventory.save();
	return res.send(postInventory);
});

router.put('/:id', validateInventory, async (req, res) => {
	//update using mongodb generated id

	// var prod = await Inventory.findById(req.params.id);
	// prod.product_id = req.body.product_id;
	// prod.product_name = req.body.product_name;
	// prod.product_qnty = req.body.product_qnty;
	// prod.company = req.body.company;

	// console.log(prod);
	// await prod.save();
	// return res.send(prod);

	//update using custom id
	const updated = await Inventory.findOne({ product_id: req.params.id }, function(err, user) {
		user.product_id = req.body.product_id;
		user.product_name = req.body.product_name;
		user.product_qnty = req.body.product_qnty;
		user.company = req.body.company;
		user.save(function(err) {
			if (err) {
				console.error('ERROR!');
			}
		});
	});

	res.send(updated);
});

// delete using custom id

router.delete('/:id', async (req, res) => {
	const del = await Inventory.deleteOne({ product_id: req.params.id }, function(err) {
		if (err) console.log(err);
		console.log('Successful deletion');
	});

	res.send(del);
});

module.exports = router;
