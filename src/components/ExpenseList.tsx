import { useState } from "react";

interface ListItemProps {
	active: boolean;
}

interface Props {
	items: [];
	onClear: (item: object) => void;
}

function ExpenseList({ items, onClear }: Props) {


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
			      <td><button type="button" className="btn btn-outline-danger" onClick={() => onClear(item)}>Delete</button></td>
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
