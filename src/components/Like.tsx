import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import { useState } from "react";

interface Props {
	onClick: () => void;
}

const Like = ({ onClick }: Props) => {
	const [status, setStatus] = useState(false);

	const toggle = () => {
		setStatus(!status);
		console.log('la bite');
	}

	if (status)
		return <AiFillHeart size={20} color="red" onClick={toggle} ></AiFillHeart>;
	return <AiOutlineHeart size={20} onClick={toggle} ></AiOutlineHeart>;

	
};

export default Like;
