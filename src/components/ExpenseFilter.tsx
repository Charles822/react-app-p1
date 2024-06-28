import React from 'react'
import { useState } from "react";


interface Props {
	category: string;
	onSelect: (value: string) => void;

}

const ExpenseFilter = ({ category, onSelect }: Props) => {
	
	return (
		<select className="form-select" 
		value={category} 
		onChange={e => onSelect(e.target.value)}>
			<option value="All Categories">All Categories</option>
			<option value="Groceries">Groceries</option>
			<option value="Utilities" >Utilities</option>
			<option value="Entertainment">Entertainment</option>

		</select>		

	)
}

export default ExpenseFilter;