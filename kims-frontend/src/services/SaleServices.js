import GenericService from './GenericServices';
class SaleService extends GenericService {
	constructor() {
		super();
	}
	addsale = (data) => this.post('sale/post', data);
	deletesale = (_id) => this.delete('sale/' + _id);
	updatesale = (_id, data) => this.put('sale/' + _id, data);
	updatecreditsale = (_id, data) => this.put('sale/credit/' + _id, data);
	getsale = () => this.get('sale');
	getSinglesale = (id) => this.get('sale/' + id);
}

let saleService = new SaleService();
export default saleService;
