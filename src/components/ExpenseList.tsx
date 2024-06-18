import { useState } from "react";

interface ListItemProps {
	active: boolean;
}

interface Props {
	display: boolean; 
	// displayAll: () => void; 
	//displayGroceries: () => void;
	// displayUtilities: () => void;
	// displayEntertainment: () => void;
}

function ExpenseList({ display }: Props) {
	const items = [
	{
		description: "Milk",
		amount: 5,
		categories: 'Groceries'
	},
	{	
		description: "Soap",
		amount: 2,
		categories: 'Utilities'

	}
	]

	let total = 0;
	for (let item of items)
		total += item.amount;
	
	

	return (
		<table className="table">
		  <thead>
		    <tr>
		      <th scope="col">Description</th>
		      <th scope="col">Amount</th>
		      <th scope="col">Categories</th>
		      <th scope="col"></th>
		    </tr>
		  </thead>
		  <tbody>
		  	{items.map((item, index) => (
			    <tr key={index}>
			      <td>{item.description}</td>
			      <td>{item.amount}</td>
			      <td>{item.categories}</td>
			      <td><button>Delete</button></td>
			    </tr>
			  	))}
		    <tr>
		      <th scope="col">Total</th>
		      <th scope="col">{total}</th>
		      <td></td>
		      <td></td>
		    </tr>
		  </tbody>
		</table>

	);
}

export default ExpenseList;
