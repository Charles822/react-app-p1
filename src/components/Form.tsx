import React, { FormEvent, useRef } from "react";

const Form = () => {
	const nameRef = useRef<HtmlInputElement>(null);
	const ageRef = useRef<HtmlInputElement>(null);
	const person = { name: '', age: 0 };

	const hanldleSubmit = (event: FormEvent) => {
		event.preventDefault();
		if (nameRef.current !== null)
			person.name = nameRef.current.value;
		if (ageRef.current !== null)
			person.age = parseInt(ageRef.current.value);
		console.log(person);

	}

	return (
		<form onSubmit={hanldleSubmit}>
			<div className="mb-3">
				<label htmlFor="name" className="form-label">Name</label>
				<input ref={nameRef} id="name" type="text" className="form-control" />
			</div>
			<div className="mb-3">
				<label htmlFor="age" className="form-label">Age</label>
				<input ref={ageRef} id="age" type="number" className="form-control" />
			</div>
			<button className="btn btn-primary" type="submit">Submit</button>
		</form>
	);
};

export default Form;
