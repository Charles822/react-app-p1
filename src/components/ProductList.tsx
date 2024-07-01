import React, { useEffect, useState } from "react";

const ProductList = ({ category } : { category: string }) => {
	const [products, setProducts] = useState<string[]>([]);

	useEffect(() => {
		console.log("Fetching products in", category);
		setProducts(['Clothing', 'Household']);
	}, [category]); // the second argument refers to dependencies, if no arguments: useEffect is called every time there is a new render. empty array equal to executing once only. 

	return <div>ProductList</div>;
};

export default ProductList;
