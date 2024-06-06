import { useState } from "react";

interface Props {
	children: string;
	maxChars: number;
	onClick: () => void;
}

function ExpandableText({ children, maxChars, onClick }: Props) {
	const [text, setText] = useState(
		{ children }["children"].substring(0, maxChars) + "...",
	);
	const [buttontText, setButtonText] = useState("More");

	return (
		<>
			<div>
				{" "}
				{text}
				<button
					onClick={() => {
						if (buttontText === "More") {
							setText({ children }["children"] + "...");
							setButtonText("Less");
						} else if (buttontText === "Less") {
							setText(
								{ children }["children"].substring(
									0,
									maxChars,
								) + "...",
							);
							setButtonText("More");
						}
					}}
				>
					{buttontText}
				</button>
			</div>
		</>
	);
}

export default ExpandableText;

//setShorText(text.map(char => text += char)
//{setShorText("abc")}
//{setShorText(children.map(char => text[]
