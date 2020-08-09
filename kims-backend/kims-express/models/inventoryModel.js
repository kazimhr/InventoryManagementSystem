const mongoose = require('mongoose');
const Joi = require('@hapi/joi');

const inventorySchema = mongoose.Schema({
	product_id: { type: Number, unique: true },
	product_name: String,
	product_qnty: Number,
	company: String,
	date: { type: Date, default: Date.now }
});

var Inventory = mongoose.model('Inventory', inventorySchema);

function validateInventory(data) {
	const schema = Joi.object({
		product_id: Joi.number().required(),
		product_name: Joi.string().required(),
		product_qnty: Joi.number().required(),
		company: Joi.string().required()
	});

	return schema.validate(data, { abortEarly: false });
}

module.exports.Inventory = Inventory;
module.exports.validate = validateInventory;
