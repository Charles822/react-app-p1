import styles from "./Button.module.css"

interface Props {
	children: string;
	onClick: () => void;
}

const Button = ({ children, onClick, color = 'primary' }: Props) => {
	return (
		<button className={styles['web3-button']} onClick={onClick}>
			{children}
		</button>
	);
};

export default Button;
