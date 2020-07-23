import React from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import './App.css';
import './index.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'font-awesome/css/font-awesome.css';
import Sidebar from './components/Sidebar';
import Navbar from './components/Navbar';
import Dashboard from './components/Dashboard';
import Inventory from './components/Inventory';
import Salesperson from './components/Salesperson';
import Retailers from './components/Retailers';
import Purchase from './components/Purchase';
import Accounts from './components/Accounts';
import Invoices from './components/Invoices';
import Help from './components/Help';
import Notfound from './components/Notfound';

function App() {
	return (
		<Router>
			<div className="App">
				<Sidebar />
				<Navbar />
				<Switch>
					<Route path="/not-found" component={Notfound} />
					<Route path="/help" component={Help} />
					<Route path="/invoices" component={Invoices} />
					<Route path="/accounts" component={Accounts} />
					<Route path="/purchase" component={Purchase} />
					<Route path="/retailers" component={Retailers} />
					<Route path="/salesperson" component={Salesperson} />
					<Route path="/inventory" component={Inventory} />
					<Route path="/" exact component={Dashboard} />
					<Redirect to="/not-found" />
				</Switch>
			</div>
		</Router>
	);
}

export default App;
