import React from 'react'
import { useState } from "react";


interface Props {
	children: string;
	maxChars?: number; // ? to make it optionnal and add a default value
	onClick: () => void;
}

const ExpandableText = ({children, maxChars = 100}: Props) => {
	const [isExpanded, setExpanded] = useState(false);

	if (children.length <= maxChars) return <p>{children}</p>;

	const text = isExpanded ? children : children.substring(0, maxChars);

	return <p>{text}...<button onClick={() => setExpanded(!isExpanded)}>{isExpanded ? 'Less' : 'More'}</button></p>;

};

export default ExpandableText


// interface Props {
// 	children: string;
// 	maxChars: number;

// 	onClick: () => void;
// }

// function ExpandableText({ children, maxChars, onClick }: Props) {
// 	const [text, setText] = useState(
// 		{ children }["children"].substring(0, maxChars) + "...",
// 	);
// 	const [buttontText, setButtonText] = useState("More");

// 	return (
// 		<>
// 			<div>
// 				{" "}
// 				{text}
// 				<button
// 					onClick={() => {
// 						if (buttontText === "More") {
// 							setText({ children }["children"] + "...");
// 							setButtonText("Less");
// 						} else if (buttontText === "Less") {
// 							setText(
// 								{ children }["children"].substring(
// 									0,
// 									maxChars,
// 								) + "...",
// 							);
// 							setButtonText("More");
// 						}
// 					}}
// 				>
// 					{buttontText}
// 				</button>
// 			</div>
// 		</>
// 	);
// }

// export default ExpandableText;