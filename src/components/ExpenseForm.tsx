import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const schema = z.object({
	description: z.string().min(3, { message: 'Description must be at least 3 characters' }),
	amount: z.number({ invalid_type_error: 'Amount field is required'}).min(1, { message: 'Amount must be at least 1'}),
	categories: z.string().min(3, { message: 'Category must be at least 3 characters' })
});

type FormData = z.infer<typeof schema>;

interface Props {
	onTransfer: (data: object) => void;
}

const ExpenseForm = ({ onTransfer }: Props) => {
	const {
		register,
		handleSubmit,
		formState: { errors, isValid },
	} = useForm<FormData>({ resolver: zodResolver(schema) });

	const onSubmit = (data: FieldValues) => onTransfer(data);

	return (
		<form onSubmit={handleSubmit(onSubmit)}>
			<div className="mb-3">
				<label htmlFor="description" className="form-label">
					Description
				</label>
				<input
					{...register("description")}
					id="description"
					type="text"
					className="form-control"
				/>
				{errors.name && (
					<p className="text-danger">{errors.description.message}</p>
				)}
			</div>
			<div className="mb-3">
				<label htmlFor="amount" className="form-label">
					Amount
				</label>
				<input
					{...register("amount", { valueAsNumber: true})}
					id="amount"
					type="number"
					className="form-control"
				/> 
				{errors.age && (
					<p className="text-danger">{errors.amount.message}</p>
				)}
			</div>
			<div className="mb-3">
				<label htmlFor="categories" className="form-label">
					Category
				</label>
				<input
					{...register("categories")}
					id="categories"
					type="text"
					className="form-control"
				/>
				{errors.name && (
					<p className="text-danger">{errors.categories.message}</p>
				)}
			</div>
			<button disabled={!isValid}className="btn btn-primary" type="submit">
				Submit
			</button>
		</form>
	);
};

export default ExpenseForm;
