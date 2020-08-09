const mongoose = require('mongoose');
const Joi = require('@hapi/joi');

const productDetailSchema = new mongoose.Schema({ product_id: Number, qnty: Number });

const invoicesSchema = mongoose.Schema({
	salesman_id: Number,
	product_details: [ productDetailSchema ]
});

var Invoices = mongoose.model('Invoices', invoicesSchema);

module.exports.Invoice = Invoices;
