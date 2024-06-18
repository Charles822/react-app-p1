import React from 'react'
import { useState } from "react";


interface Props {
	header: () => void;
	onHeader: () => void;
	onGroceries: () => void;
	onUtilities: () => void;
	onEntertainment: () => void;

}

const ExpenseFilter = ({ onGroceries, onUtilities, onEntertainment, header, onHeader }: Props) => {
	
	return (
		<div className="dropdown">
		  <button className="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
		  {header}
		  </button>
		  <ul className="dropdown-menu">
		    <li><a className="dropdown-item" href="#" onClick={onHeader}>All Categories</a></li>
		    <li><a className="dropdown-item" href="#" onClick={onGroceries}>Groceries</a></li>
		    <li><a className="dropdown-item" href="#" onClick={onUtilities}>Utilities</a></li>
		    <li><a className="dropdown-item" href="#" onClick={onEntertainment}>Entertainment</a></li>
		  </ul>
		</div>

	)
}

export default ExpenseFilter